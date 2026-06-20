import React from 'react';
import AIChat from '../../shared/AIChat';
import { useLanguage } from '../../../contexts/LanguageContext';

const TRANSLATIONS = {
  en: {
    prompts: [
      'How to reduce my business costs?',
      'GST filing deadline this month?',
      'Best way to retain customers',
      'How to get a business loan?',
      'Marketing strategy for local business'
    ],
    placeholder: 'Ask about GST, growth, loans, customers...',
    title: 'AI Business Advisor',
    subtitle: 'Expert guidance on GST, growth strategies, customers, and more'
  },
  hi: {
    prompts: [
      'Business costs kaise kam karein?',
      'Is mahine GST filing deadline?',
      'Customers ko retain karne ka best tarika',
      'Business loan kaise lein?',
      'Local business ke liye marketing strategy'
    ],
    placeholder: 'GST, growth, loans ke baare mein poochein...',
    title: 'AI Business Advisor',
    subtitle: 'GST, growth, customers aadi par expert salaah'
  },
  ta: {
    prompts: [
      'எனது வணிகச் செலவுகளைக் குறைப்பது எப்படி?',
      'இந்த மாதம் GST தாக்கல் செய்வதற்கான காலக்கெடு?',
      'வாடிக்கையாளர்களைத் தக்கவைக்க சிறந்த வழி',
      'வணிகக் கடன் பெறுவது எப்படி?',
      'உள்ளூர் வணிகத்திற்கான சந்தைப்படுத்தல் உத்தி'
    ],
    placeholder: 'GST, வளர்ச்சி, கடன்கள் பற்றி கேளுங்கள்...',
    title: 'AI வணிக ஆலோசகர்',
    subtitle: 'GST, வளர்ச்சி உத்திகள் மற்றும் பலவற்றில் நிபுணர் வழிகாட்டுதல்'
  },
  te: {
    prompts: [
      'నా వ్యాపార ఖర్చులను ఎలా తగ్గించుకోవాలి?',
      'ఈ నెల GST ఫైలింగ్ గడువు?',
      'కస్టమర్లను నిలుపుకోవడానికి ఉత్తమ మార్గం',
      'వ్యాపార రుణం ఎలా పొందాలి?',
      'స్థానిక వ్యాపారం కోసం మార్కెటింగ్ వ్యూహం'
    ],
    placeholder: 'GST, వృద్ధి, రుణాలు గురించి అడగండి...',
    title: 'AI వ్యాపార సలహాదారు',
    subtitle: 'GST, వృద్ధి వ్యూహాలు మరియు మరిన్నింటిపై నిపుణుల మార్గదర్శకత్వం'
  }
};

export default function BusinessAI() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.icon}>🤖</div>
        <div>
          <h1 style={styles.title}>{t.title}</h1>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>
      <AIChat
        persona="business"
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
    width: 52, height: 52, borderRadius: 14,
    background: 'var(--business-bg)', fontSize: 26,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid rgba(27,54,93,0.15)',
  },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 2 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },
};
