import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PERSONAS = [
  { key: 'amma',     avatar: '👩‍🍳', name: 'Amma Saarthi',     desc: 'Caring like family, guiding every day',  color: '#FF9933', bg: '#FFF8E7' },
  { key: 'student',  avatar: '👨‍🎓', name: 'Student Saarthi',   desc: 'Your AI buddy for learning & success',    color: '#6C63FF', bg: '#F5F3FF' },
  { key: 'senior',   avatar: '👴',   name: 'Senior Saarthi',    desc: 'Safe, simple & caring digital life',      color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'business', avatar: '👨‍💼', name: 'Business Saarthi',  desc: 'Smart growth for Indian entrepreneurs',   color: '#1B365D', bg: '#F0F4F8' },
];

const PROBLEMS = [
  { icon: '🎭', title: 'Digital Scams',      desc: 'Millions fall victim to UPI fraud, phishing & fake calls every year' },
  { icon: '📱', title: 'Digital Literacy',   desc: 'Complex technology leaves millions confused and left behind' },
  { icon: '🎓', title: 'Career Confusion',   desc: 'Students struggle to find the right path without guidance' },
  { icon: '🏛️', title: 'Scheme Awareness',  desc: 'Eligible citizens miss out on lakhs of rupees in government benefits' },
];

const FEATURES = [
  { icon: '🤖', title: 'AI Assistant',       desc: 'Gemini-powered responses in your language and context',   color: '#FF9933' },
  { icon: '🛡️', title: 'Scam Shield',        desc: 'Real-time SMS, WhatsApp & URL analysis',                  color: '#EF4444' },
  { icon: '🏛️', title: 'Government Schemes', desc: 'Discover and apply for benefits you deserve',              color: '#10B981' },
  { icon: '📚', title: 'Learning Hub',        desc: 'Personalized study plans and career guidance',             color: '#6C63FF' },
  { icon: '🎤', title: 'Voice Support',       desc: 'Talk naturally in Hindi, Tamil, Telugu & more',           color: '#0EA5E9' },
  { icon: '🌐', title: 'Works Offline',       desc: 'Core features work even with limited connectivity',       color: '#D4AF37' },
];

