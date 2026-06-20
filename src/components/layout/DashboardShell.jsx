import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useMode } from '../../contexts/ModeContext';
import VoiceButton from '../shared/VoiceButton';
import AIChat from '../shared/AIChat';
import LanguageSelector from '../shared/LanguageSelector';
import { useLanguage } from '../../contexts/LanguageContext';

export default function DashboardShell({ persona, navItems, children }) {
  const { user, logout } = useAuth();
  const { clearPersona } = useMode();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { t } = useLanguage();

  const handleLogout = () => {
    clearPersona();
    logout();
    navigate('/');
  };

  const handleSwitchPersona = () => {
    clearPersona();
    navigate('/choose');
  };

  const accentColor = persona?.color || '#FF9933';
  
  // Helper to translate nav labels
  const getNavLabel = (label) => {
    if (!t?.nav) return label;
    const lower = label.toLowerCase();
    if (lower.includes('dashboard')) return t.nav.dashboard;
    if (lower.includes('ai assistant')) return t.nav.aiAssistant;
    if (lower.includes('scheme')) return t.nav.schemes;
    if (lower.includes('recipe')) return t.nav.recipes;
    if (lower.includes('community')) return t.nav.community;
    if (lower.includes('scam')) return t.nav.scamShield;
    return label;
  };

  return (
    <div style={styles.shell}>
      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} style={styles.overlay} />
      )}

      {/* ── Sidebar ── */}
      <aside 
        className="indian-art-bg"
        style={{
          ...styles.sidebar,
          background: `linear-gradient(180deg, ${persona?.colorDark || '#0F172A'} 0%, #0F172A 100%)`,
          transform: sidebarOpen ? 'translateX(0)' : undefined,
          borderRight: '3px solid var(--gold)',
        }}
      >
        {/* Logo */}
        <div style={{ ...styles.logoArea, position: 'relative', zIndex: 1 }}>
          <div style={{ 
            ...styles.personaAvatar, 
            background: accentColor + '22', 
            color: accentColor,
            border: `1.5px solid ${accentColor}`,
            boxShadow: `0 4px 10px ${accentColor}33`
          }}>
            {persona?.avatar || '🤖'}
          </div>
          <div>
            <div style={styles.appName}>Saarthi AI</div>
            <div style={{ ...styles.personaLabel, color: accentColor }}>
              {persona?.name || 'Dashboard'}
            </div>
          </div>
        </div>

        {/* User chip */}
        <div style={{ ...styles.userChip, position: 'relative', zIndex: 1 }}>
          <div style={styles.userAvatar}>
            {(user?.name || 'U')[0].toUpperCase()}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={styles.userName}>{user?.name || t?.shell?.user || 'User'}</div>
            <div style={styles.userEmail}>{user?.email}</div>
          </div>
        </div>

        {/* Nav items */}
        <nav style={{ ...styles.nav, position: 'relative', zIndex: 1 }} aria-label="Dashboard navigation">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/' + (persona?.key || '')}
              style={({ isActive }) => ({
                ...styles.navItem,
                background: isActive ? accentColor + '22' : 'transparent',
                color: isActive ? accentColor : 'rgba(255,255,255,0.6)',
                borderLeft: isActive ? `3px solid ${accentColor}` : '3px solid transparent',
              })}
              onClick={() => setSidebarOpen(false)}
            >
              <span style={styles.navIcon}>{item.icon}</span>
              <span>{getNavLabel(item.label)}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom buttons */}
        <div style={{ ...styles.sidebarBottom, position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 8 }}>
            <LanguageSelector />
          </div>
          <button style={styles.switchBtn} onClick={handleSwitchPersona}>
            🔄 {t?.nav?.switchPersona || 'Switch Persona'}
          </button>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            🚪 {t?.nav?.logout || 'Logout'}
          </button>
        </div>
      </aside>

      {/* ── Main area ── */}
      <main style={styles.main}>
        {/* Mobile top bar */}
        <div style={styles.mobileBar}>
          <button style={styles.menuBtn} onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
            ☰
          </button>
          <span style={{ fontWeight: 700, color: '#1B365D', fontSize: 16 }}>
            {persona?.name || 'Saarthi'}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LanguageSelector />
            <VoiceButton size={36} persona={persona?.key} />
          </div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {children}
        </div>
      </main>

      {/* Floating AI Assistant Button & Window */}
      {persona?.key && (
        <>
          <button
            style={{
              ...styles.floatingBtn,
              background: accentColor,
              boxShadow: `0 8px 24px ${accentColor}66`
            }}
            onClick={() => setChatOpen(!chatOpen)}
            aria-label="Toggle AI Assistant"
          >
            {chatOpen ? '✕' : '🤖'}
          </button>

          {chatOpen && (
            <div style={styles.floatingChat}>
              <div style={{...styles.chatHeader, background: accentColor}}>
                <span style={{ fontWeight: 600 }}>{persona.name} AI Assistant</span>
                <button style={styles.closeChatBtn} onClick={() => setChatOpen(false)}>✕</button>
              </div>
              <div style={{ height: 450 }}>
                <AIChat persona={persona.key} placeholder={`Ask ${persona.name} anything...`} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  shell: {
    display: 'flex',
    minHeight: '100vh',
    background: '#F9FAFB',
    position: 'relative',
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 99,
  },
  sidebar: {
    width: 260,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'auto',
    zIndex: 100,
    transition: 'transform 0.3s ease',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '24px 20px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  personaAvatar: {
    width: 44, height: 44, borderRadius: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 22, flexShrink: 0,
  },
  appName: {
    fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1.2,
  },
  personaLabel: {
    fontSize: 11, fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2,
  },
  userChip: {
    display: 'flex', alignItems: 'center', gap: 10,
    margin: '12px 16px',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  userAvatar: {
    width: 34, height: 34, borderRadius: '50%',
    background: 'rgba(255,153,51,0.25)', color: '#FF9933',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, fontWeight: 700, flexShrink: 0,
  },
  userName: {
    fontSize: 13, fontWeight: 600, color: '#fff',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  userEmail: {
    fontSize: 11, color: 'rgba(255,255,255,0.45)',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  nav: {
    flex: 1,
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    overflowY: 'auto',
  },
  navItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', borderRadius: 10,
    fontSize: 13.5, fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  navIcon: { fontSize: 16, width: 20, textAlign: 'center', flexShrink: 0 },
  sidebarBottom: {
    padding: '12px 16px 20px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    display: 'flex', flexDirection: 'column', gap: 8,
  },
  switchBtn: {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.8)',
    padding: '10px 14px', borderRadius: 10,
    fontSize: 13, fontWeight: 600, cursor: 'pointer',
    textAlign: 'left', transition: 'all 0.2s',
  },
  logoutBtn: {
    background: 'rgba(239,68,68,0.15)',
    border: '1px solid rgba(239,68,68,0.25)',
    color: '#FCA5A5',
    padding: '10px 14px', borderRadius: 10,
    fontSize: 13, fontWeight: 600, cursor: 'pointer',
    textAlign: 'left', transition: 'all 0.2s',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  mobileBar: {
    display: 'none',        // shown via @media in CSS
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 20px',
    background: '#fff',
    borderBottom: '1px solid #E5E7EB',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  menuBtn: {
    background: 'none', border: 'none',
    fontSize: 22, cursor: 'pointer', color: '#374151', padding: 4,
  },
  content: {
    padding: '28px 32px',
    flex: 1,
  },
  floatingBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: '50%',
    color: '#fff',
    fontSize: 28,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    transition: 'transform 0.2s',
  },
  floatingChat: {
    position: 'fixed',
    bottom: 100,
    right: 30,
    width: 360,
    background: '#fff',
    borderRadius: 'var(--r-xl)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    zIndex: 1000,
    overflow: 'hidden',
    border: '1px solid var(--gray-200)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    padding: '12px 16px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeChatBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: 18,
    cursor: 'pointer',
    opacity: 0.8,
  },
};
