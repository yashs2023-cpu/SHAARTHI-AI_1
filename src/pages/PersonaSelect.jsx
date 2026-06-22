import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMode, PERSONAS } from '../contexts/ModeContext';
import PersonaLogo from '../components/shared/PersonaLogo';

const PERSONA_DETAILS = {
  amma: {
    benefits: ['Access govt. schemes worth ₹lakhs', 'AI-powered recipe & grocery planner', 'Scam protection for your family', 'Community & SHG connections'],
    illustration: '🏡',
    bgGradient: 'linear-gradient(135deg, #FFF0F5 0%, #FFD6E7 100%)',
  },
  student: {
    benefits: ['Personalized career roadmap', 'Scholarship & internship finder', 'AI study notes generator', 'Resume builder & mock interviews'],
    illustration: '🎓',
    bgGradient: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
  },
  senior: {
    benefits: ['One-tap SOS emergency contacts', 'Medicine reminders & health tips', 'Scam & fraud protection alerts', 'Simple voice-first interface'],
    illustration: '🌟',
    bgGradient: 'linear-gradient(135deg, #F0F9FF 0%, #BAE6FD 100%)',
  },
  business: {
    benefits: ['GST & tax guidance simplified', 'Business insights dashboard', 'Customer CRM & analytics', 'Loan & funding discovery'],
    illustration: '💼',
    bgGradient: 'linear-gradient(135deg, #F0F4F8 0%, #CBD5E1 100%)',
  },
};

export default function PersonaSelectPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { selectPersona } = useMode();

  const handleSelect = (key) => {
    selectPersona(key);
    navigate(`/${key}`);
  };

  return (
    <div style={styles.page} className="indian-art-bg">
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.greeting}>
          🙏 Namaste, <span style={{ color: 'var(--royal-maroon)', fontWeight: 700 }}>{user?.name || 'Friend'}</span>!
        </div>
        <h1 style={styles.title}>
          <span className="gradient-royal">Choose Your Saarthi</span>
        </h1>
        <p style={styles.subtitle}>
          Pick the digital companion that matches your needs — you can switch anytime
        </p>
      </div>

      {/* Persona cards */}
      <div style={styles.grid}>
        {Object.values(PERSONAS).map((persona, i) => {
          const details = PERSONA_DETAILS[persona.key];
          return (
            <div
              key={persona.key}
              className="saarthi-card-royal anim-up"
              style={{ ...styles.card, animationDelay: `${(i + 1) * 0.1}s` }}
              onClick={() => handleSelect(persona.key)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleSelect(persona.key)}
              aria-label={`Select ${persona.name}`}
            >
              {/* Card illustration area */}
              <div style={{
                ...styles.cardIllustration,
                background: details.bgGradient,
              }}>
                {/* SVG Persona Logo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                  <PersonaLogo persona={persona.key} size={88} />
                </div>
                <div style={{ ...styles.personaTag, background: persona.color }}>
                  {persona.emoji} {persona.name}
                </div>
              </div>

              {/* Card body */}
              <div style={styles.cardBody}>
                <p style={styles.cardDesc}>{persona.description}</p>

                <ul style={styles.benefitList}>
                  {details.benefits.map(b => (
                    <li key={b} style={styles.benefitItem}>
                      <span style={{ ...styles.benefitDot, color: persona.color }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  className="btn"
                  style={{
                    width: '100%',
                    marginTop: 20,
                    background: persona.color,
                    color: '#fff',
                    borderRadius: 'var(--r-full)',
                    padding: '13px 0',
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: `0 8px 24px ${persona.colorGlow}`,
                  }}
                  onClick={e => { e.stopPropagation(); handleSelect(persona.key); }}
                >
                  Enter {persona.name} →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--ivory)',
    padding: '64px 24px',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: 48,
    maxWidth: 600,
    margin: '0 auto 48px',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--gray-600)',
    marginBottom: 8,
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 800,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'var(--gray-500)',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    maxWidth: 1200,
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    borderRadius: '40px 40px 16px 16px', // Arch-top
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'var(--t-normal)',
  },
  cardIllustration: {
    padding: '36px 24px 28px',
    textAlign: 'center',
    position: 'relative',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  },
  cardEmoji: {
    width: 80,
    height: 80,
    borderRadius: '50% 50% 0 50%',
    transform: 'rotate(-45deg)',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    boxShadow: 'var(--shadow-md)',
  },
  personaTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: '#fff',
    padding: '6px 16px',
    borderRadius: 'var(--r-full)',
    fontSize: 13,
    fontWeight: 700,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  cardBody: { padding: '24px' },
  cardDesc: {
    fontSize: 14.5,
    color: 'var(--gray-600)',
    lineHeight: 1.6,
    marginBottom: 20,
    fontWeight: 500,
  },
  benefitList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
    fontSize: 13.5,
    color: 'var(--gray-700)',
    lineHeight: 1.4,
  },
  benefitDot: {
    fontWeight: 700,
    fontSize: 15,
    flexShrink: 0,
    marginTop: 1,
  },
};
