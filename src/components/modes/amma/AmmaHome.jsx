import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { Card } from '../../shared/Card';

const QUICK_ACTIONS = [
  { icon: '🤖', label: 'Ask AI',       path: '/amma/ai',        color: '#D4547A', bg: '#FFF0F5' },
  { icon: '🏛️', label: 'Schemes',      path: '/amma/schemes',   color: '#10B981', bg: '#ECFDF5' },
  { icon: '🍳', label: 'Recipes',      path: '/amma/recipes',   color: '#F59E0B', bg: '#FFFBEB' },
  { icon: '👥', label: 'Community',    path: '/amma/community', color: '#6C63FF', bg: '#F5F3FF' },
  { icon: '🛡️', label: 'Scam Shield', path: '/scam-shield',    color: '#EF4444', bg: '#FEF2F2' },
];

const SCHEME_HIGHLIGHTS = [
  { name: 'PM-Kisan Samman Nidhi',      benefit: '₹6,000/year',    deadline: 'Ongoing', icon: '🌾' },
  { name: 'Pradhan Mantri Ujjwala',     benefit: 'Free LPG Gas',   deadline: 'Ongoing', icon: '🔥' },
  { name: 'Ayushman Bharat',            benefit: '₹5L Insurance',  deadline: 'Ongoing', icon: '🏥' },
  { name: 'MGNREGA Employment',         benefit: '100 days work',  deadline: 'Ongoing', icon: '👷' },
];

export default function AmmaHome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div style={styles.page}>
      {/* Welcome banner */}
      <div style={styles.welcomeBanner} className="anim-up">
        <div>
          <p style={styles.greetingText}>{greeting} 🙏</p>
          <h1 style={styles.welcomeTitle}>
            नमस्ते, <span style={{ color: '#FFD6E7' }}>{user?.name || 'Amma'}</span>
          </h1>
          <p style={styles.welcomeDesc}>
            Aapka Saarthi aaj ki zarooratein poori karne ke liye ready hai
          </p>
        </div>
        <div style={styles.bannerEmoji}>🏡</div>
      </div>

      {/* Quick actions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.quickGrid}>
          {QUICK_ACTIONS.map(a => (
            <button
              key={a.label}
              style={{ ...styles.quickBtn, background: a.bg, borderColor: a.color + '30' }}
              onClick={() => navigate(a.path)}
              aria-label={a.label}
            >
              <span style={{ ...styles.quickIcon, color: a.color }}>{a.icon}</span>
              <span style={{ ...styles.quickLabel, color: a.color }}>{a.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Scheme highlights */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Government Schemes for You 🏛️</h2>
          <button style={styles.viewAll} onClick={() => navigate('/amma/schemes')}>View all →</button>
        </div>
        <div style={styles.schemesGrid}>
          {SCHEME_HIGHLIGHTS.map(s => (
            <div key={s.name} className="saarthi-card" style={styles.schemeCard}>
              <span style={styles.schemeIcon}>{s.icon}</span>
              <div>
                <div style={styles.schemeName}>{s.name}</div>
                <div style={styles.schemeBenefit}>{s.benefit}</div>
              </div>
              <button
                className="btn btn-sm"
                style={{ marginTop: 12, background: '#D4547A', color: '#fff', borderRadius: 'var(--r-full)', fontSize: 12 }}
                onClick={() => navigate('/amma/schemes')}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Scam alert banner */}
      <div style={styles.scamBanner} className="anim-up">
        <span style={{ fontSize: 28 }}>🛡️</span>
        <div style={{ flex: 1 }}>
          <div style={styles.scamBannerTitle}>Scam Shield Active</div>
          <div style={styles.scamBannerDesc}>
            Received a suspicious SMS or WhatsApp? Check it instantly before clicking any links.
          </div>
        </div>
        <button
          className="btn btn-sm"
          style={{ background: '#EF4444', color: '#fff', borderRadius: 'var(--r-full)', flexShrink: 0 }}
          onClick={() => navigate('/scam-shield')}
        >
          Check Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 28 },

  welcomeBanner: {
    background: 'linear-gradient(135deg, #D4547A 0%, #A83860 100%)',
    borderRadius: 'var(--r-2xl)',
    padding: '28px 32px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(212, 84, 122, 0.35)',
  },
  greetingText: { fontSize: 13, opacity: 0.85, marginBottom: 4, fontWeight: 500 },
  welcomeTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    fontWeight: 800, color: '#fff', marginBottom: 6,
  },
  welcomeDesc: { fontSize: 14, opacity: 0.85, maxWidth: 380 },
  bannerEmoji: {
    fontSize: 72,
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
    userSelect: 'none',
  },

  section: {},
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: {
    fontSize: 18, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 14,
  },
  viewAll: {
    background: 'none', border: 'none', color: '#D4547A',
    fontWeight: 600, fontSize: 13, cursor: 'pointer',
  },

  quickGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 12,
  },
  quickBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: '18px 12px',
    borderRadius: 'var(--r-lg)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
    transition: 'var(--t-normal)',
  },
  quickIcon: { fontSize: 28 },
  quickLabel: { fontSize: 12, fontWeight: 700 },

  schemesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
  },
  schemeCard: {
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  schemeIcon: { fontSize: 28, marginBottom: 4 },
  schemeName: { fontSize: 14, fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.3 },
  schemeBenefit: { fontSize: 13, color: '#D4547A', fontWeight: 600 },

  scamBanner: {
    background: 'linear-gradient(135deg, #FEF2F2, #FECACA)',
    border: '1.5px solid rgba(239,68,68,0.2)',
    borderRadius: 'var(--r-xl)',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  scamBannerTitle: { fontSize: 15, fontWeight: 700, color: '#991B1B', marginBottom: 3 },
  scamBannerDesc: { fontSize: 13, color: '#7F1D1D', lineHeight: 1.5 },
};
