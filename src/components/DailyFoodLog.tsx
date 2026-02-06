'use client';

import { useState, useEffect } from 'react';
import { getEntriesForDate, deleteEntry, getTodayDate, formatDate, type FoodLogEntry } from '@/lib/food-log';
import { sumNutrition, calculateProgress, type MacroTargets } from '@/lib/nutrition';
import FoodLogEntryComponent from './FoodLogEntry';

interface DailyFoodLogProps {
  date?: string;
  targets?: MacroTargets;
  onRefresh?: number; // Timestamp to trigger refresh
}

export default function DailyFoodLog({ date, targets, onRefresh }: DailyFoodLogProps) {
  const [entries, setEntries] = useState<FoodLogEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState(date || getTodayDate());

  useEffect(() => {
    const loadedEntries = getEntriesForDate(selectedDate);
    loadedEntries.sort((a, b) => b.timestamp - a.timestamp);
    setEntries(loadedEntries);
  }, [selectedDate, onRefresh]);

  const loadEntries = () => {
    const loadedEntries = getEntriesForDate(selectedDate);
    loadedEntries.sort((a, b) => b.timestamp - a.timestamp);
    setEntries(loadedEntries);
  };

  const handleDeleteEntry = (id: string) => {
    if (confirm('Are you sure you want to delete this entry?')) {
      deleteEntry(id);
      loadEntries();
    }
  };

  const handleDateChange = (direction: 'prev' | 'next') => {
    const currentDate = new Date(selectedDate + 'T00:00:00');
    if (direction === 'prev') {
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setSelectedDate(formatDate(currentDate));
  };

  const isToday = selectedDate === getTodayDate();

  // Calculate totals
  const totals = sumNutrition(entries);

  // Group entries by meal type
  const groupedEntries = entries.reduce((groups, entry) => {
    const mealType = entry.mealType || 'other';
    if (!groups[mealType]) {
      groups[mealType] = [];
    }
    groups[mealType].push(entry);
    return groups;
  }, {} as Record<string, FoodLogEntry[]>);

  const mealOrder = ['breakfast', 'lunch', 'dinner', 'snack', 'other'];

  return (
    <div className="space-y-6">
      {/* Date Selector */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleDateChange('prev')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {isToday ? 'Today' : new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mt-1 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={() => handleDateChange('next')}
          disabled={isToday}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Daily Summary */}
      <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-4">Daily Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-3xl font-bold">{totals.calories}</p>
            <p className="text-blue-100">Calories</p>
            {targets && (
              <p className="text-sm text-blue-100 mt-1">
                {calculateProgress(totals.calories, targets.calories).remaining} left
              </p>
            )}
          </div>
          <div>
            <p className="text-3xl font-bold">{totals.protein.toFixed(1)}</p>
            <p className="text-blue-100">Protein (g)</p>
            {targets && (
              <p className="text-sm text-blue-100 mt-1">
                {calculateProgress(totals.protein, targets.protein).remaining.toFixed(1)} left
              </p>
            )}
          </div>
          <div>
            <p className="text-3xl font-bold">{totals.carbs.toFixed(1)}</p>
            <p className="text-blue-100">Carbs (g)</p>
            {targets && (
              <p className="text-sm text-blue-100 mt-1">
                {calculateProgress(totals.carbs, targets.carbs).remaining.toFixed(1)} left
              </p>
            )}
          </div>
          <div>
            <p className="text-3xl font-bold">{totals.fat.toFixed(1)}</p>
            <p className="text-blue-100">Fat (g)</p>
            {targets && (
              <p className="text-sm text-blue-100 mt-1">
                {calculateProgress(totals.fat, targets.fat).remaining.toFixed(1)} left
              </p>
            )}
          </div>
        </div>

        {/* Progress Bars */}
        {targets && (
          <div className="mt-6 space-y-3">
            {[
              { label: 'Calories', value: totals.calories, target: targets.calories },
              { label: 'Protein', value: totals.protein, target: targets.protein },
              { label: 'Carbs', value: totals.carbs, target: targets.carbs },
              { label: 'Fat', value: totals.fat, target: targets.fat },
            ].map(({ label, value, target }) => {
              const progress = calculateProgress(value, target);
              return (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span>{progress.percentage}%</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${Math.min(progress.percentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Entries by Meal Type */}
      {entries.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No food entries for this day yet.</p>
          <p className="text-sm mt-2">Add your first meal to start tracking!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {mealOrder.map((mealType) => {
            const mealEntries = groupedEntries[mealType];
            if (!mealEntries || mealEntries.length === 0) return null;

            const mealTotals = sumNutrition(mealEntries);

            return (
              <div key={mealType}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold capitalize">{mealType}</h3>
                  <div className="text-sm text-gray-600">
                    {mealTotals.calories} cal • {mealTotals.protein.toFixed(1)}P • {mealTotals.carbs.toFixed(1)}C • {mealTotals.fat.toFixed(1)}F
                  </div>
                </div>
                <div className="space-y-3">
                  {mealEntries.map((entry) => (
                    <FoodLogEntryComponent
                      key={entry.id}
                      entry={entry}
                      onDelete={handleDeleteEntry}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
