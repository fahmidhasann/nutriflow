'use client';

import React, { useMemo, useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { getAllEntries, formatDate } from '@/lib/food-log';

export default function HistoryCharts() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = useMemo(() => {
    if (typeof window === 'undefined') return [];
    const entries = getAllEntries();
    const dailyData: Record<string, { date: string, calories: number, protein: number, carbs: number, fat: number }> = {};

    // Group by date
    entries.forEach(entry => {
      if (!dailyData[entry.date]) {
        dailyData[entry.date] = {
          date: entry.date,
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0
        };
      }
      dailyData[entry.date].calories += entry.calories || 0;
      dailyData[entry.date].protein += entry.protein || 0;
      dailyData[entry.date].carbs += entry.carbs || 0;
      dailyData[entry.date].fat += entry.fat || 0;
    });

    // Convert to array and sort by date
    return Object.values(dailyData)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-7); // Last 7 days
  }, []);

  if (!isClient || chartData.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          {!isClient ? 'Loading charts...' : 'Log some food to see your progress charts!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Calories Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-6 dark:text-white">Calories (Last 7 Days)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickFormatter={(str) => {
                  const date = new Date(str);
                  return date.toLocaleDateString('en-US', { weekday: 'short' });
                }}
                stroke="#9CA3AF"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
                itemStyle={{ color: '#60A5FA' }}
              />
              <Line 
                type="monotone" 
                dataKey="calories" 
                stroke="#3B82F6" 
                strokeWidth={3} 
                dot={{ fill: '#3B82F6', r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Macros Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-6 dark:text-white">Macros Distribution (g)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickFormatter={(str) => {
                  const date = new Date(str);
                  return date.toLocaleDateString('en-US', { weekday: 'short' });
                }}
                stroke="#9CA3AF"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend iconType="circle" />
              <Bar dataKey="protein" stackId="a" fill="#10B981" name="Protein" />
              <Bar dataKey="carbs" stackId="a" fill="#F59E0B" name="Carbs" />
              <Bar dataKey="fat" stackId="a" fill="#EF4444" name="Fat" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
