import React, { useState } from 'react';
import { useToast } from '../../../hooks/useToast';
import { useLanguage } from '../../../contexts/LanguageContext';
import apiService from '../../../services/api';
import voiceService from '../../../services/voice';

const DEFAULT_RECIPES = [
  {
    id: 1, cuisine: 'north-indian', name: 'Aloo Gobi Masala',
    time: '25 min', difficulty: 'Easy', servings: 4, calories: 120,
    ingredients: ['2 Potatoes (cubed)', '1 Cauliflower', '2 Onions', '2 Tomatoes', 'Cumin, Turmeric, Garam Masala'],
    steps: ['Heat oil, add cumin seeds', 'Sauté onions until golden', 'Add tomatoes and spices, cook 3 min', 'Add vegetables and 1/4 cup water', 'Cover and simmer 15 min until tender'],
    tip: 'Add kasuri methi at the end for restaurant-style flavour!',
  },
  {
    id: 2, cuisine: 'south-indian', name: 'Curd Rice (Dahi Bhat)',
    time: '15 min', difficulty: 'Easy', servings: 2, calories: 150,
    ingredients: ['1 cup Cooked Rice', '1 cup Curd', 'Cucumber', 'Pomegranate', 'Mustard seeds, Curry leaves'],
    steps: ['Cool the cooked rice completely', 'Mix with curd until smooth', 'Temper mustard seeds in 1 tsp oil', 'Add curry leaves and green chilli', 'Mix all together and garnish'],
    tip: 'Best served cold. Add salt just before eating.',
  },
  {
    id: 3, cuisine: 'gujarati', name: 'Undhiyu',
    time: '45 min', difficulty: 'Medium', servings: 6, calories: 180,
    ingredients: ['Surti papdi', 'Raw banana', 'Sweet potato', 'Brinjal', 'Muthia', 'Coconut-coriander paste'],
    steps: ['Prepare muthia and fry till golden', 'Layer vegetables in pot', 'Add masala and coconut paste', 'Add water and pressure cook 2 whistles', 'Garnish with coriander'],
    tip: 'Traditional Makar Sankranti dish — best shared with family!',
  },
  {
    id: 4, cuisine: 'bengali', name: 'Machher Jhol',
    time: '30 min', difficulty: 'Easy', servings: 3, calories: 200,
    ingredients: ['500g Rohu fish', 'Potato', 'Mustard oil', 'Turmeric', 'Cumin seeds', 'Tomato'],
    steps: ['Marinate fish with turmeric and salt', 'Fry fish pieces in mustard oil', 'Sauté cumin and potatoes', 'Add tomatoes and spices', 'Add fish and water, simmer 10 min'],
    tip: 'Use mustard oil for authentic Bengali taste.',
  },
];

const CUISINES = [
  { key: 'all',          label: 'All' },
  { key: 'north-indian', label: '🥘 North Indian' },
  { key: 'south-indian', label: '🍛 South Indian' },
  { key: 'gujarati',     label: '🥗 Gujarati' },
  { key: 'bengali',      label: '🐟 Bengali' },
];

