/**
 * Health calculator functions for BMI, BMR, and TDEE
 */

export interface UserProfile {
  age: number;
  gender: 'male' | 'female';
  weight: number; // kg
  height: number; // cm
  activityLevel: 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extremely_active';
}

export interface BMIResult {
  bmi: number;
  category: string;
  isHealthy: boolean;
}

export interface BMRResult {
  bmr: number; // calories per day
  description: string;
}

export interface TDEEResult {
  tdee: number; // calories per day
  bmr: number;
  activityMultiplier: number;
  description: string;
}

/**
 * Calculate Body Mass Index (BMI)
 * Formula: BMI = weight(kg) / (height(m))^2
 */
export function calculateBMI(weight: number, height: number): BMIResult {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let category: string;
  let isHealthy: boolean;
  
  if (bmi < 18.5) {
    category = 'Underweight';
    isHealthy = false;
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal weight';
    isHealthy = true;
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    isHealthy = false;
  } else {
    category = 'Obese';
    isHealthy = false;
  }
  
  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    isHealthy
  };
}

/**
 * Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
 * Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
 * Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
 */
export function calculateBMR(profile: Pick<UserProfile, 'age' | 'gender' | 'weight' | 'height'>): BMRResult {
  const { age, gender, weight, height } = profile;
  
  let bmr: number;
  
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  
  return {
    bmr: Math.round(bmr),
    description: 'Calories burned at rest per day'
  };
}

/**
 * Calculate Total Daily Energy Expenditure (TDEE)
 * TDEE = BMR × Activity Factor
 */
export function calculateTDEE(profile: UserProfile): TDEEResult {
  const bmrResult = calculateBMR(profile);
  const bmr = bmrResult.bmr;
  
  const activityMultipliers = {
    sedentary: 1.2, // Little to no exercise
    lightly_active: 1.375, // Light exercise 1-3 days/week
    moderately_active: 1.55, // Moderate exercise 3-5 days/week
    very_active: 1.725, // Heavy exercise 6-7 days/week
    extremely_active: 1.9 // Very heavy exercise, physical job
  };
  
  const activityMultiplier = activityMultipliers[profile.activityLevel];
  const tdee = bmr * activityMultiplier;
  
  return {
    tdee: Math.round(tdee),
    bmr,
    activityMultiplier,
    description: 'Total calories needed per day including activity'
  };
}

/**
 * Get recommended daily caloric intake for weight goals
 */
export function getWeightGoalCalories(tdee: number, goal: 'lose' | 'maintain' | 'gain'): number {
  switch (goal) {
    case 'lose':
      return Math.round(tdee - 500); // 500 calorie deficit for ~1lb/week loss
    case 'maintain':
      return tdee;
    case 'gain':
      return Math.round(tdee + 500); // 500 calorie surplus for ~1lb/week gain
    default:
      return tdee;
  }
}