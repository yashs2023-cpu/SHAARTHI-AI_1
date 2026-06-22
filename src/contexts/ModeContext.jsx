import React, { createContext, useContext, useState, useEffect } from 'react';

export const ModeContext = createContext(null);

export const PERSONAS = {
  amma: {
    key: 'amma',
    name: 'Amma Saarthi',
    tagline: 'Caring like family, guiding every day',
    description: 'Your trusted companion for home, family & government schemes',
    emoji: '🏡',
    color: '#D4547A',
    colorDark: '#A83860',
    colorLight: '#FFF0F5',
    colorGlow: 'rgba(212, 84, 122, 0.2)',
    path: '/amma',
    avatar: '👩‍🍳',
    features: ['Government Schemes', 'Recipes', 'Grocery Planner', 'Reminders', 'Community'],
  },
  student: {
    key: 'student',
    name: 'Student Saarthi',
    tagline: 'Your AI buddy for learning & success',
    description: 'Career mentor, study planner, scholarship finder all in one',
    emoji: '🎓',
    color: '#6C63FF',
    colorDark: '#4F46E5',
    colorLight: '#F5F3FF',
    colorGlow: 'rgba(108, 99, 255, 0.2)',
    path: '/student',
    avatar: '👨‍🎓',
    features: ['Career Guidance', 'Study Planner', 'Scholarships', 'Resume Builder', 'AI Mentor'],
  },
  senior: {
    key: 'senior',
    name: 'Senior Saarthi',
    tagline: 'Safe, simple & caring digital life',
    description: 'Scam protection, health reminders & family connection',
    emoji: '🌟',
    color: '#0EA5E9',
    colorDark: '#0369A1',
    colorLight: '#F0F9FF',
    colorGlow: 'rgba(14, 165, 233, 0.2)',
    path: '/senior',
    avatar: '👴',
    features: ['Scam Protection', 'Health Reminders', 'Emergency SOS', 'Government Benefits', 'Voice Assistant'],
  },
  business: {
    key: 'business',
    name: 'Business Saarthi',
    tagline: 'Smart growth for Indian entrepreneurs',
    description: 'GST guidance, business insights & AI advisory',
    emoji: '💼',
    color: '#1B365D',
    colorDark: '#0F172A',
    colorLight: '#F0F4F8',
    colorGlow: 'rgba(27, 54, 93, 0.2)',
    path: '/business',
    avatar: '👨‍💼',
    features: ['Business Insights', 'Customer CRM', 'GST Guidance', 'Loan Discovery', 'AI Advisor'],
  },
};

export function ModeProvider({ children }) {
  const [activePersona, setActivePersona] = useState(() => {
    return localStorage.getItem('saarthi_active_persona') || null;
  });

  useEffect(() => {
    if (activePersona) {
      localStorage.setItem('saarthi_active_persona', activePersona);
    } else {
      localStorage.removeItem('saarthi_active_persona');
    }
  }, [activePersona]);

  const selectPersona = (key) => {
    setActivePersona(key);
  };

  const clearPersona = () => {
    setActivePersona(null);
  };

  const getPersona = (key) => PERSONAS[key] || null;
  const currentPersona = PERSONAS[activePersona] || null;

  return (
    <ModeContext.Provider value={{
      activePersona,
      currentPersona,
      selectPersona,
      clearPersona,
      getPersona,
      personas: PERSONAS,
    }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be inside ModeProvider');
  return ctx;
}