export default function AmmaRecipes() {
  const [cuisine, setCuisine] = useState('all');
  const [expanded, setExpanded] = useState(null);
  
  const { showToast } = useToast();
  const { language, t } = useLanguage();
  const rT = t.recipes || {};

  // Use localized mock data
  const [recipes, setRecipes] = useState([{
    id: 1, cuisine: 'north-indian', name: rT.defaultMock?.name || 'Aloo Gobi Masala',
    time: rT.defaultMock?.time || '25 min', difficulty: rT.defaultMock?.diff || 'Easy', servings: 4, calories: 120,
    ingredients: rT.defaultMock?.ing || [],
    steps: rT.defaultMock?.steps || [],
    tip: rT.defaultMock?.tip || '',
  }]);
  
  // AI Generation State
  const [ingredients, setIngredients] = useState('');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!ingredients.trim()) {
      showToast('Please enter some ingredients!', 'warning');
      return;
    }
    setGenerating(true);
    showToast(rT.generating || 'Creating a perfect recipe for you...', 'info');
    try {
      const newRecipeData = await apiService.generateRecipe(ingredients, language);
      // Map API response to our format
      const newRecipe = {
        id: newRecipeData._id || Date.now(),
        cuisine: 'north-indian', // default or extract from AI
        name: newRecipeData.name,
        time: newRecipeData.cookingTime + ' min',
        difficulty: newRecipeData.difficulty,
        servings: newRecipeData.servings || 4,
        calories: newRecipeData.nutrition?.calories || 0,
        ingredients: newRecipeData.ingredients,
        steps: newRecipeData.steps,
        tip: newRecipeData.tip || 'Cook with love!',
      };
      
      setRecipes([newRecipe, ...recipes]);
      setExpanded(newRecipe.id);
      setIngredients('');
      showToast('Recipe generated perfectly!', 'success');
    } catch (err) {
      showToast('Failed to generate recipe.', 'error');
    } finally {
      setGenerating(false);
    }
  };

  const handleListen = (recipe) => {
    const textToSpeak = `${recipe.name}. Ingredients are: ${recipe.ingredients.join(', ')}. Steps are: ${recipe.steps.join('. ')}. Enjoy your meal!`;
    showToast(`Listening to ${recipe.name}… 🔊`, 'info');
    voiceService.speak(textToSpeak, language, 'amma');
  };

  const filtered = cuisine === 'all' ? recipes : recipes.filter(r => r.cuisine === cuisine);

  return (
    <div style={styles.page}>
      <div>
        <h1 style={styles.title}>{rT.title}</h1>
        <p style={styles.subtitle}>{rT.subtitle}</p>
      </div>

      {/* AI Recipe Generator Box */}
      <div style={styles.aiGeneratorBox} className="saarthi-card-saffron">
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: 'var(--navy-deep)' }}>✨ {rT.title}</h3>
        <p style={{ fontSize: 13, color: 'var(--gray-600)', marginBottom: 12 }}>{rT.subtitle}</p>
        <div style={{ display: 'flex', gap: 10 }}>
          <input 
            className="saarthi-input" 
            style={{ flex: 1 }}
            placeholder={rT.placeholder}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button 
            className="btn btn-primary"
            style={{ borderRadius: 'var(--r-md)' }}
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating ? rT.generating : `✨ ${rT.generateBtn}`}
          </button>
        </div>
      </div>

      {/* Cuisine filter */}
      <div style={styles.filters}>
        {[
          { key: 'all',          label: rT.all },
          { key: 'north-indian', label: rT.north },
          { key: 'south-indian', label: rT.south },
          { key: 'snacks',       label: rT.snacks },
        ].map(c => (
          <button
            key={c.key}
            style={{
              ...styles.filterBtn,
              background: cuisine === c.key ? 'var(--saffron)' : '#fff',
              color: cuisine === c.key ? '#fff' : 'var(--gray-700)',
              borderColor: cuisine === c.key ? 'var(--saffron)' : 'var(--gray-200)',
            }}
            onClick={() => setCuisine(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Recipes */}
      <div style={styles.recipesList}>
        {filtered.map(recipe => (
          <div key={recipe.id} className="saarthi-card">
            <div
              style={styles.recipeHeader}
              onClick={() => setExpanded(expanded === recipe.id ? null : recipe.id)}
            >
              <div>
                <h3 style={styles.recipeName}>{recipe.name}</h3>
                <div style={styles.recipeMeta}>
                  <span className="badge badge-saffron">⏱️ {recipe.time}</span>
                  <span className="badge badge-gold">👥 {recipe.servings} {rT.servings}</span>
                  <span className="badge badge-success">🔥 {recipe.calories} cal</span>
                </div>
              </div>
              <span style={{ fontSize: 22, color: 'var(--gray-400)' }}>
                {expanded === recipe.id ? '▲' : '▼'}
              </span>
            </div>

            {expanded === recipe.id && (
              <div style={styles.recipeDetails} className="anim-up">
                <div style={styles.twoCol}>
                  <div>
                    <h4 style={styles.sectionLabel}>🛒 {rT.ingredients}</h4>
                    <ul style={styles.ingredientList}>
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} style={styles.ingredient}>• {ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={styles.sectionLabel}>👨‍🍳 {rT.steps}</h4>
                    <ol style={styles.stepsList}>
                      {recipe.steps.map((step, i) => (
                        <li key={i} style={styles.step}>
                          <span style={styles.stepNum}>{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div style={styles.tipBox}>
                  💡 <strong>{rT.tip}:</strong> {recipe.tip}
                </div>

                <div style={styles.recipeActions}>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleListen(recipe)}
                  >
                    🔊 {rT.listen}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 20 },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },

  aiGeneratorBox: {
    background: 'var(--ivory)',
    border: '1.5px solid var(--saffron-glow)',
    borderRadius: 'var(--r-xl)',
    padding: '20px',
    boxShadow: 'var(--shadow-sm)',
  },

  filters: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  filterBtn: {
    padding: '7px 16px', borderRadius: 'var(--r-full)',
    border: '1.5px solid', cursor: 'pointer',
    fontSize: 13, fontWeight: 600, transition: 'var(--t-fast)',
  },

  recipesList: { display: 'flex', flexDirection: 'column', gap: 14 },
  recipeHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
  },
  recipeName: { fontSize: 17, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 8 },
  recipeMeta: { display: 'flex', gap: 8, flexWrap: 'wrap' },

  recipeDetails: { marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--gray-100)' },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 20,
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 13, fontWeight: 700, color: 'var(--gray-500)',
    textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8,
  },
  ingredientList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 },
  ingredient: { fontSize: 13.5, color: 'var(--gray-700)' },
  stepsList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 },
  step: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: 'var(--gray-700)', lineHeight: 1.5 },
  stepNum: {
    width: 22, height: 22, borderRadius: '50%',
    background: 'var(--saffron)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 2,
  },
  tipBox: {
    background: 'var(--ivory)', border: '1.5px solid var(--saffron-glow)',
    borderRadius: 'var(--r-md)', padding: '12px 16px',
    fontSize: 13, color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: 14,
  },
  recipeActions: { display: 'flex', gap: 10 },
};
