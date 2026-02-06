'use client';

import { useState } from 'react';
import { searchFoods, extractNutrients, formatServingSize, type USDAFood } from '@/lib/usda-api';
import { addEntry, getTodayDate } from '@/lib/food-log';
import { scaleNutrition } from '@/lib/nutrition';

export default function FoodSearch({ onFoodAdded }: { onFoodAdded?: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<USDAFood[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFood, setSelectedFood] = useState<USDAFood | null>(null);
  const [servingSize, setServingSize] = useState('100');
  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const data = await searchFoods(query, 1, 20);
      setResults(data.foods);
      
      if (data.foods.length === 0) {
        setError('No foods found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to search foods. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFood = (food: USDAFood) => {
    setSelectedFood(food);
    setServingSize(food.servingSize?.toString() || '100');
  };

  const handleAddFood = () => {
    if (!selectedFood) return;

    const baseNutrients = extractNutrients(selectedFood);
    const scaledNutrients = scaleNutrition(
      baseNutrients,
      parseFloat(servingSize) || 100,
      selectedFood.servingSize || 100
    );

    addEntry({
      date: getTodayDate(),
      foodName: selectedFood.description,
      brandName: selectedFood.brandName || selectedFood.brandOwner,
      fdcId: selectedFood.fdcId,
      servingSize: parseFloat(servingSize) || 100,
      servingSizeUnit: selectedFood.servingSizeUnit || 'g',
      calories: scaledNutrients.calories,
      protein: scaledNutrients.protein,
      carbs: scaledNutrients.carbs,
      fat: scaledNutrients.fat,
      fiber: scaledNutrients.fiber,
      sugar: scaledNutrients.sugar,
      mealType,
    });

    // Reset form
    setSelectedFood(null);
    setQuery('');
    setResults([]);
    setServingSize('100');
    
    // Notify parent component
    if (onFoodAdded) {
      onFoodAdded();
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search foods... (e.g., chicken breast, banana)"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Search Results */}
      {results.length > 0 && !selectedFood && (
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Search Results</h3>
          <div className="max-h-96 overflow-y-auto space-y-2">
            {results.map((food) => {
              const nutrients = extractNutrients(food);
              return (
                <div
                  key={food.fdcId}
                  onClick={() => handleSelectFood(food)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{food.description}</p>
                      {food.brandName && (
                        <p className="text-sm text-gray-600">{food.brandName}</p>
                      )}
                      <p className="text-sm text-gray-500">
                        {formatServingSize(food)}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-semibold">{nutrients.calories} cal</p>
                      <p className="text-gray-600">
                        P: {nutrients.protein.toFixed(1)}g | C: {nutrients.carbs.toFixed(1)}g | F: {nutrients.fat.toFixed(1)}g
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Food Form */}
      {selectedFood && (
        <div className="p-6 border-2 border-blue-500 rounded-lg space-y-4 bg-blue-50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{selectedFood.description}</h3>
              {selectedFood.brandName && (
                <p className="text-sm text-gray-600">{selectedFood.brandName}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedFood(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Serving Size</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  step="0.1"
                />
                <span className="flex items-center px-3 text-gray-600">
                  {selectedFood.servingSizeUnit || 'g'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Meal Type</label>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value as 'breakfast' | 'lunch' | 'dinner' | 'snack')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
            </div>
          </div>

          {/* Nutrition Preview */}
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-medium mb-2">Nutrition Summary</h4>
            {(() => {
              const baseNutrients = extractNutrients(selectedFood);
              const scaled = scaleNutrition(
                baseNutrients,
                parseFloat(servingSize) || 100,
                selectedFood.servingSize || 100
              );
              return (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: <span className="font-semibold">{scaled.calories}</span></div>
                  <div>Protein: <span className="font-semibold">{scaled.protein}g</span></div>
                  <div>Carbs: <span className="font-semibold">{scaled.carbs}g</span></div>
                  <div>Fat: <span className="font-semibold">{scaled.fat}g</span></div>
                  <div>Fiber: <span className="font-semibold">{scaled.fiber}g</span></div>
                  <div>Sugar: <span className="font-semibold">{scaled.sugar}g</span></div>
                </div>
              );
            })()}
          </div>

          <button
            onClick={handleAddFood}
            className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
          >
            Add to Food Log
          </button>
        </div>
      )}
    </div>
  );
}
