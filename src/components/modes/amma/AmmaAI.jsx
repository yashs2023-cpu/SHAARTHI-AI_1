import React from 'react';
import AIChat from '../../shared/AIChat';
import { useLanguage } from '../../../contexts/LanguageContext';

const TRANSLATIONS = {
  en: {
    prompts: [
      'When will PM-Kisan money arrive?',
      'Give me a healthy vegetable recipe',
      'How to stay safe from online fraud?',
      'Optimize my grocery list',
      'Scholarships for my daughter'
    ],
    placeholder: 'Ask any question...',
    title: 'Amma Saarthi — the power of AI to make your life easier'
  },
  hi: {
    prompts: [
      'PM-Kisan ka paisa kab aata hai?',
      'Aaj healthy sabzi ki recipe batao',
      'Online fraud se kaise bachein?',
      'Grocery list optimize karo',
      'Beti ke liye scholarship batao'
    ],
    placeholder: 'Koi bhi sawaal poochein...',
    title: 'Amma Saarthi — aapki zindagi asaan banane ke liye AI ki shakti'
  },
  ta: {
    prompts: [
      'PM-Kisan பணம் எப்போது வரும்?',
      'ஆரோக்கியமான காய்கறி செய்முறையைச் சொல்லுங்கள்',
      'ஆன்லைன் மோசடியிலிருந்து தப்பிப்பது எப்படி?',
      'மளிகை பட்டியலை மேம்படுத்தவும்',
      'மகளுக்கான உதவித்தொகை'
    ],
    placeholder: 'எந்த கேள்வியும் கேட்கலாம்...',
    title: 'அம்மா சாரதி — உங்கள் வாழ்க்கையை எளிதாக்க AI-ன் சக்தி'
  },
  te: {
    prompts: [
      'PM-Kisan డబ్బులు ఎప్పుడు వస్తాయి?',
      'ఆరోగ్యకరమైన కూరగాయల వంటకం చెప్పండి',
      'ఆన్‌లైన్ మోసాల నుండి ఎలా సురక్షితంగా ఉండాలి?',
      'కిరాణా జాబితాను ఆప్టిమైజ్ చేయండి',
      'కూతురికి స్కాలర్‌షిప్‌లు'
    ],
    placeholder: 'ఏదైనా ప్రశ్న అడగండి...',
    title: 'అమ్మ సారథి — మీ జీవితాన్ని సులభతరం చేయడానికి AI శక్తి'
  }
};

export default function AmmaAI() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.headerIcon}>🤖</div>
        <div>
          <h1 style={styles.title}>AI Assistant</h1>
          <p style={styles.subtitle}>
            {t.title}
          </p>
        </div>
      </div>
      <AIChat
        persona="amma"
        placeholder={t.placeholder}
        suggestedPrompts={t.prompts}
      />
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 20 },
  header: { display: 'flex', alignItems: 'center', gap: 14 },
  headerIcon: {
    width: 52, height: 52, borderRadius: 14,
    background: 'var(--amma-bg)', fontSize: 26,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid var(--saffron-glow)',
  },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 2 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },
};
