'use client';

import { useState } from 'react';
import FoodSearch from '@/components/FoodSearch';
import DailyFoodLog from '@/components/DailyFoodLog';
import { calculateMacroTargets, type MacroTargets } from '@/lib/nutrition';

export default function LogPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [showTargets, setShowTargets] = useState(false);

  const defaultTargets: MacroTargets = calculateMacroTargets(2500, 'maintain', 1.8, 75);

  const handleFoodAdded = () => {
    setRefreshKey(Date.now());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Food Log</h1>
              <p className="text-gray-600 mt-2">Track your daily nutrition and reach your goals</p>
            </div>
            <button
              onClick={() => setShowTargets(!showTargets)}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
            >
              {showTargets ? 'Hide' : 'Show'} Targets
            </button>
          </div>

          {showTargets && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold mb-2">Daily Targets</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Calories:</span>{' '}
                  <span className="font-semibold">{defaultTargets.calories}</span>
                </div>
                <div>
                  <span className="text-gray-600">Protein:</span>{' '}
                  <span className="font-semibold">{defaultTargets.protein}g</span>
                </div>
                <div>
                  <span className="text-gray-600">Carbs:</span>{' '}
                  <span className="font-semibold">{defaultTargets.carbs}g</span>
                </div>
                <div>
                  <span className="text-gray-600">Fat:</span>{' '}
                  <span className="font-semibold">{defaultTargets.fat}g</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                These are example targets. Customize them in Settings coming soon
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-4">Add Food</h2>
              <FoodSearch onFoodAdded={handleFoodAdded} />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <DailyFoodLog targets={defaultTargets} onRefresh={refreshKey} />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Search for foods using their common names</li>
            <li>Adjust serving sizes to match what you actually ate</li>
            <li>Select the meal type to organize your entries throughout the day</li>
            <li>Your data is saved locally in your browser</li>
            <li>Use the date picker to log meals from previous days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
