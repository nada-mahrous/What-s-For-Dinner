var lastIndex = -1;

var meals = [
  {
    showWarning: true,
    rating: 4.7,
    reviewCount: "(389 reviews)",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "4 people",
    mealLevel: "Intermediate",
    mealCountry: "Asian",
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",

    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken with yogurt and tikka masala paste for 30 minutes.",
      "Heat oil in a pan and sauté onions until golden brown.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sodium: "760mg",
    },
    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    showWarning: false,
    rating: 4.5,
    reviewCount: "(234 reviews)",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 mins",
    cookTime: "5 mins",
    servings: "4 people",
    mealLevel: "Easy",
    mealCountry: "Asian",
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",

    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],

    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbs: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },

    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    showWarning: false,
    rating: 4.6,
    reviewCount: "(421 reviews)",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4 people",
    mealLevel: "Easy",
    mealCountry: "American",
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",

    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],

    nutrition: {
      calories: "650kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },

    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    showWarning: false,
    rating: 4.7,
    reviewCount: "(367 reviews)",
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Asian",
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",

    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],

    nutrition: {
      calories: "540kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "2g",
      sodium: "1240mg",
    },

    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    showWarning: false,
    rating: 4.4,
    reviewCount: "(198 reviews)",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",

    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",

    mealLevel: "Easy",
    mealCountry: "Mediterranean",

    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",

    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],

    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],

    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },

    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    showWarning: false,
    rating: 4.8,
    reviewCount: "(356 reviews)",
    image:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Seafood",
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan.",
      "Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp and cook until pink on both sides (3-4 minutes). Remove and set aside.",
      "Add white wine to the pan and simmer for 2 minutes.",
      "Add remaining butter and lemon juice, stir well.",
      "Return shrimp to pan, add cooked pasta and toss.",
      "Add pasta water if needed for sauce consistency.",
      "Garnish with parsley and serve immediately.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },
    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    showWarning: true,
    rating: 4.7,
    reviewCount: "(267 reviews)",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    mealLevel: "Intermediate",
    mealCountry: "Mediterranean",
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],

    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],

    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },

    tips: [
      "Patience is key - slow caramelization gives best flavor",
      "Use high-quality beef broth for richer taste",
      "Gruyère cheese melts best but can be substituted",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    showWarning: true,
    rating: 4.9,
    reviewCount: "(512 reviews)",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    mealLevel: "Intermediate",
    mealCountry: "Italian",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",

    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],

    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F)",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],

    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },

    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload toppings - keep it simple",
      "Add basil after baking to keep flavor fresh",
      "Let dough rest properly for better texture",
    ],
  },
  {
    showWarning: true,
    rating: 4.7,
    reviewCount: "(412 reviews)",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    mealLevel: "Easy",
    mealCountry: "American",
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",

    ingredients: [
      "1 kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],

    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],

    nutrition: {
      calories: "620 kcal",
      protein: "48g",
      carbs: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },

    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    showWarning: false,
    rating: 4.7,
    reviewCount: "(312 reviews)",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    mealLevel: "Intermediate",
    mealCountry: "Asian",
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],

    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],

    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },

    tips: [
      "Adjust spice level by adding more or less curry paste",
      "Add vegetables in stages based on cooking time",
      "Fresh Thai basil gives authentic flavor",
      "Use full-fat coconut milk for richer sauce",
    ],
  },
  {
    showWarning: true,
    rating: 4.5,
    reviewCount: "(156 reviews)",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Mediterranean",
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",

    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],

    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],

    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg",
    },

    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before mixing with fresh ingredients",
      "Make extra tahini dressing for later use",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    showWarning: true,
    rating: 4.7,
    reviewCount: "(210 reviews)",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",

    prepTime: "15 min",
    cookTime: "25 min",
    servings: "3 people",
    mealLevel: "Medium",
    mealCountry: "Italian",

    name: "Creamy Chicken Pasta",
    description:
      "Delicious creamy pasta with grilled chicken and parmesan sauce",

    ingredients: [
      "200g pasta",
      "Chicken breast, sliced",
      "Garlic, minced",
      "Heavy cream",
      "Parmesan cheese",
      "Olive oil",
      "Salt & black pepper",
      "Fresh basil",
    ],

    instructions: [
      "Cook pasta according to package instructions until al dente.",
      "Season chicken with salt and pepper, then cook in olive oil until golden.",
      "In the same pan, sauté garlic until fragrant.",
      "Add cream and parmesan cheese, stir until smooth sauce forms.",
      "Add cooked pasta and chicken to the sauce and mix well.",
      "Garnish with fresh basil and serve hot.",
    ],

    nutrition: {
      calories: "620 kcal",
      protein: "32g",
      carbs: "65g",
      fat: "28g",
      fiber: "4g",
      sodium: "680mg",
    },

    tips: [
      "Use freshly grated parmesan for better flavor",
      "Do not overcook the pasta",
      "Add mushrooms or spinach for extra nutrition",
      "Reserve some pasta water to adjust sauce consistency",
    ],
  },
  {
    showWarning: false,
    rating: 4.6,
    reviewCount: "(180 reviews)",

    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",

    prepTime: "10 min",
    cookTime: "20 min",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Seafood",

    name: "Honey Garlic Salmon",
    description:
      "Delicious honey garlic glazed salmon with a hint of soy sauce",

    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],

    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],

    nutrition: {
      calories: "520 kcal",
      protein: "15g",
      carbs: "70g",
      fat: "18g",
      fiber: "6g",
      sodium: "450mg",
    },

    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    showWarning: false,
    rating: 4.8,
    reviewCount: "(245 reviews)",

    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",

    prepTime: "15 min",
    cookTime: "15 min",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Italian",

    name: "Creamy Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with creamy sauce, pancetta, and Parmesan cheese",

    ingredients: [
      "Spaghetti",
      "Pancetta",
      "Eggs",
      "Parmesan cheese",
      "Garlic",
      "Olive oil",
      "Salt & black pepper",
    ],

    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, cook pancetta until crispy.",
      "In a bowl, whisk eggs and Parmesan cheese together.",
      "Drain spaghetti and return to pot.",
      "Add pancetta and egg mixture to spaghetti, stirring quickly to create a creamy sauce.",
      "Season with salt and black pepper, and serve immediately.",
    ],

    nutrition: {
      calories: "420 kcal",
      protein: "35g",
      carbs: "18g",
      fat: "22g",
      fiber: "7g",
      sodium: "380mg",
    },

    tips: [
      "Use fresh ingredients for best taste",
      "Do not overcook pasta to keep it al dente",
      "Add nuts or seeds for extra crunch",
      "Try a yogurt-based dressing for a lighter option",
    ],
  },
  {
    showWarning: true,
    rating: 4.7,
    reviewCount: "(198 reviews)",

    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    mealLevel: "Easy",
    mealCountry: "Italian",

    name: "Lasagna Bolognese",
    description:
      "Classic Italian lasagna with rich Bolognese sauce and creamy béchamel",

    ingredients: [
      "Lasagna noodles",
      "Ground beef",
      "Tomato sauce",
      "Onion, chopped",
      "Garlic, minced",
      "Carrot, grated",
      "Celery, chopped",
      "Olive oil",
      "Salt & black pepper",
      "Parmesan cheese",
      "Béchamel sauce",
    ],

    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cook lasagna noodles according to package instructions.",
      "In a pan, cook ground beef with chopped onion, garlic, carrot, and celery until browned.",
      "Add tomato sauce to the meat mixture and simmer for 15 minutes.",
      "In a baking dish, layer lasagna noodles, meat sauce, and béchamel sauce.",
      "Repeat layers and top with Parmesan cheese.",
      "Bake in preheated oven for 25-30 minutes until golden and bubbly.",
      "Let lasagna rest for 10 minutes before serving.",
    ],

    nutrition: {
      calories: "540 kcal",
      protein: "30g",
      carbs: "60g",
      fat: "18g",
      fiber: "5g",
      sodium: "720mg",
    },

    tips: [
      "Use fresh ingredients for the best flavor",
      "Let the lasagna rest before serving to enhance flavors",
      "You can add a layer of spinach for extra nutrition",
      "Use a mix of cheeses for a richer taste",
    ],
  },
];

