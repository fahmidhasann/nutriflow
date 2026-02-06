// USDA FoodData Central API Integration

const USDA_API_BASE = 'https://api.nal.usda.gov/fdc/v1';
const API_KEY = process.env.NEXT_PUBLIC_USDA_API_KEY || 'DEMO_KEY';

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

export interface NutrientData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

// Search foods in USDA database
export async function searchFoods(
  query: string,
  pageNumber: number = 1,
  pageSize: number = 10
): Promise<SearchResult> {
  try {
    const params = new URLSearchParams({
      query,
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      dataType: 'Survey (FNDDS),Branded,Foundation,SR Legacy',
      api_key: API_KEY,
    });

    const response = await fetch(`${USDA_API_BASE}/foods/search?${params}`);
    
    if (!response.ok) {
      throw new Error(`USDA API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      foods: data.foods || [],
      totalHits: data.totalHits || 0,
      currentPage: data.currentPage || 1,
      totalPages: data.totalPages || 1,
    };
  } catch (error) {
    console.error('Error searching foods:', error);
    throw error;
  }
}

// Get detailed food information by FDC ID
export async function getFoodDetails(fdcId: number): Promise<USDAFood> {
  try {
    const response = await fetch(
      `${USDA_API_BASE}/food/${fdcId}?api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`USDA API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting food details:', error);
    throw error;
  }
}

// Extract key nutrients from USDA food data
export function extractNutrients(food: USDAFood): NutrientData {
  const nutrients: NutrientData = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
  };

  food.foodNutrients.forEach((nutrient) => {
    const value = nutrient.value || 0;
    
    // Energy (calories)
    if (nutrient.nutrientNumber === '208') {
      nutrients.calories = value;
    }
    // Protein
    else if (nutrient.nutrientNumber === '203') {
      nutrients.protein = value;
    }
    // Carbohydrates
    else if (nutrient.nutrientNumber === '205') {
      nutrients.carbs = value;
    }
    // Total Fat
    else if (nutrient.nutrientNumber === '204') {
      nutrients.fat = value;
    }
    // Fiber
    else if (nutrient.nutrientNumber === '291') {
      nutrients.fiber = value;
    }
    // Total Sugars
    else if (nutrient.nutrientNumber === '269') {
      nutrients.sugar = value;
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
