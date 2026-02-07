# NutriFlow: Nutrition Tracking & Analysis App

## Tech Stack
- **Framework**: Next.js (React) - Best for a responsive web app with strong SEO and easy mobile optimization.
- **Styling**: Tailwind CSS - Rapid, clean UI development.
- **Database/Auth**: Supabase (PostgreSQL + Auth) - Handles data persistence and user auth out of the box.
- **Nutrition Data**: USDA FoodData Central API.

## Feature Roadmap
### Phase 1: Core Calculators (Iteration 1)
- [x] BMI, BMR, TDEE Calculators (Mifflin-St Jeor)
- [x] Profile setup (Age, Gender, Weight, Height, Activity)
- [x] Recommended Daily Intake (RDA) Logic

### Phase 2: Food Search & Logging (Iteration 2)
- [ ] Integration with USDA API
- [ ] Quantity-based nutritional breakdown
- [ ] Daily log persistence

### Phase 3: Analysis & Recommendations (Iteration 3)
- [ ] Progress bars for Macro/Micro nutrients
- [ ] Deficiency detection (<80% RDA)
- [ ] Smart food suggestions for deficiencies

### Phase 4: Refinement (Iteration 4)
- [ ] South Asian food database enrichment
- [ ] UI/UX Polish & Dark Mode
- [ ] History/Trends view

## Implementation Log
- **2026-02-05**: Initialized repo `nutriflow`. Created `spec.md`.
- **2026-02-05**: Implemented BMI and BMR calculators using Mifflin-St Jeor equation in `src/lib/calculators.ts`. Created UI component `src/components/Calculators.tsx` with profile input form and calculation results display. Added weight goal calorie recommendations.
- **2026-02-07**: Implemented Phase 1 RDA Logic. Created `src/lib/rda.ts` with comprehensive RDA data based on FDA/WHO guidelines for different age groups and genders. Updated `src/lib/nutrition.ts` with micronutrient interfaces. Created `src/components/RDADisplay.tsx` to show personalized daily nutritional targets. Integrated RDA display in Calculators component.
