// Common South Asian food items with nutritional defaults
// Data sources: Various nutritional databases and general research
import { USDAFood } from './usda-api';

export const SOUTH_ASIAN_FOODS: Partial<USDAFood>[] = [
  {
    "fdcId": 900200,
    "description": "Steamed Rice / Sada Bhat / সাদা ভাত",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 130, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2.7, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 28, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.3, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.4, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900201,
    "description": "Fried Rice with Lentils / Bhuna Khichuri / ভুনা খিচুড়ি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 180, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 6, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 25, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 7, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900202,
    "description": "Fermented Rice / Panta Ilish / পান্তা ইলিশ",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 110, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 24, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.2, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.4, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900203,
    "description": "Mustard Hilsa / Shorshe Ilish / সর্ষে ইলিশ",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 260, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 18, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 3.5, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 20, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.8, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900204,
    "description": "Beef Curry / Gorur Mangsho Bhuna / গরুর মাংস ভুনা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 250, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 18, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 18, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900205,
    "description": "Mutton Curry / Khasir Mangsho / খাসির মাংস",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 280, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 16, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 3, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 22, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900206,
    "description": "Red Lentil Soup / Moshur Dal / মসুর ডাল",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 116, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 9, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 20, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.4, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 8, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900207,
    "description": "Mashed Potatoes / Alu Bharta / আলু ভর্তা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 120, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 18, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.2, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900208,
    "description": "Mashed Eggplant / Begun Bharta / বেগুন ভর্তা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 80, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 1.5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 6, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 6.5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900209,
    "description": "Mashed Dried Fish / Shutki Bharta / শুটকি ভর্তা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 180, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 25, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 2, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 8, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900210,
    "description": "Thick Fish Curry / Macher Jhol / মাছের ঝোল",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 150, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 15, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 8, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900211,
    "description": "Prawn Malai Curry / Chingri Macher Malaikari / চিংড়ি মাছের মালাইকারি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 220, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 14, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 6, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 16, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.8, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900212,
    "description": "Fried Eggplant / Begun Bhaja / বেগুন ভাজা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 160, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 1.2, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 8, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 14, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900213,
    "description": "Mixed Vegetables / Shobji / সবজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 90, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 10, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 3.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900214,
    "description": "Deep Fried Pastry / Singara / সিঙ্গাড়া",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 310, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 4.5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 35, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 18, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900215,
    "description": "Fried Lentil Fritters / Peyaju / পেঁয়াজু",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 280, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 8, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 22, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 18, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 4, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900216,
    "description": "Potato Fritter / Alur Chop / আলুর চপ",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 240, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 3, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 28, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 13, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900217,
    "description": "Spicy Puffed Rice / Jhal Muri / ঝাল মুড়ি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 350, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 7, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 60, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 10, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 3, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900218,
    "description": "Semolina Cake / Shujir Halwa / সুজির হালুয়া",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 260, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 4, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 45, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 8, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900219,
    "description": "Rice Cake / Vapa Pitha / ভাপা পিঠা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 210, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 3.5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 48, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900220,
    "description": "Sweet Syrup Cake / Patishapta Pitha / পাটিসাপটা পিঠা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 280, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 55, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 6, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1.2, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900221,
    "description": "Yogurt / Mishti Doi / মিষ্টি দই",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 150, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 4, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 24, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 4.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900222,
    "description": "Milk-based Sweet / Rasgulla / রসগোল্লা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 210, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 4, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 45, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 1.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900223,
    "description": "Spongy Sweet / Pantua / পান্তুয়া",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 320, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 50, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 12, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900224,
    "description": "Chickpea Stew / Chola Bhuna / ছোলা ভুনা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 180, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 8, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 22, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 7, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 6, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900225,
    "description": "Vermicelli Pudding / Shemai / সেমাই",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 240, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 35, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 10, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900226,
    "description": "Kacchi Biryani / কাচ্চি বিরিয়ানি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 220, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 12, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 22, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 10, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900227,
    "description": "Chicken Roast / চিকেন রোস্ট",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 240, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 18, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 5, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 16, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900228,
    "description": "Duck Curry / Hasher Mangsho / হাঁসের মাংস",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 310, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 15, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 26, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900229,
    "description": "Snake Gourd with Eggs / Chichinga-Dimer Bhaji / চিচিঙ্গা ডিম ভাজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 110, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 6, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 5, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 8, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900230,
    "description": "Bitter Gourd Fry / Korola Bhaji / করলা ভাজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 120, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2.5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 8, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 9, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 3, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900231,
    "description": "Bottle Gourd with Prawn / Lau Chingri / লাউ চিংড়ি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 85, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 6, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 6, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 4.5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900232,
    "description": "Beef Tehari / গরুর তেহারি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 230, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 10, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 25, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 10, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 1, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900233,
    "description": "Morog Polao / মোরগ পোলাও",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 210, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 14, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 24, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 8, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.8, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900234,
    "description": "Egg Curry / Dimer Dalna / ডিমের ডালনা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 160, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 12, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 11, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900235,
    "description": "Pumpkin Fry / Kumra Bhaji / কুমড়া ভাজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 110, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 1.5, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 12, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 7, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900236,
    "description": "Spinach Fry / Palong Shak Bhaji / পালং শাক ভাজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 70, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 3, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900237,
    "description": "Red Amaranth Fry / Lal Shak Bhaji / লাল শাক ভাজি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 65, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2.8, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 4.5, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 4.5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 3, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900238,
    "description": "Taro Root Curry / Kochur Mukhi / কচুর মুখি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 110, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 2, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 24, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.5, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 4, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900239,
    "description": "Fried Small Fish / Kachki Macher Chorchori / কাচকি মাছের চচ্চড়ি",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 180, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 16, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 3, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 12, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 0.5, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  },
  {
    "fdcId": 900240,
    "description": "Banana / Kala / কলা",
    "foodNutrients": [
      { "nutrientId": 1008, "nutrientName": "Energy", "nutrientNumber": "208", "value": 89, "unitName": "kcal" },
      { "nutrientId": 1003, "nutrientName": "Protein", "nutrientNumber": "203", "value": 1.1, "unitName": "g" },
      { "nutrientId": 1005, "nutrientName": "Carbohydrate, by difference", "nutrientNumber": "205", "value": 22.8, "unitName": "g" },
      { "nutrientId": 1004, "nutrientName": "Total lipid (fat)", "nutrientNumber": "204", "value": 0.3, "unitName": "g" },
      { "nutrientId": 1079, "nutrientName": "Fiber, total dietary", "nutrientNumber": "291", "value": 2.6, "unitName": "g" }
    ],
    "servingSize": 100,
    "servingSizeUnit": "g"
  }
];
