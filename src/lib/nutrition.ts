// Nutrition calculation utilities

export interface MacroTargets {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface NutritionSummary {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

// Calculate daily macro targets based on TDEE and goals
export function calculateMacroTargets(
  tdee: number,
  goal: 'lose' | 'maintain' | 'gain',
  proteinPerKg: number = 1.8,
  bodyWeightKg: number = 70
): MacroTargets {
  // Adjust calories based on goal
  let targetCalories = tdee;
  if (goal === 'lose') {
    targetCalories = tdee * 0.8; // 20% deficit
  } else if (goal === 'gain') {
    targetCalories = tdee * 1.1; // 10% surplus
  }

  // Protein: based on body weight (1.6-2.2g per kg for muscle building)
  const protein = proteinPerKg * bodyWeightKg;
  const proteinCalories = protein * 4;

  // Fat: 25-30% of total calories
  const fatCalories = targetCalories * 0.25;
  const fat = fatCalories / 9;

  // Carbs: remaining calories
  const carbCalories = targetCalories - proteinCalories - fatCalories;
  const carbs = carbCalories / 4;

  return {
    calories: Math.round(targetCalories),
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fat: Math.round(fat),
  };
}

// Calculate percentage of target consumed
export function calculateProgress(
  consumed: number,
  target: number
): { percentage: number; remaining: number } {
  const percentage = target > 0 ? (consumed / target) * 100 : 0;
  const remaining = Math.max(0, target - consumed);
  
  return {
    percentage: Math.round(percentage),
    remaining: Math.round(remaining),
  };
}

// Sum up nutrition from multiple food entries
export function sumNutrition(entries: NutritionSummary[]): NutritionSummary {
  return entries.reduce(
    (total, entry) => ({
      calories: total.calories + entry.calories,
      protein: total.protein + entry.protein,
      carbs: total.carbs + entry.carbs,
      fat: total.fat + entry.fat,
      fiber: total.fiber + entry.fiber,
      sugar: total.sugar + entry.sugar,
    }),
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
    }
  );
}

// Scale nutrition based on serving size
export function scaleNutrition(
  nutrition: NutritionSummary,
  servingSize: number,
  baseServingSize: number = 100
): NutritionSummary {
  const multiplier = servingSize / baseServingSize;
  
  return {
    calories: Math.round(nutrition.calories * multiplier),
    protein: Math.round(nutrition.protein * multiplier * 10) / 10,
    carbs: Math.round(nutrition.carbs * multiplier * 10) / 10,
    fat: Math.round(nutrition.fat * multiplier * 10) / 10,
    fiber: Math.round(nutrition.fiber * multiplier * 10) / 10,
    sugar: Math.round(nutrition.sugar * multiplier * 10) / 10,
  };
}

// Get color for progress bar based on percentage
export function getProgressColor(percentage: number): string {
  if (percentage < 50) return 'bg-red-500';
  if (percentage < 80) return 'bg-yellow-500';
  if (percentage < 100) return 'bg-green-500';
  if (percentage < 120) return 'bg-blue-500';
  return 'bg-purple-500';
}

// Format number with one decimal place
export function formatNutrient(value: number): string {
  return value.toFixed(1);
}

// Calculate calories from macros
export function calculateCaloriesFromMacros(
  protein: number,
  carbs: number,
  fat: number
): number {
  return Math.round(protein * 4 + carbs * 4 + fat * 9);
}