// ****************************

function createMeal() {
  // a5tar rqm 3shwa2e le awl m7awla
  var random = Math.floor(Math.random() * meals.length);

  // لو الرقم هو نفس آخر أكلة → اختار رقم جديد
  // محتاجة ما تتكررش نفس الأكلة
  while (random === lastIndex) {
    random = Math.floor(Math.random() * meals.length);
  }

  // بعد ما نضمن إنه مختلف → نحفظه كآخر اختيار
  lastIndex = random;
  // mynf3sh a7otha fel while loop 3lshan kda el lastIndex hyb2a daimn bysawe el random w hy3ml infinite loop 3lshan hy3ml check "while (random === lastIndex)"  fa hy2ol ah fa hyd5lo infinite loop

  //  showWarning
  var warningBox = document.getElementById("timeWarning");

  if (meals[random].showWarning) {
    warningBox.style.display = "block";
  } else {
    warningBox.style.display = "none";
  }

  //meals[random]
  // دي معناها: الأكلة اللي اختارها الكمبيوتر عشوائيًا

  document.getElementById("mealName").innerHTML = meals[random].name;
  document.getElementById("mealDescription").innerHTML =
    meals[random].description;
  document.getElementById("mealImage").src = meals[random].image;
  document.getElementById("mealRating").innerHTML = meals[random].rating;
  document.getElementById("mealReviewCount").innerHTML =
    meals[random].reviewCount;
  document.getElementById("mealPrepTime").innerHTML = meals[random].prepTime;
  document.getElementById("mealCookTime").innerHTML = meals[random].cookTime;
  document.getElementById("mealServings").innerHTML = meals[random].servings;
  document.getElementById("mealLevel").innerHTML = meals[random].mealLevel;
  document.getElementById("mealCountry").innerHTML = meals[random].mealCountry;

  // Ingredients
  document.getElementById("ingredientsList").innerHTML = meals[
    random
  ].ingredients
    //لف على كل عنصر في الـ array واعملي منه شكل جديد.
    .map(
      (ingredient, index) =>
        `<li class="d-flex align-items-start">
            <span class="text-white rounded-circle d-flex align-items-center justify-content-center">${index + 1}</span> ${ingredient}
        </li>`,
    )
    .join("");

  // Instructions
  document.getElementById("instructionsList").innerHTML = meals[
    random
  ].instructions
    .map(
      (instruction, index) =>
        `<li class="d-flex align-items-start">
            <span class="text-white d-flex align-items-center justify-content-center me-3">${index + 1}</span> ${instruction}
        </li>`,
    )
    .join("");

  // Nutrition
  document.getElementById("calories").innerHTML =
    meals[random].nutrition.calories;
  document.getElementById("protein").innerHTML =
    meals[random].nutrition.protein;
  document.getElementById("carbs").innerHTML = meals[random].nutrition.carbs;
  document.getElementById("fat").innerHTML = meals[random].nutrition.fat;
  document.getElementById("fiber").innerHTML = meals[random].nutrition.fiber;
  document.getElementById("sodium").innerHTML = meals[random].nutrition.sodium;

  // Chef's Tips
  document.getElementById("tipsList").innerHTML = meals[random].tips
    .map(
      (tip) => `
        <div class="tip-item p-3 d-flex align-items-start">
          <i class="fa-solid fa-circle-check"></i>
          <p>${tip}</p>
        </div>`,
    )
    .join("");
}

window.onload = function () {
  createMeal();
};
