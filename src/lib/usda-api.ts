// USDA FoodData Central API Integration

import { NutritionSummary } from './nutrition';
import { SOUTH_ASIAN_FOODS } from './south-asian-foods';
import Fuse from 'fuse.js';

export interface USDAFood {
  fdcId: number;
  description: string;
  brandName?: string;
  brandOwner?: string;
  dataType: string;
  foodNutrients: {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber: string;
    value: number;
    unitName: string;
  }[];
  servingSize?: number;
  servingSizeUnit?: string;
  householdServingFullText?: string;
}

export interface SearchResult {
  foods: USDAFood[];
  totalHits: number;
  currentPage: number;
  totalPages: number;
}

// Nutrient number mapping from USDA to our internal types
const NUTRIENT_MAP: Record<string, keyof NutritionSummary> = {
  '208': 'calories',    // Energy
  '203': 'protein',     // Protein
  '205': 'carbs',       // Carbohydrate
  '204': 'fat',         // Total lipid (fat)
  '291': 'fiber',       // Fiber, total dietary
  '269': 'sugar',       // Sugars, total
  '320': 'vitamin_a',   // Vitamin A, RAE
  '401': 'vitamin_c',   // Vitamin C
  '328': 'vitamin_d',   // Vitamin D (D2 + D3)
  '323': 'vitamin_e',   // Vitamin E (alpha-tocopherol)
  '430': 'vitamin_k',   // Vitamin K (phylloquinone)
  '404': 'vitamin_b1',  // Thiamin (B1)
  '405': 'vitamin_b2',  // Riboflavin (B2)
  '406': 'vitamin_b3',  // Niacin (B3)
  '415': 'vitamin_b6',  // Vitamin B-6
  '417': 'vitamin_b9',  // Folate (B9)
  '418': 'vitamin_b12', // Vitamin B-12
  '301': 'calcium',     // Calcium
  '303': 'iron',        // Iron
  '304': 'magnesium',   // Magnesium
  '309': 'zinc',        // Zinc
  '306': 'potassium',   // Potassium
  '307': 'sodium',      // Sodium
};

// Initialize Fuse for fuzzy search on local South Asian foods
const fuse = new Fuse(SOUTH_ASIAN_FOODS as USDAFood[], {
  keys: ['description'],
  threshold: 0.4, // Typo tolerance: 0.0 is exact, 1.0 is everything
  includeScore: true,
});

// Search foods using our API route
export async function searchFoods(
  query: string,
  pageNumber: number = 1,
  pageSize: number = 10
): Promise<SearchResult> {
  // Use fuzzy search for local matches
  const fuseResults = fuse.search(query);
  const localMatches = fuseResults.map(result => result.item);

  try {
    const params = new URLSearchParams({
      action: 'search',
      query,
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
    });

    const response = await fetch(`/api/usda?${params}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Combine local matches with USDA results
    // Only show local matches on the first page
    const combinedFoods = pageNumber === 1 
      ? [...localMatches, ...(data.foods || [])] 
      : (data.foods || []);

    return {
      foods: combinedFoods,
      totalHits: (data.totalHits || 0) + localMatches.length,
      currentPage: data.currentPage || 1,
      totalPages: Math.max(data.totalPages || 1, pageNumber),
    };
  } catch (error) {
    console.error('Error searching foods:', error);
    // If external API fails, still return local matches if any
    if (localMatches.length > 0) {
      return {
        foods: localMatches,
        totalHits: localMatches.length,
        currentPage: 1,
        totalPages: 1
      };
    }
    throw error;
  }
}

// Get detailed food information by FDC ID using our API route
export async function getFoodDetails(fdcId: number): Promise<USDAFood> {
  // Check local foods first
  const localFood = (SOUTH_ASIAN_FOODS as USDAFood[]).find(f => f.fdcId === fdcId);
  if (localFood) return localFood;

  try {
    const params = new URLSearchParams({
      action: 'food',
      fdcId: fdcId.toString(),
    });

    const response = await fetch(`/api/usda?${params}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting food details:', error);
    throw error;
  }
}

// Extract all nutrients from USDA food data (macros + micros)
export function extractNutrients(food: USDAFood): NutritionSummary {
  const nutrients: NutritionSummary = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
  };

  food.foodNutrients.forEach((nutrient) => {
    const value = nutrient.value || 0;
    const nutrientKey = NUTRIENT_MAP[nutrient.nutrientNumber];
    
    if (nutrientKey) {
      (nutrients as any)[nutrientKey] = value;
    }
  });

  return nutrients;
}

// Format serving size display
export function formatServingSize(food: USDAFood): string {
  if (food.householdServingFullText) {
    return food.householdServingFullText;
  }
  
  if (food.servingSize && food.servingSizeUnit) {
    return `${food.servingSize} ${food.servingSizeUnit}`;
  }
  
  return '100g';
}
