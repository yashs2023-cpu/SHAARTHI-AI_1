import React from 'react';
import AIChat from '../../shared/AIChat';
import { useLanguage } from '../../../contexts/LanguageContext';

const TRANSLATIONS = {
  en: {
    prompts: [
      'How to stay safe from UPI fraud?',
      'When should I take blood pressure medicine?',
      'How to do online shopping safely?',
      'How to apply for pension?',
      'Teach me how to make a video call'
    ],
    placeholder: 'Ask any question...',
    title: 'AI Saarthi',
    subtitle: 'Ask anything in simple language — I am always here'
  },
  hi: {
    prompts: [
      'Mujhe UPI fraud se kaise bachein?',
      'Blood pressure medicine kab leni chahiye?',
      'Online shopping safely kaise karein?',
      'Pension ke liye kaise apply karein?',
      'Video call karna sikhao'
    ],
    placeholder: 'Koi bhi sawaal poochein...',
    title: 'AI Saarthi',
    subtitle: 'Saral bhasha mein poochein kuch bhi — main hamesha yahan hoon'
  },
  ta: {
    prompts: [
      'UPI மோசடியிலிருந்து எப்படி பாதுகாப்பாக இருப்பது?',
      'இரத்த அழுத்த மருந்தை எப்போது எடுக்க வேண்டும்?',
      'ஆன்லைன் ஷாப்பிங் பாதுகாப்பாக செய்வது எப்படி?',
      'ஓய்வூதியத்திற்கு விண்ணப்பிப்பது எப்படி?',
      'வீடியோ கால் செய்வது எப்படி என்று சொல்லித்தரவும்'
    ],
    placeholder: 'எந்த கேள்வியும் கேட்கலாம்...',
    title: 'AI சாரதி',
    subtitle: 'எளிய மொழியில் எதையும் கேளுங்கள் — நான் எப்போதும் இங்கு உள்ளேன்'
  },
  te: {
    prompts: [
      'UPI మోసాల నుండి ఎలా సురక్షితంగా ఉండాలి?',
      'రక్తపోటు మందు ఎప్పుడు వేసుకోవాలి?',
      'ఆన్‌లైన్ షాపింగ్ సురక్షితంగా ఎలా చేయాలి?',
      'పెన్షన్ కోసం ఎలా దరఖాస్తు చేయాలి?',
      'వీడియో కాల్ ఎలా చేయాలో నేర్పించండి'
    ],
    placeholder: 'ఏదైనా ప్రశ్న అడగండి...',
    title: 'AI సారథి',
    subtitle: 'సరళమైన భాషలో ఏదైనా అడగండి — నేను ఎల్లప్పుడూ ఇక్కడ ఉంటాను'
  }
};

export default function SeniorAI() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div style={styles.page} className="senior-mode">
      <div style={styles.header}>
        <div style={styles.icon}>🤖</div>
        <div>
          <h1 style={styles.title}>{t.title}</h1>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>
      <AIChat
        persona="senior"
        placeholder={t.placeholder}
        suggestedPrompts={t.prompts}
      />
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 20 },
  header: { display: 'flex', alignItems: 'center', gap: 14 },
  icon: {
    width: 60, height: 60, borderRadius: 16,
    background: '#F0F9FF', fontSize: 30,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid rgba(14,165,233,0.2)',
  },
  title: { fontSize: 24, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 4 },
  subtitle: { fontSize: 16, color: 'var(--gray-500)' },
};
