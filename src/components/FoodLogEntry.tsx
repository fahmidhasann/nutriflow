'use client';

import { type FoodLogEntry } from '@/lib/food-log';

interface FoodLogEntryProps {
  entry: FoodLogEntry;
  onDelete: (id: string) => void;
}

export default function FoodLogEntryComponent({ entry, onDelete }: FoodLogEntryProps) {
  const getMealTypeColor = (mealType?: string) => {
    switch (mealType) {
      case 'breakfast':
        return 'bg-yellow-100 text-yellow-800';
      case 'lunch':
        return 'bg-green-100 text-green-800';
      case 'dinner':
        return 'bg-blue-100 text-blue-800';
      case 'snack':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMealTypeEmoji = (mealType?: string) => {
    switch (mealType) {
      case 'breakfast':
        return '🌅';
      case 'lunch':
        return '🌞';
      case 'dinner':
        return '🌙';
      case 'snack':
        return '🍪';
      default:
        return '🍽️';
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {entry.mealType && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMealTypeColor(entry.mealType)}`}>
                {getMealTypeEmoji(entry.mealType)} {entry.mealType.charAt(0).toUpperCase() + entry.mealType.slice(1)}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-lg">{entry.foodName}</h3>
          {entry.brandName && (
            <p className="text-sm text-gray-600">{entry.brandName}</p>
          )}
          <p className="text-sm text-gray-500">
            {entry.servingSize} {entry.servingSizeUnit}
          </p>
        </div>
        <button
          onClick={() => onDelete(entry.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete entry"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Macros Display */}
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">{entry.calories}</p>
          <p className="text-xs text-gray-600">Calories</p>
        </div>
        <div className="text-center p-2 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{entry.protein.toFixed(1)}</p>
          <p className="text-xs text-gray-600">Protein (g)</p>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <p className="text-2xl font-bold text-yellow-600">{entry.carbs.toFixed(1)}</p>
          <p className="text-xs text-gray-600">Carbs (g)</p>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <p className="text-2xl font-bold text-red-600">{entry.fat.toFixed(1)}</p>
          <p className="text-xs text-gray-600">Fat (g)</p>
        </div>
      </div>

      {/* Additional Info */}
      {(entry.fiber > 0 || entry.sugar > 0) && (
        <div className="mt-3 pt-3 border-t border-gray-200 flex gap-4 text-sm text-gray-600">
          {entry.fiber > 0 && (
            <div>
              <span className="font-medium">Fiber:</span> {entry.fiber.toFixed(1)}g
            </div>
          )}
          {entry.sugar > 0 && (
            <div>
              <span className="font-medium">Sugar:</span> {entry.sugar.toFixed(1)}g
            </div>
          )}
        </div>
      )}

      {entry.notes && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">{entry.notes}</p>
        </div>
      )}
    </div>
  );
}
