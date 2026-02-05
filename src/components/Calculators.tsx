'use client';

import React, { useState } from 'react';
import { calculateBMI, calculateBMR, calculateTDEE, getWeightGoalCalories, UserProfile } from '@/lib/calculators';

export default function Calculators() {
  const [profile, setProfile] = useState<UserProfile>({
    age: 25,
    gender: 'male',
    weight: 70,
    height: 175,
    activityLevel: 'moderately_active'
  });

  const [weightGoal, setWeightGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');

  const bmiResult = calculateBMI(profile.weight, profile.height);
  const bmrResult = calculateBMR(profile);
  const tdeeResult = calculateTDEE(profile);
  const goalCalories = getWeightGoalCalories(tdeeResult.tdee, weightGoal);

  const handleProfileChange = (field: keyof UserProfile, value: string | number) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Calculators</h1>
        <p className="text-gray-600">Calculate your BMI, BMR, and daily calorie needs</p>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age (years)
            </label>
            <input
              type="number"
              value={profile.age}
              onChange={(e) => handleProfileChange('age', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              max="120"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              value={profile.gender}
              onChange={(e) => handleProfileChange('gender', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={profile.weight}
              onChange={(e) => handleProfileChange('weight', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="20"
              max="300"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={profile.height}
              onChange={(e) => handleProfileChange('height', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="100"
              max="250"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <select
              value={profile.activityLevel}
              onChange={(e) => handleProfileChange('activityLevel', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sedentary">Sedentary (little to no exercise)</option>
              <option value="lightly_active">Lightly Active (light exercise 1-3 days/week)</option>
              <option value="moderately_active">Moderately Active (moderate exercise 3-5 days/week)</option>
              <option value="very_active">Very Active (heavy exercise 6-7 days/week)</option>
              <option value="extremely_active">Extremely Active (very heavy exercise, physical job)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BMI Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Body Mass Index (BMI)</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {bmiResult.bmi}
            </div>
            <div className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
              bmiResult.isHealthy ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {bmiResult.category}
            </div>
            <p className="text-gray-600 text-sm mt-3">
              Normal range: 18.5 - 24.9
            </p>
          </div>
        </div>

        {/* BMR Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Basal Metabolic Rate (BMR)</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {bmrResult.bmr}
            </div>
            <div className="text-gray-600 text-sm">
              calories/day
            </div>
            <p className="text-gray-600 text-sm mt-3">
              {bmrResult.description}
            </p>
          </div>
        </div>

        {/* TDEE Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Total Daily Energy Expenditure</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {tdeeResult.tdee}
            </div>
            <div className="text-gray-600 text-sm">
              calories/day
            </div>
            <p className="text-gray-600 text-sm mt-3">
              {tdeeResult.description}
            </p>
          </div>
        </div>
      </div>

      {/* Weight Goal Calories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Calorie Goals</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="weightGoal"
              value="lose"
              checked={weightGoal === 'lose'}
              onChange={(e) => setWeightGoal(e.target.value as typeof weightGoal)}
              className="mr-2"
            />
            Lose Weight
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="weightGoal"
              value="maintain"
              checked={weightGoal === 'maintain'}
              onChange={(e) => setWeightGoal(e.target.value as typeof weightGoal)}
              className="mr-2"
            />
            Maintain Weight
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="weightGoal"
              value="gain"
              checked={weightGoal === 'gain'}
              onChange={(e) => setWeightGoal(e.target.value as typeof weightGoal)}
              className="mr-2"
            />
            Gain Weight
          </label>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">
            {goalCalories} calories/day
          </div>
          <p className="text-gray-600 text-sm mt-2">
            {weightGoal === 'lose' && 'Target deficit of 500 calories for ~1 lb/week loss'}
            {weightGoal === 'maintain' && 'Maintain your current weight'}
            {weightGoal === 'gain' && 'Target surplus of 500 calories for ~1 lb/week gain'}
          </p>
        </div>
      </div>
    </div>
  );
}