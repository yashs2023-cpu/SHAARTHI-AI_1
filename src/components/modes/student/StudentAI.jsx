import React from 'react';
import AIChat from '../../shared/AIChat';
import { useLanguage } from '../../../contexts/LanguageContext';

const TRANSLATIONS = {
  en: {
    prompts: [
      'Explain photosynthesis simply',
      'Best career after 12th Science?',
      'How to crack UPSC in 1 year?',
      'What skills should I learn for IT jobs?',
      'Help me write a college SOP'
    ],
    placeholder: 'Ask me anything — exams, career, skills...',
    title: 'AI Mentor',
    subtitle: 'Your personal study buddy — asks questions, explains concepts, plans your career'
  },
  hi: {
    prompts: [
      'Photosynthesis asani se samjhao',
      '12th Science ke baad best career?',
      '1 saal mein UPSC kaise crack karein?',
      'IT jobs ke liye kya skills seekhein?',
      'College SOP likhne mein madad karo'
    ],
    placeholder: 'Kuch bhi poocho — exams, career, skills...',
    title: 'AI Mentor',
    subtitle: 'Aapka study dost — concepts samjhata hai aur career plan karta hai'
  },
  ta: {
    prompts: [
      'ஒளிச்சேர்க்கையை எளிமையாக விளக்கவும்',
      '12 ஆம் வகுப்பு அறிவியலுக்குப் பிறகு சிறந்த தொழில்?',
      '1 வருடத்தில் UPSC தேர்ச்சி பெறுவது எப்படி?',
      'IT வேலைகளுக்கு நான் என்ன திறன்களைக் கற்க வேண்டும்?',
      'கல்லூரி SOP எழுத உதவுங்கள்'
    ],
    placeholder: 'தேர்வுகள், தொழில், திறன்கள் — எதையும் கேளுங்கள்...',
    title: 'AI வழிகாட்டி',
    subtitle: 'உங்கள் தனிப்பட்ட படிப்பு நண்பன் — கருத்துகளை விளக்கி, தொழிலை திட்டமிடுகிறான்'
  },
  te: {
    prompts: [
      'కిరణజన్య సంయోగక్రియను సరళంగా వివరించండి',
      '12వ సైన్స్ తర్వాత ఉత్తమ కెరీర్?',
      '1 సంవత్సరంలో UPSC ఎలా క్రాక్ చేయాలి?',
      'IT ఉద్యోగాల కోసం నేను ఏ నైపుణ్యాలు నేర్చుకోవాలి?',
      'కళాశాల SOP రాయడంలో నాకు సహాయం చేయండి'
    ],
    placeholder: 'పరీక్షలు, కెరీర్, నైపుణ్యాలు — నన్ను ఏదైనా అడగండి...',
    title: 'AI మెంటర్',
    subtitle: 'మీ వ్యక్తిగత అధ్యయన స్నేహితుడు — భావనలను వివరిస్తుంది, కెరీర్‌ను ప్లాన్ చేస్తుంది'
  }
};

export default function StudentAI() {
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
        persona="student"
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
    background: 'var(--student-bg)', fontSize: 26,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid rgba(108,99,255,0.2)',
  },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 2 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },
};
