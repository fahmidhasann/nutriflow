// Local storage persistence for food logs

export interface FoodLogEntry {
  id: string;
  date: string; // YYYY-MM-DD format
  timestamp: number;
  foodName: string;
  brandName?: string;
  fdcId?: number;
  servingSize: number;
  servingSizeUnit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  mealType?: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  notes?: string;
}

const STORAGE_KEY = 'nutriflow_food_log';

// Get all food log entries
export function getAllEntries(): FoodLogEntry[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading food log:', error);
    return [];
  }
}

// Get entries for a specific date
export function getEntriesForDate(date: string): FoodLogEntry[] {
  const allEntries = getAllEntries();
  return allEntries.filter((entry) => entry.date === date);
}

// Get entries for a date range
export function getEntriesForDateRange(
  startDate: string,
  endDate: string
): FoodLogEntry[] {
  const allEntries = getAllEntries();
  return allEntries.filter(
    (entry) => entry.date >= startDate && entry.date <= endDate
  );
}

// Add a new food log entry
export function addEntry(entry: Omit<FoodLogEntry, 'id' | 'timestamp'>): FoodLogEntry {
  const newEntry: FoodLogEntry = {
    ...entry,
    id: generateId(),
    timestamp: Date.now(),
  };
  
  const allEntries = getAllEntries();
  allEntries.push(newEntry);
  saveEntries(allEntries);
  
  return newEntry;
}

// Update an existing entry
export function updateEntry(id: string, updates: Partial<FoodLogEntry>): boolean {
  const allEntries = getAllEntries();
  const index = allEntries.findIndex((entry) => entry.id === id);
  
  if (index === -1) return false;
  
  allEntries[index] = { ...allEntries[index], ...updates };
  saveEntries(allEntries);
  
  return true;
}

// Delete an entry
export function deleteEntry(id: string): boolean {
  const allEntries = getAllEntries();
  const filtered = allEntries.filter((entry) => entry.id !== id);
  
  if (filtered.length === allEntries.length) return false;
  
  saveEntries(filtered);
  return true;
}

// Save entries to localStorage
function saveEntries(entries: FoodLogEntry[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Error saving food log:', error);
  }
}

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Format date to YYYY-MM-DD
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Get today's date in YYYY-MM-DD format
export function getTodayDate(): string {
  return formatDate(new Date());
}

// Parse date string to Date object
export function parseDate(dateString: string): Date {
  return new Date(dateString + 'T00:00:00');
}

// Get display date (e.g., "Today", "Yesterday", or "Jan 15, 2024")
export function getDisplayDate(dateString: string): string {
  const date = parseDate(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (dateString === formatDate(today)) {
    return 'Today';
  } else if (dateString === formatDate(yesterday)) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}

// Export data as JSON
export function exportData(): string {
  const entries = getAllEntries();
  return JSON.stringify(entries, null, 2);
}

// Import data from JSON
export function importData(jsonData: string): boolean {
  try {
    const entries = JSON.parse(jsonData);
    if (!Array.isArray(entries)) return false;
    
    saveEntries(entries);
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
}

// Clear all data
export function clearAllData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
