# 🥗 NutriFlow

**Smart Nutrition Tracking & Macro Calculator**

NutriFlow is a modern web application that helps you track your nutrition, calculate macros, and reach your fitness goals. Built with Next.js 16, React 19, and TypeScript.

## ✨ Features

### Phase 1: Nutrition Calculators ✅
- **TDEE Calculator**: Calculate Total Daily Energy Expenditure based on age, weight, height, and activity level
- **BMI Calculator**: Body Mass Index with health category indicators
- **Body Fat Calculator**: Estimate body fat percentage using Navy method
- **Macro Calculator**: Personalized macro targets based on your goals (lose/maintain/gain)
- **Water Intake Calculator**: Daily hydration recommendations

### Phase 2: Food Search & Logging ✅
- **USDA Food Database**: Search 300,000+ foods from USDA FoodData Central
- **Smart Food Search**: Find foods by name with detailed nutrition data
- **Daily Food Log**: Track meals throughout the day (breakfast, lunch, dinner, snacks)
- **Macro Tracking**: Real-time progress bars for calories, protein, carbs, and fat
- **Date Navigation**: Log meals for any date, review past entries
- **Local Storage**: All data saved in your browser - no account needed
- **Serving Size Adjustment**: Scale nutrition based on actual portions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nutriflow

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Setup

Create a `.env.local` file:

```env
# USDA FoodData Central API Key
# Get your free key at: https://fdc.nal.usda.gov/api-key-signup.html
NEXT_PUBLIC_USDA_API_KEY=DEMO_KEY
```

**Note**: The `DEMO_KEY` is rate-limited. For production use, get a free API key from USDA.

## 📖 Usage

### Calculators Page (`/`)
Calculate your nutrition needs:
1. Enter your details (age, weight, height, activity level)
2. Get instant TDEE, BMI, body fat, and macro recommendations
3. Set your fitness goal (lose/maintain/gain weight)

### Food Log Page (`/log`)
Track your daily nutrition:
1. **Search Foods**: Type a food name (e.g., "chicken breast", "banana")
2. **Adjust Serving**: Modify serving size to match what you ate
3. **Select Meal**: Choose breakfast/lunch/dinner/snack
4. **Add to Log**: Food is saved and nutrition is calculated
5. **Track Progress**: View real-time progress toward daily targets
6. **Review History**: Use date picker to view/edit past meals

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Data Source**: USDA FoodData Central API
- **Storage**: Browser LocalStorage

### Project Structure
```
nutriflow/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Home (Calculators)
│   │   ├── log/
│   │   │   └── page.tsx   # Food Log Page
│   │   ├── layout.tsx     # Root Layout + Navigation
│   │   └── globals.css    # Global styles
│   ├── components/        # React Components
│   │   ├── Calculators.tsx
│   │   ├── FoodSearch.tsx
│   │   ├── FoodLogEntry.tsx
│   │   └── DailyFoodLog.tsx
│   └── lib/               # Core Logic
│       ├── calculators.ts     # TDEE, BMI, etc.
│       ├── usda-api.ts        # USDA API integration
│       ├── nutrition.ts       # Nutrition calculations
│       └── food-log.ts        # LocalStorage persistence
├── .env.local             # Environment variables
└── package.json
```

## 🔧 Development

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Roadmap

### Phase 3: Analytics & Trends (Coming Soon)
- [ ] Weekly/monthly nutrition summaries
- [ ] Weight tracking over time
- [ ] Macro adherence charts
- [ ] Calorie trends visualization
- [ ] Export data as CSV/JSON

### Phase 4: Personalization (Coming Soon)
- [ ] User profiles with saved preferences
- [ ] Custom macro targets
- [ ] Favorite foods for quick logging
- [ ] Meal templates
- [ ] Recipe builder

### Phase 5: Advanced Features (Future)
- [ ] Barcode scanning
- [ ] Restaurant database
- [ ] Meal planning
- [ ] Shopping lists
- [ ] Progressive Web App (offline support)

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Nutrition data provided by [USDA FoodData Central](https://fdc.nal.usda.gov/)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## 🐛 Known Issues

- DEMO_KEY has rate limits (30 requests/hour). Get a free API key for unlimited access.
- Data is stored locally - clearing browser data will erase logs.

## 💡 Tips

- **Accurate Search**: Use specific terms like "chicken breast, raw" vs just "chicken"
- **Portion Control**: Always adjust serving sizes - default is often 100g
- **Meal Timing**: Logging meals by type helps track eating patterns
- **Daily Review**: Check progress bars to stay on track
- **Backup Data**: Export your food log periodically (feature coming soon)

---

**Made with ❤️ for fitness enthusiasts**
