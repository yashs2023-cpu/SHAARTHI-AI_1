import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, register, isAuthenticated } = useAuth();
  const { showToast } = useToast();

  const [tab, setTab] = useState('login');
  const [loading, setLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regLanguage, setRegLanguage] = useState('en');

  useEffect(() => {
    if (isAuthenticated) navigate('/choose');
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) { showToast('Please fill all fields', 'warning'); return; }
    setLoading(true);
    try {
      const result = await login(loginEmail, loginPassword);
      if (result.success) { showToast('Welcome back! 🙏', 'success'); navigate('/choose'); }
      else showToast(result.error || 'Login failed', 'error');
    } catch (err) {
      showToast('Network error. Is the backend running?', 'error');
    } finally { setLoading(false); }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) { showToast('Please fill all required fields', 'warning'); return; }
    setLoading(true);
    try {
      const result = await register(regName, regEmail, regPhone, regPassword, regLanguage);
      if (result.success) { showToast('Account created! Please login 🎉', 'success'); setTab('login'); setLoginEmail(regEmail); }
      else showToast(result.error || 'Registration failed', 'error');
    } catch (err) {
      showToast('Network error. Is the backend running?', 'error');
    } finally { setLoading(false); }
  };

  return (
    <div style={styles.page}>
      {/* Left branding panel */}
      <div style={styles.brandPanel} className="lotus-art-bg">
        <div style={styles.brandContent}>
          <div style={styles.brandLogo}>
            {/* Elegant Spinning Ashoka Chakra */}
            <svg viewBox="0 0 100 100" width="48" height="48" style={{ animation: 'chakra-spin 20s linear infinite' }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="4" />
              <circle cx="50" cy="50" r="8" fill="var(--gold)" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 41 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={50 + 41 * Math.sin((i * 15 * Math.PI) / 180)}
                  stroke="var(--gold)"
                  strokeWidth="2.5"
                />
              ))}
            </svg>
          </div>
          <h1 style={styles.brandTitle}>Saarthi AI</h1>
          <p style={styles.brandTagline}>आपका डिजिटल साथी</p>
          <p style={styles.brandDesc}>
            India's trusted AI companion for every Indian family — students, homemakers, seniors and entrepreneurs.
          </p>
          <div style={styles.brandPersonas}>
            {['🏡 Amma', '🎓 Student', '👴 Senior', '💼 Business'].map(p => (
              <span key={p} style={styles.brandBadge}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div style={styles.formPanel} className="indian-art-bg">
        <Link to="/" style={styles.backLink}>← Back to home</Link>
        <div style={styles.formCard} className="saarthi-card-royal">
          <div style={styles.formHeader}>
            <h2 style={styles.formTitle}>{tab === 'login' ? 'Welcome back 🙏' : 'Create account 🚀'}</h2>
            <p style={styles.formSubtitle}>{tab === 'login' ? 'Sign in to meet your Saarthi' : 'Join millions using Saarthi AI'}</p>
          </div>

          {/* Tab switch */}
          <div style={styles.tabSwitch}>
            <button style={{ ...styles.tabBtn, ...(tab === 'login' ? styles.tabActive : {}) }} onClick={() => setTab('login')}>Sign In</button>
            <button style={{ ...styles.tabBtn, ...(tab === 'register' ? styles.tabActive : {}) }} onClick={() => setTab('register')}>Register</button>
          </div>

          {tab === 'login' && (
            <form onSubmit={handleLogin} style={styles.form}>
              <div style={styles.field}>
                <label style={styles.label}>Email address</label>
                <input type="email" className="saarthi-input" placeholder="you@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Password</label>
                <input type="password" className="saarthi-input" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-royal" style={{ width: '100%', marginTop: 8, padding: '14px', fontSize: 15 }} disabled={loading}>
                {loading ? 'Signing in…' : 'Sign In →'}
              </button>
            </form>
          )}

          {tab === 'register' && (
            <form onSubmit={handleRegister} style={styles.form}>
              <div style={styles.field}>
                <label style={styles.label}>Full Name *</label>
                <input type="text" className="saarthi-input" placeholder="Priya Sharma" value={regName} onChange={e => setRegName(e.target.value)} required />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Email *</label>
                <input type="email" className="saarthi-input" placeholder="you@example.com" value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Phone (optional)</label>
                <input type="tel" className="saarthi-input" placeholder="+91 98765 43210" value={regPhone} onChange={e => setRegPhone(e.target.value)} />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Password *</label>
                <input type="password" className="saarthi-input" placeholder="Create a strong password" value={regPassword} onChange={e => setRegPassword(e.target.value)} required />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Preferred Language</label>
                <select className="saarthi-input" value={regLanguage} onChange={e => setRegLanguage(e.target.value)}>
                  <option value="en">English</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                  <option value="te">తెలుగు (Telugu)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-royal" style={{ width: '100%', marginTop: 8, padding: '14px', fontSize: 15 }} disabled={loading}>
                {loading ? 'Creating account…' : 'Create Account →'}
              </button>
            </form>
          )}

          <p style={styles.terms}>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', display: 'flex' },
  brandPanel: {
    flex: 1,
    background: 'linear-gradient(135deg, var(--royal-maroon) 0%, var(--royal-burgundy) 50%, var(--peacock-deep) 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 48, position: 'relative', overflow: 'hidden',
    borderRight: '4px solid var(--gold)',
  },
  brandContent: { position: 'relative', zIndex: 1, maxWidth: 400, color: '#fff' },
  brandLogo: {
    width: 80, height: 80, borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid var(--gold)',
    boxShadow: 'var(--shadow-gold)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 24,
  },
  brandTitle: { fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 6, textShadow: '0 2px 4px rgba(0,0,0,0.3)' },
  brandTagline: { fontSize: 20, color: 'var(--gold)', fontWeight: 600, marginBottom: 20, textShadow: '0 1px 2px rgba(0,0,0,0.2)' },
  brandDesc: { fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 28 },
  brandPersonas: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  brandBadge: {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff', padding: '8px 16px', borderRadius: 'var(--r-full)', fontSize: 13, fontWeight: 600,
  },
  formPanel: {
    width: '100%', maxWidth: 520,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', padding: '40px 32px',
    background: 'var(--ivory)', position: 'relative',
  },
  backLink: { position: 'absolute', top: 24, left: 24, fontSize: 13, fontWeight: 600, color: 'var(--royal-maroon)', textDecoration: 'none' },
  formCard: {
    width: '100%',
    maxWidth: 420,
    background: '#fff',
    borderRadius: '40px 40px 16px 16px', // Arch-top
    border: '2px solid rgba(212, 175, 55, 0.25)',
    boxShadow: 'var(--shadow-md)',
    padding: '32px 24px 24px',
    position: 'relative',
  },
  formHeader: { marginBottom: 24, textAlign: 'center' },
  formTitle: { fontSize: 24, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 6 },
  formSubtitle: { fontSize: 14, color: 'var(--gray-500)' },
  tabSwitch: { display: 'flex', background: 'var(--gray-100)', borderRadius: 'var(--r-full)', padding: 4, marginBottom: 24 },
  tabBtn: { flex: 1, padding: '10px 0', border: 'none', borderBottom: '2px solid transparent', borderRadius: 'var(--r-full)', fontSize: 14, fontWeight: 600, cursor: 'pointer', background: 'transparent', color: 'var(--gray-500)', transition: 'var(--t-fast)' },
  tabActive: { background: '#fff', color: 'var(--royal-maroon)', boxShadow: 'var(--shadow-sm)', borderBottom: '2px solid var(--gold)' },
  form: { display: 'flex', flexDirection: 'column', gap: 16 },
  field: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: { fontSize: 13, fontWeight: 600, color: 'var(--gray-700)' },
  terms: { marginTop: 20, fontSize: 11, color: 'var(--gray-400)', textAlign: 'center', lineHeight: 1.5 },
};
