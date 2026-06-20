import { api } from './auth.js';
import geminiService from './gemini.js';

const apiService = {
  // ─── Recipes (Amma Persona) ───
  async generateRecipe(ingredients, language = 'en') {
    try {
      // First generate the real recipe using Gemini API
      const aiRecipe = await geminiService.generateRecipe(ingredients, 'Indian', language);
      if (!aiRecipe) throw new Error('AI generation failed');

      // Save it to the backend database
      const { data } = await api.post('/recipes', {
        name: aiRecipe.name,
        cuisine: 'indian',
        ingredients: aiRecipe.ingredients,
        steps: aiRecipe.steps,
        cookingTime: parseInt(aiRecipe.cookingTime) || 30,
        difficulty: aiRecipe.difficulty || 'Medium',
        nutrition: aiRecipe.nutrition || { calories: 0, protein: 0, fat: 0, carbs: 0 },
        tip: aiRecipe.tips || '',
        servings: parseInt(aiRecipe.servings) || 4,
      });
      return data;
    } catch (error) {
      console.error('Recipe API Error:', error);
      return this._fallbackRecipe(ingredients);
    }
  },

  async getRecipes(cuisine) {
    try {
      const params = cuisine ? { cuisine } : {};
      const { data } = await api.get('/recipes', { params });
      return data;
    } catch (error) {
      console.error('Get Recipes Error:', error);
      return [];
    }
  },

  // ─── Government Schemes (Amma Persona) ───
  async getSchemes(category) {
    try {
      const params = category ? { category } : {};
      const { data } = await api.get('/schemes', { params });
      return data;
    } catch (error) {
      console.error('Schemes API Error:', error);
      return [];
    }
  },

  // ─── Scholarships (Student Persona) ───
  async getScholarships(category) {
    try {
      const params = category ? { category } : {};
      const { data } = await api.get('/scholarships', { params });
      return data;
    } catch (error) {
      console.error('Scholarships API Error:', error);
      return [];
    }
  },

  // ─── Scam Reports ───
  async saveScamReport(report) {
    try {
      const { data } = await api.post('/scam-reports', report);
      return data;
    } catch (error) {
      console.error('Scam Report API Error:', error);
      return null;
    }
  },

  async getScamReports() {
    try {
      const { data } = await api.get('/scam-reports');
      return data;
    } catch (error) {
      console.error('Get Scam Reports Error:', error);
      return [];
    }
  },

  // ─── Reminders ───
  async createReminder(type, description, date) {
    try {
      const { data } = await api.post('/reminders', {
        type,
        description,
        dueDate: date,
      });
      return data;
    } catch (error) {
      console.error('Reminder API Error:', error);
      return this._fallbackReminder(type, description, date);
    }
  },

  async getReminders(status) {
    try {
      const params = status ? { status } : {};
      const { data } = await api.get('/reminders', { params });
      return data;
    } catch (error) {
      console.error('Get Reminders Error:', error);
      return [];
    }
  },

  async updateReminder(id, updates) {
    try {
      const { data } = await api.put(`/reminders/${id}`, updates);
      return data;
    } catch (error) {
      console.error('Update Reminder Error:', error);
      return null;
    }
  },

  // ─── Study Materials (Student Persona) ───
  async generateStudyNotes(topic, subject) {
    try {
      const { data } = await api.post('/study-materials', {
        topic,
        subject,
        content: `Comprehensive notes on ${topic} for ${subject}`,
        keyPoints: [
          `Core concepts of ${topic}`,
          `Key formulas and definitions`,
          `Important examples and applications`,
          `Common exam questions on ${topic}`,
        ],
        practiceQuestions: 5,
      });
      return data;
    } catch (error) {
      console.error('Study Notes API Error:', error);
      return this._fallbackStudyNotes(topic, subject);
    }
  },

  async getStudyMaterials(subject) {
    try {
      const params = subject ? { subject } : {};
      const { data } = await api.get('/study-materials', { params });
      return data;
    } catch (error) {
      console.error('Get Study Materials Error:', error);
      return [];
    }
  },

  // ─── Customers (Business Persona CRM) ───
  async getCustomers() {
    try {
      const { data } = await api.get('/customers');
      return data;
    } catch (error) {
      console.error('Get Customers Error:', error);
      return [];
    }
  },

  async createCustomer(customer) {
    try {
      const { data } = await api.post('/customers', customer);
      return data;
    } catch (error) {
      console.error('Create Customer Error:', error);
      return null;
    }
  },

  // ─── Mock/Fallback methods (work without backend) ───
  async optimizeGrocery(items) {
    return {
      id: 'opt_' + Date.now(),
      total_cost: Math.floor(Math.random() * 2000) + 500,
      savings: Math.floor(Math.random() * 500) + 100,
      stores: ['Local Market', 'Supermarket', 'Online'],
      best_deals: items.map(item => ({
        item,
        regular_price: Math.floor(Math.random() * 100) + 20,
        discounted_price: Math.floor(Math.random() * 80) + 10,
      })),
    };
  },

  async generateMarketingCopy(product, audience) {
    return {
      id: 'marketing_' + Date.now(),
      headline: `Exclusive ${product} offer for ${audience}!`,
      body: `Limited time only. Get up to 50% off on premium ${product}. Order now!`,
      cta: 'Shop Now',
      hashtags: ['#Shop', '#Deal', `#${product.replace(/\s/g, '')}`],
    };
  },

  // ─── Fallback data when backend is unreachable ───
  _fallbackRecipe(ingredients) {
    return {
      _id: 'local_' + Date.now(),
      name: `Special ${ingredients.split(',')[0]?.trim()} Dish`,
      ingredients: ingredients.split(',').map(i => i.trim()),
      steps: ['Prepare ingredients', 'Cook with spices', 'Serve hot'],
      cookingTime: 25,
      difficulty: 'Medium',
      nutrition: { calories: 350, protein: 18, fat: 12, carbs: 45 },
      _offline: true,
    };
  },

  _fallbackReminder(type, description, date) {
    return {
      _id: 'local_' + Date.now(),
      type, description, dueDate: date, status: 'active',
      _offline: true,
    };
  },

  _fallbackStudyNotes(topic, subject) {
    return {
      _id: 'local_' + Date.now(),
      topic, subject,
      content: `Study notes for ${topic}`,
      keyPoints: [`Key point about ${topic}`],
      _offline: true,
    };
  },
};

export default apiService;
