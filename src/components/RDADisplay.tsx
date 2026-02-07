'use client';

import React from 'react';
import { RDATargets, formatNutrientName, getNutrientUnit } from '@/lib/rda';

interface RDADisplayProps {
  rdaTargets: RDATargets;
}

export default function RDADisplay({ rdaTargets }: RDADisplayProps) {
  const macronutrients: (keyof RDATargets)[] = ['calories', 'protein', 'carbs', 'fat', 'fiber'];
  
  const vitamins: (keyof RDATargets)[] = [
    'vitamin_a',
    'vitamin_c',
    'vitamin_d',
    'vitamin_e',
    'vitamin_k',
    'vitamin_b1',
    'vitamin_b2',
    'vitamin_b3',
    'vitamin_b6',
    'vitamin_b9',
    'vitamin_b12',
  ];

  const minerals: (keyof RDATargets)[] = [
    'calcium',
    'iron',
    'magnesium',
    'zinc',
    'potassium',
    'sodium',
  ];

  const renderNutrientRow = (nutrient: keyof RDATargets) => {
    const value = rdaTargets[nutrient];
    const unit = getNutrientUnit(nutrient);
    const name = formatNutrientName(nutrient);

    return (
      <div key={nutrient} className="flex justify-between py-2 border-b border-gray-200">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-900 font-bold">
          {value} {unit}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Your Daily Recommended Intake (RDA)
      </h2>

      {/* Macronutrients Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-600 mb-3">Macronutrients</h3>
        <div className="space-y-1">
          {macronutrients.map(renderNutrientRow)}
        </div>
      </div>

      {/* Vitamins Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-green-600 mb-3">Vitamins</h3>
        <div className="space-y-1">
          {vitamins.map(renderNutrientRow)}
        </div>
      </div>

      {/* Minerals Section */}
      <div className="mb-2">
        <h3 className="text-lg font-bold text-purple-600 mb-3">Minerals</h3>
        <div className="space-y-1">
          {minerals.map(renderNutrientRow)}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> These values are based on FDA and WHO guidelines for your age, gender, and activity level. 
          Consult with a healthcare professional for personalized nutrition advice.
        </p>
      </div>
    </div>
  );
}