const TESTIMONIALS = [
  { quote: "Amma Saarthi helped me discover the PM-Kisan scheme. I received my ₹2,000 installment within weeks! The recipe planner is also my daily helper.", author: "Rajeswari Devi", role: "Homemaker, Bihar", avatar: "👩" },
  { quote: "The Student Saarthi career pathfinder and scholarship tracker is amazing. It found three scholarships I was eligible for and guided me on preparation.", author: "Aman Preet Singh", role: "B.Tech Student, Punjab", avatar: "🧑‍🎓" },
  { quote: "Since using Senior Saarthi, I feel much safer. The Scam Shield warning helps me avoid fake OTP calls and the big buttons are very easy to read.", author: "Devendra Prasad", role: "Retired Officer, UP", avatar: "👴" },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isAuthenticated) navigate('/choose');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAuthenticated, navigate]);

  return (
    <div style={styles.page} className="indian-art-bg">
      {/* ── Navbar ── */}
      <nav style={{
        ...styles.navbar,
        background: scrollY > 40 ? 'rgba(255,248,231,0.95)' : 'transparent',
        boxShadow: scrollY > 40 ? 'var(--shadow-sm)' : 'none',
        backdropFilter: scrollY > 40 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 40 ? '2px solid var(--gold)' : 'none',
      }}>
        <div style={styles.navInner}>
          <div style={styles.navBrand}>
            {/* Spinning Ashoka Chakra Logo */}
            <div style={styles.brandLogoContainer}>
              <svg viewBox="0 0 100 100" width="36" height="36" style={{ animation: 'chakra-spin 25s linear infinite' }}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--royal-maroon)" strokeWidth="4" />
                <circle cx="50" cy="50" r="8" fill="var(--royal-maroon)" />
                {Array.from({ length: 24 }).map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 41 * Math.cos((i * 15 * Math.PI) / 180)}
                    y2={50 + 41 * Math.sin((i * 15 * Math.PI) / 180)}
                    stroke="var(--royal-maroon)"
                    strokeWidth="2.5"
                  />
                ))}
              </svg>
            </div>
            <span style={styles.brandText}>Saarthi AI</span>
          </div>
          <div style={styles.navActions}>
            <button style={styles.navLogin} onClick={() => navigate('/login')}>Login</button>
            <button className="btn btn-royal btn-sm" onClick={() => navigate('/login')}>
              Get Started →
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={styles.hero}>
        <div style={styles.heroCircle1} />
        <div style={styles.heroCircle2} />
        <div style={styles.heroCircle3} />

        <div style={styles.heroContent} className="anim-up">
          <div className="badge badge-royal" style={{ fontSize: 13, marginBottom: 20, display: 'inline-flex' }}>
            🇮🇳 Made for Bharat with Love
          </div>
          <h1 style={styles.heroTitle}>
            नमस्ते 🙏<br />
            <span className="gradient-royal">Your AI Saarthi</span>
            <br />is here
          </h1>
          <p style={styles.heroDesc}>
            India's first multi-persona AI companion — for students, families,
            seniors and entrepreneurs. Powered by Gemini. Built with love for Bharat.
          </p>
          <div style={styles.heroCTAs}>
            <button className="btn btn-gold btn-lg" onClick={() => navigate('/login')}>
              Choose Your Saarthi 🚀
            </button>
            <button
              className="btn btn-outline btn-lg"
              style={{ color: 'var(--royal-maroon)', borderColor: 'var(--royal-maroon)' }}
              onClick={() => document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See All Personas
            </button>
          </div>
          <div style={styles.heroStats}>
            {[['4', 'AI Personas'], ['20+', 'Features'], ['6', 'Languages'], ['100%', 'Free']].map(([num, label]) => (
              <div key={label} style={styles.heroStat}>
                <div style={styles.heroStatNum}>{num}</div>
                <div style={styles.heroStatLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.heroVisual} className="anim-right">
          <div style={styles.heroCard} className="saarthi-card-royal">
            <div style={styles.heroCardHeader}>
              <div style={styles.heroCardAvatar}>👩‍🍳</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Amma Saarthi</div>
                <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>Online · Ready to help</div>
              </div>
              <div style={styles.onlineDot} />
            </div>
            <div style={styles.heroChatBubble}>
              🙏 Namaste! Today there's a new government scheme for you — PM-Kisan ₹2,000 installment is ready!
            </div>
            <div style={styles.heroChatBubbleUser}>How do I check my status?</div>
            <div style={styles.heroChatBubble}>
              Easy! Go to pmkisan.gov.in → Beneficiary Status → Enter Aadhaar 📱
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section style={styles.problemSection} className="jali-art-bg">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div className="badge badge-danger" style={{ fontSize: 13, marginBottom: 12, display: 'inline-flex' }}>The Challenge</div>
            <h2 style={styles.sectionTitle}>India's Digital Divide is Real</h2>
            <p style={styles.sectionDesc}>Millions of Indians face these challenges every single day</p>
          </div>
          <div style={styles.problemGrid}>
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className={`saarthi-card anim-up anim-delay-${i + 1}`} style={styles.problemCard}>
                <div style={styles.problemIcon}>{p.icon}</div>
                <h3 style={styles.problemTitle}>{p.title}</h3>
                <p style={styles.problemDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Persona Showcase ── */}
      <section id="personas" style={styles.personaSection} className="lotus-art-bg">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div className="badge badge-saffron" style={{ fontSize: 13, marginBottom: 12, display: 'inline-flex' }}>Meet Your Saarthi</div>
            <h2 style={styles.sectionTitle}>Choose Your AI Companion</h2>
            <p style={styles.sectionDesc}>Each Saarthi is trained specifically for your needs</p>
          </div>
          <div style={styles.personaGrid}>
            {PERSONAS.map((p, i) => (
              <div
                key={p.key}
                className="saarthi-card-royal anim-up"
                style={{ ...styles.personaCard, animationDelay: `${(i + 1) * 0.1}s` }}
                onClick={() => navigate('/login')}
              >
                <div style={{ ...styles.personaCardAvatar, background: p.bg }}>
                  <span style={{ display: 'inline-block', transform: 'rotate(45deg)', color: p.color }}>
                    {p.avatar}
                  </span>
                </div>
                <h3 style={{ ...styles.personaCardName, color: p.color }}>{p.name}</h3>
                <p style={styles.personaCardDesc}>{p.desc}</p>
                <button
                  className="btn btn-sm"
                  style={{ marginTop: 16, background: p.color, color: '#fff', borderRadius: 'var(--r-full)' }}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={styles.featuresSection} className="jali-art-bg">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div className="badge badge-gold" style={{ fontSize: 13, marginBottom: 12, display: 'inline-flex' }}>Features</div>
            <h2 style={styles.sectionTitle}>Everything You Need</h2>
            <p style={styles.sectionDesc}>Powerful AI tools designed for real Indian needs</p>
          </div>
          <div style={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`saarthi-card anim-up anim-delay-${(i % 3) + 1}`} style={styles.featureCard}>
                <div style={{ ...styles.featureIcon, background: f.color + '18', color: f.color }}>{f.icon}</div>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={styles.testimonialsSection} className="lotus-art-bg">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div className="badge badge-royal" style={{ fontSize: 13, marginBottom: 12, display: 'inline-flex' }}>Testimonials</div>
            <h2 style={styles.sectionTitle}>Loved Across Bharat</h2>
            <p style={styles.sectionDesc}>Hear from fellow citizens who transformed their digital lives with Saarthi</p>
          </div>
          <div style={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.author} className="saarthi-card-royal anim-up" style={{ ...styles.testimonialCard, animationDelay: `${(i + 1) * 0.15}s` }}>
                <p style={styles.testimonialQuote}>"{t.quote}"</p>
                <div style={styles.testimonialUser}>
                  <div style={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <h4 style={styles.testimonialName}>{t.author}</h4>
                    <p style={styles.testimonialRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>आपका Saarthi इंतज़ार कर रहा है</h2>
          <p style={styles.ctaDesc}>Join millions of Indians who trust Saarthi for their digital journey</p>
          <button className="btn btn-gold btn-lg" onClick={() => navigate('/login')}>
            <span style={{ fontWeight: 800 }}>🚀 Start for Free — No signup fees</span>
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            {/* Tiny Ashoka Chakra Logo */}
            <svg viewBox="0 0 100 100" width="24" height="24" style={{ animation: 'chakra-spin 25s linear infinite', marginRight: 4 }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="5" />
              <circle cx="50" cy="50" r="8" fill="var(--gold)" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 41 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={50 + 41 * Math.sin((i * 15 * Math.PI) / 180)}
                  stroke="var(--gold)"
                  strokeWidth="3.5"
                />
              ))}
            </svg>
            <span style={{ fontWeight: 800, color: '#fff', fontSize: 18 }}>Saarthi AI</span>
          </div>
          <p style={styles.footerTagline}>आपका डिजिटल साथी — Guiding India into the Digital Future</p>
          <p style={styles.footerCopy}>Built with ❤️ for Bharat · © 2025-2026 Saarthi AI</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: { background: 'var(--ivory)', minHeight: '100vh', position: 'relative' },
  navbar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, transition: 'all 0.3s ease', padding: '0 24px' },
  navInner: { maxWidth: 1280, margin: '0 auto', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  navBrand: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' },
  brandLogoContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  brandText: { fontSize: 20, fontWeight: 800, color: 'var(--royal-maroon)', letterSpacing: '0.5px' },
  navActions: { display: 'flex', alignItems: 'center', gap: 12 },
  navLogin: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--royal-maroon)', padding: '8px 16px' },
  hero: { minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 60px', maxWidth: 1280, margin: '0 auto', gap: 48, position: 'relative', overflow: 'hidden' },
  heroCircle1: { position: 'absolute', top: 80, right: 120, width: 400, height: 400, borderRadius: '50%', background: 'rgba(128,0,32,0.04)', zIndex: 0 },
  heroCircle2: { position: 'absolute', bottom: 60, right: 60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(212,175,55,0.06)', zIndex: 0 },
  heroCircle3: { position: 'absolute', top: 200, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(0,95,115,0.03)', zIndex: 0 },
  heroContent: { flex: 1, maxWidth: 580, position: 'relative', zIndex: 1 },
  heroTitle: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--navy-deep)', marginBottom: 20 },
  heroDesc: { fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 },
  heroCTAs: { display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 },
  heroStats: { display: 'flex', gap: 32, flexWrap: 'wrap' },
  heroStat: { textAlign: 'center' },
  heroStatNum: { fontSize: 28, fontWeight: 800, color: 'var(--royal-maroon)' },
  heroStatLabel: { fontSize: 12, fontWeight: 600, color: 'var(--gray-500)', textTransform: 'uppercase' },
  heroVisual: { flex: 1, maxWidth: 400, position: 'relative', zIndex: 1 },
  heroCard: { background: '#fff', borderRadius: 'var(--r-2xl)', padding: 24, boxShadow: 'var(--shadow-xl)', border: '1px solid var(--gray-100)' },
  heroCardHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, position: 'relative' },
  heroCardAvatar: { width: 40, height: 40, borderRadius: 12, background: 'var(--amma-bg)', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  onlineDot: { width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', position: 'absolute', top: 2, right: 2 },
  heroChatBubble: { background: 'var(--gray-50)', borderRadius: '16px 16px 16px 4px', padding: '12px 14px', fontSize: 13, lineHeight: 1.5, marginBottom: 8, color: 'var(--gray-700)', border: '1px solid var(--gray-200)' },
  heroChatBubbleUser: { background: 'linear-gradient(135deg, var(--royal-maroon), var(--royal-burgundy))', borderRadius: '16px 16px 4px 16px', padding: '12px 14px', fontSize: 13, color: '#fff', lineHeight: 1.5, marginBottom: 8, textAlign: 'right' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  sectionHeader: { textAlign: 'center', marginBottom: 56 },
  sectionTitle: { fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 12 },
  sectionDesc: { fontSize: 16, color: 'var(--gray-500)', maxWidth: 480, margin: '0 auto' },
  problemSection: { padding: '80px 0', background: '#fff', position: 'relative' },
  problemGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 },
  problemCard: { textAlign: 'center', cursor: 'default' },
  problemIcon: { fontSize: 40, marginBottom: 12 },
  problemTitle: { fontSize: 18, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 8 },
  problemDesc: { fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.6 },
  personaSection: { padding: '80px 0', background: 'var(--ivory)', position: 'relative' },
  personaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 },
  personaCard: {
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'var(--t-normal)',
    borderRadius: '40px 40px 16px 16px',
    background: '#fff',
    overflow: 'hidden',
  },
  personaCardAvatar: {
    width: 80,
    height: 80,
    borderRadius: '50% 50% 0 50%',
    transform: 'rotate(-45deg)',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid var(--gold)',
    boxShadow: 'var(--shadow-gold)',
  },
  personaCardName: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
  personaCardDesc: { fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.6 },
  featuresSection: { padding: '80px 0', background: '#fff', position: 'relative' },
  featuresGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  featureCard: { cursor: 'default' },
  featureIcon: { width: 52, height: 52, borderRadius: 14, fontSize: 24, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  featureTitle: { fontSize: 16, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 8 },
  featureDesc: { fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.6 },
  testimonialsSection: { padding: '80px 0', background: 'var(--ivory-warm)', position: 'relative' },
  testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1200, margin: '0 auto' },
  testimonialCard: { background: '#fff', padding: 32, borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-md)', transition: 'var(--t-normal)' },
  testimonialQuote: { fontSize: 15, fontStyle: 'italic', color: 'var(--gray-700)', marginBottom: 20, lineHeight: 1.6 },
  testimonialUser: { display: 'flex', alignItems: 'center', gap: 12 },
  testimonialAvatar: { width: 44, height: 44, borderRadius: '50%', background: 'var(--gold-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 },
  testimonialName: { fontSize: 15, fontWeight: 700, color: 'var(--navy-deep)' },
  testimonialRole: { fontSize: 12, color: 'var(--gray-500)' },
  ctaSection: { padding: '100px 24px', background: 'linear-gradient(135deg, var(--royal-maroon) 0%, var(--royal-burgundy) 50%, var(--peacock-deep) 100%)', textAlign: 'center', borderTop: '4px solid var(--gold)' },
  ctaContent: { maxWidth: 600, margin: '0 auto' },
  ctaTitle: { fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 },
  ctaDesc: { fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32 },
  footer: { background: 'var(--royal-burgundy)', padding: '50px 24px', borderTop: '2px solid var(--gold)' },
  footerInner: { maxWidth: 600, margin: '0 auto', textAlign: 'center' },
  footerBrand: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 },
  footerTagline: { fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 12 },
  footerCopy: { fontSize: 12, color: 'rgba(255,255,255,0.4)' },
};
