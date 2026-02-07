/**
 * Recommended Daily Allowance (RDA) data and utilities
 * Based on FDA and WHO guidelines
 */

export interface MicronutrientRDA {
  vitamin_a: number; // mcg
  vitamin_c: number; // mg
  vitamin_d: number; // mcg
  vitamin_e: number; // mg
  vitamin_k: number; // mcg
  vitamin_b1: number; // mg (thiamin)
  vitamin_b2: number; // mg (riboflavin)
  vitamin_b3: number; // mg (niacin)
  vitamin_b6: number; // mg
  vitamin_b9: number; // mcg (folate)
  vitamin_b12: number; // mcg
  calcium: number; // mg
  iron: number; // mg
  magnesium: number; // mg
  zinc: number; // mg
  potassium: number; // mg
  sodium: number; // mg
}

export interface RDATargets extends MicronutrientRDA {
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
  fiber: number; // g
}

/**
 * Get RDA targets based on age and gender
 */
export function getRDATargets(
  age: number,
  gender: 'male' | 'female',
  tdee: number,
  weight: number
): RDATargets {
  // Macronutrients
  const protein = Math.round(weight * 1.6); // 1.6g per kg body weight
  const fat = Math.round((tdee * 0.25) / 9); // 25% of calories
  const carbs = Math.round((tdee - protein * 4 - fat * 9) / 4);
  const fiber = gender === 'male' ? 38 : 25;

  // Micronutrients based on age and gender
  let rda: MicronutrientRDA;

  if (gender === 'male') {
    if (age < 19) {
      rda = {
        vitamin_a: 900,
        vitamin_c: 75,
        vitamin_d: 15,
        vitamin_e: 15,
        vitamin_k: 75,
        vitamin_b1: 1.2,
        vitamin_b2: 1.3,
        vitamin_b3: 16,
        vitamin_b6: 1.3,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1300,
        iron: 11,
        magnesium: 410,
        zinc: 11,
        potassium: 3400,
        sodium: 2300,
      };
    } else if (age < 51) {
      rda = {
        vitamin_a: 900,
        vitamin_c: 90,
        vitamin_d: 15,
        vitamin_e: 15,
        vitamin_k: 120,
        vitamin_b1: 1.2,
        vitamin_b2: 1.3,
        vitamin_b3: 16,
        vitamin_b6: 1.3,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1000,
        iron: 8,
        magnesium: 400,
        zinc: 11,
        potassium: 3400,
        sodium: 2300,
      };
    } else {
      rda = {
        vitamin_a: 900,
        vitamin_c: 90,
        vitamin_d: 20,
        vitamin_e: 15,
        vitamin_k: 120,
        vitamin_b1: 1.2,
        vitamin_b2: 1.3,
        vitamin_b3: 16,
        vitamin_b6: 1.7,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1200,
        iron: 8,
        magnesium: 420,
        zinc: 11,
        potassium: 3400,
        sodium: 2300,
      };
    }
  } else {
    // Female
    if (age < 19) {
      rda = {
        vitamin_a: 700,
        vitamin_c: 65,
        vitamin_d: 15,
        vitamin_e: 15,
        vitamin_k: 75,
        vitamin_b1: 1.0,
        vitamin_b2: 1.0,
        vitamin_b3: 14,
        vitamin_b6: 1.2,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1300,
        iron: 15,
        magnesium: 360,
        zinc: 9,
        potassium: 2600,
        sodium: 2300,
      };
    } else if (age < 51) {
      rda = {
        vitamin_a: 700,
        vitamin_c: 75,
        vitamin_d: 15,
        vitamin_e: 15,
        vitamin_k: 90,
        vitamin_b1: 1.1,
        vitamin_b2: 1.1,
        vitamin_b3: 14,
        vitamin_b6: 1.3,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1000,
        iron: 18,
        magnesium: 310,
        zinc: 8,
        potassium: 2600,
        sodium: 2300,
      };
    } else {
      rda = {
        vitamin_a: 700,
        vitamin_c: 75,
        vitamin_d: 20,
        vitamin_e: 15,
        vitamin_k: 90,
        vitamin_b1: 1.1,
        vitamin_b2: 1.1,
        vitamin_b3: 14,
        vitamin_b6: 1.5,
        vitamin_b9: 400,
        vitamin_b12: 2.4,
        calcium: 1200,
        iron: 8,
        magnesium: 320,
        zinc: 8,
        potassium: 2600,
        sodium: 2300,
      };
    }
  }

  return {
    calories: tdee,
    protein,
    carbs,
    fat,
    fiber,
    ...rda,
  };
}

/**
 * Get the unit for a nutrient
 */
export function getNutrientUnit(nutrient: keyof RDATargets): string {
  if (nutrient === 'calories') return 'kcal';
  if (nutrient === 'protein' || nutrient === 'carbs' || nutrient === 'fat' || nutrient === 'fiber') return 'g';
  if (
    nutrient === 'vitamin_a' ||
    nutrient === 'vitamin_d' ||
    nutrient === 'vitamin_k' ||
    nutrient === 'vitamin_b9' ||
    nutrient === 'vitamin_b12'
  ) {
    return 'mcg';
  }
  return 'mg';
}

/**
 * Format nutrient name for display
 */
export function formatNutrientName(nutrient: keyof RDATargets): string {
  const names: Record<keyof RDATargets, string> = {
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbohydrates',
    fat: 'Fat',
    fiber: 'Fiber',
    vitamin_a: 'Vitamin A',
    vitamin_c: 'Vitamin C',
    vitamin_d: 'Vitamin D',
    vitamin_e: 'Vitamin E',
    vitamin_k: 'Vitamin K',
    vitamin_b1: 'Vitamin B1 (Thiamin)',
    vitamin_b2: 'Vitamin B2 (Riboflavin)',
    vitamin_b3: 'Vitamin B3 (Niacin)',
    vitamin_b6: 'Vitamin B6',
    vitamin_b9: 'Vitamin B9 (Folate)',
    vitamin_b12: 'Vitamin B12',
    calcium: 'Calcium',
    iron: 'Iron',
    magnesium: 'Magnesium',
    zinc: 'Zinc',
    potassium: 'Potassium',
    sodium: 'Sodium',
  };
  return names[nutrient];
}
