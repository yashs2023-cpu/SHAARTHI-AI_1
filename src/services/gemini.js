import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const geminiService = {
  async generateRecipe(ingredients, cuisine, language = 'en') {
    try {
      const prompt = `Generate a delicious ${cuisine} recipe using these ingredients: ${ingredients}.

      Format as JSON with:
      {
        "name": "recipe name",
        "ingredients": ["list"],
        "steps": ["step 1", "step 2"],
        "cookingTime": "minutes",
        "difficulty": "Easy/Medium/Hard",
        "nutrition": {"calories": num, "protein": num, "fat": num, "carbs": num},
        "tips": "helpful tip",
        "servings": "number"
      }

      Language: ${language}`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const content = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (error) {
      console.error('Gemini Recipe Error:', error);
      return null;
    }
  },

  async generateStudyNotes(topic, subject, language = 'en') {
    try {
      const prompt = `Create comprehensive study notes for: ${topic} in ${subject}.

      Format as JSON with:
      {
        "topic": "topic name",
        "subject": "subject",
        "headings": ["Introduction", "Key Concepts", "Examples", "Summary"],
        "content": "detailed explanation",
        "keyPoints": ["point 1", "point 2", "point 3"],
        "practiceQuestions": 5,
        "tips": "study tip"
      }

      Language: ${language}`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const content = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (error) {
      console.error('Gemini Notes Error:', error);
      return null;
    }
  },

  async generateBusinessInsights(revenue, expenses, customers) {
    try {
      const prompt = `Analyze business metrics and provide insights.

      Data: Revenue: ${revenue}, Expenses: ${expenses}, Customers: ${customers}

      Format as JSON with:
      {
        "profitMargin": "percentage",
        "insights": ["insight 1", "insight 2"],
        "recommendations": ["action 1", "action 2"],
        "growthOpportunities": ["opportunity 1"],
        "risks": ["risk 1"]
      }`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const content = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (error) {
      console.error('Gemini Business Insights Error:', error);
      return null;
    }
  },

  async recommendCareer(interests, skills, qualifications) {
    try {
      const prompt = `Recommend career paths based on:
      Interests: ${interests}
      Skills: ${skills}
      Qualifications: ${qualifications}

      Format as JSON with:
      {
        "recommendedCareers": ["career 1", "career 2"],
        "requiredSkills": ["skill 1"],
        "companies": ["company 1"],
        "salaryRange": "range",
        "growthPotential": "high/medium/low"
      }`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const content = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (error) {
      console.error('Gemini Career Error:', error);
      return null;
    }
  },

  async generateMarketingCopy(product, audience, tone = 'professional') {
    try {
      const prompt = `Generate marketing copy for: ${product}
      Target audience: ${audience}
      Tone: ${tone}

      Format as JSON with:
      {
        "headline": "catchy headline",
        "body": "persuasive copy",
        "cta": "call to action",
        "hashtags": ["#tag1", "#tag2"],
        "variants": ["variant 1", "variant 2"]
      }`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const content = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (error) {
      console.error('Gemini Marketing Error:', error);
      return null;
    }
  }
};

export default geminiService;
