import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scamDetectionService from '../services/scamDetection';
import { useToast } from '../hooks/useToast';
import { useMode } from '../contexts/ModeContext';
import { useLanguage } from '../contexts/LanguageContext';

const TYPES = [
  { key: 'sms',      label: 'SMS',         icon: '📱', desc: 'Forward a suspicious SMS' },
  { key: 'whatsapp', label: 'WhatsApp',     icon: '💬', desc: 'Check a WhatsApp message' },
  { key: 'upi',      label: 'UPI / Payment',icon: '💳', desc: 'Verify a payment request' },
  { key: 'url',      label: 'URL / Link',   icon: '🔗', desc: 'Check if a link is safe' },
  { key: 'email',    label: 'Email',        icon: '📧', desc: 'Analyze a suspicious email' },
];

const RISK_CONFIG = {
  SAFE:      { color: '#10B981', bg: '#ECFDF5', icon: '✅', message: 'This looks safe' },
  LOW:       { color: '#10B981', bg: '#ECFDF5', icon: '✅', message: 'Likely safe' },
  MEDIUM:    { color: '#F59E0B', bg: '#FFFBEB', icon: '⚠️', message: 'Be cautious' },
  HIGH:      { color: '#F97316', bg: '#FFF7ED', icon: '🚨', message: 'High risk detected' },
  CRITICAL:  { color: '#EF4444', bg: '#FEF2F2', icon: '🔴', message: 'DO NOT click or respond' },
  SUSPICIOUS:{ color: '#F97316', bg: '#FFF7ED', icon: '⚠️', message: 'Suspicious link' },
  DANGEROUS: { color: '#EF4444', bg: '#FEF2F2', icon: '🔴', message: 'Dangerous link' },
};

export default function ScamShieldPage() {
  const [type, setType] = useState('sms');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { currentPersona } = useMode();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const sT = t?.scam || {};

  const backPath = currentPersona ? `/${currentPersona.key}` : '/choose';

  const analyze = async () => {
    if (!message.trim()) {
      showToast(sT.errorEmpty || 'Please paste a message or URL to check', 'warning');
      return;
    }
    setLoading(true);
    try {
      const res = await scamDetectionService.analyze(message, type, language);
      setResult(res);
    } catch (error) {
      showToast(sT.errorFailed || 'Analysis failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const riskLevel = result?.riskLevel || 'LOW';
  const config = RISK_CONFIG[riskLevel] || RISK_CONFIG.LOW;

  const safeSamples = [
    'Click here to get your free prize now! Limited time offer!',
    'Your UPI payment of ₹5000 is pending. Confirm OTP: 123456',
    'URGENT: Your bank account will be suspended. Verify at: bit.ly/bank',
    'Hello, I want to offer you a work-from-home job. Earn ₹50,000/week!',
  ];

  return (
    <div style={styles.page}>
      {/* Back button */}
      <button style={styles.backBtn} onClick={() => navigate(backPath)}>
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.shieldIcon}>🛡️</div>
        <div>
          <h1 style={styles.title}>{sT.title || 'Scam Shield'}</h1>
          <p style={styles.subtitle}>
            {sT.subtitle || "India's AI-powered fraud detector — check any suspicious message, link or payment"}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={styles.statsBar}>
        {[['2.5Cr+', 'Scams blocked'], ['₹800Cr+', 'Fraud prevented'], ['4.8★', 'Trust rating']].map(([num, label]) => (
          <div key={label} style={styles.statItem}>
            <div style={styles.statNum}>{num}</div>
            <div style={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div style={styles.mainGrid}>
        {/* Left panel — input */}
        <div style={styles.leftPanel}>
          {/* Type selector */}
          <div className="saarthi-card">
            <h3 style={styles.cardTitle}>{sT.whatToCheck || 'What do you want to check?'}</h3>
            <div style={styles.typeGrid}>
              {TYPES.map(t => (
                <button
                  key={t.key}
                  style={{
                    ...styles.typeBtn,
                    background: type === t.key ? '#FEF2F2' : '#fff',
                    borderColor: type === t.key ? '#EF4444' : 'var(--gray-200)',
                    color: type === t.key ? '#EF4444' : 'var(--gray-700)',
                  }}
                  onClick={() => { setType(t.key); setResult(null); }}
                >
                  <span style={{ fontSize: 22 }}>{t.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{sT.types?.[t.key] || t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message input */}
          <div className="saarthi-card">
            <h3 style={styles.cardTitle}>
              {TYPES.find(t => t.key === type)?.icon} {TYPES.find(t => t.key === type)?.desc}
            </h3>
            <textarea
              className="saarthi-input"
              style={{ minHeight: 120, resize: 'vertical' }}
              placeholder={sT.placeholder || 'Paste the suspicious message here...'}
              value={message}
              onChange={e => setMessage(e.target.value)}
              aria-label="Message to check"
            />
            <button
              className="btn"
              style={{
                width: '100%', marginTop: 12,
                background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                color: '#fff', borderRadius: 'var(--r-full)',
                fontSize: 15, fontWeight: 700, padding: '14px',
              }}
              onClick={analyze}
              disabled={loading}
            >
              {loading ? (sT.checking || '🔍 Analyzing…') : `🔍 ${sT.checkBtn || 'Check for Scam'}`}
            </button>
            <button
              style={styles.clearBtn}
              onClick={() => { setMessage(''); setResult(null); }}
            >
              Clear
            </button>
          </div>

          {/* Sample messages */}
          <div className="saarthi-card">
            <h3 style={{ ...styles.cardTitle, marginBottom: 10 }}>
              📋 Try these examples
            </h3>
            <div style={styles.samples}>
              {safeSamples.map((s, i) => (
                <button
                  key={i}
                  style={styles.sampleBtn}
                  onClick={() => { setMessage(s); setResult(null); }}
                >
                  {s.slice(0, 55)}…
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — result */}
        <div style={styles.rightPanel}>
          {!result && !loading && (
            <div className="saarthi-card" style={styles.emptyState}>
              <div style={styles.emptyIcon}>🔍</div>
              <h3 style={styles.emptyTitle}>Ready to check</h3>
              <p style={styles.emptyDesc}>
                Paste a suspicious message, link, or UPI request above and click Check for Scam.
              </p>
            </div>
          )}

          {result && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Risk indicator */}
              <div style={{ ...styles.riskCard, background: config.bg, border: `2px solid ${config.color}30` }}>
                <div style={styles.riskTop}>
                  <span style={{ fontSize: 52 }}>{config.icon}</span>
                  <div>
                    <div style={{ ...styles.riskLevel, color: config.color }}>{riskLevel}</div>
                    <div style={{ fontSize: 15, color: config.color, fontWeight: 600 }}>{config.message}</div>
                  </div>
                  <div style={styles.riskScore}>
                    <div style={{ ...styles.riskNum, color: config.color }}>{result.riskScore}%</div>
                    <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Risk Score</div>
                  </div>
                </div>

                {/* Score bar */}
                <div style={styles.scoreBar}>
                  <div style={{
                    ...styles.scoreFill,
                    width: `${result.riskScore}%`,
                    background: `linear-gradient(90deg, #10B981, ${config.color})`,
                  }} />
                </div>
              </div>

              {/* Recommendation */}
              <div className="saarthi-card">
                <h4 style={styles.sectionLabel}>💡 What should you do?</h4>
                <p style={styles.recommendation}>{result.recommendation}</p>
              </div>

              {/* Detected threats */}
              {result.detectedScams?.length > 0 && (
                <div className="saarthi-card">
                  <h4 style={styles.sectionLabel}>🚨 Threats Detected</h4>
                  <div style={styles.threatsList}>
                    {result.detectedScams.map((scam, i) => (
                      <div key={i} style={styles.threatItem}>
                        <span style={styles.threatIcon}>⚠️</span>
                        <div>
                          <div style={styles.threatType}>{scam.type.replace(/_/g, ' ').toUpperCase()}</div>
                          <div style={styles.threatDesc}>{scam.description}</div>
                        </div>
                        <span className={`badge badge-${scam.risk === 'high' ? 'danger' : 'warning'}`}>
                          {scam.risk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suspicious indicators (URL) */}
              {result.suspiciousIndicators?.length > 0 && (
                <div className="saarthi-card">
                  <h4 style={styles.sectionLabel}>🔍 Suspicious Indicators</h4>
                  {result.suspiciousIndicators.map((ind, i) => (
                    <div key={i} style={styles.indicator}>⚠️ {ind}</div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div style={styles.resultActions}>
                <button
                  className="btn btn-sm"
                  style={{ background: '#EF4444', color: '#fff', borderRadius: 'var(--r-full)' }}
                  onClick={() => showToast('Reported to authorities! 🚨', 'success')}
                >
                  🚨 Report Scam
                </button>
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() => setResult(null)}
                >
                  Check Another
                </button>
              </div>
            </div>
          )}

          {/* Safety tips */}
          <div className="saarthi-card">
            <h3 style={styles.cardTitle}>🛡️ Safety Rules</h3>
            <div style={styles.safetyTips}>
              {scamDetectionService.getScamTips(type).map((tip, i) => (
                <div key={i} style={styles.safetyTip}>{tip}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: '28px 32px', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 20 },

  backBtn: {
    background: 'none', border: 'none', color: 'var(--gray-500)',
    cursor: 'pointer', fontSize: 14, fontWeight: 600, alignSelf: 'flex-start',
    padding: '6px 0',
  },

  header: { display: 'flex', alignItems: 'center', gap: 16 },
  shieldIcon: {
    width: 64, height: 64, borderRadius: 18,
    background: 'linear-gradient(135deg, #FEF2F2, #FECACA)',
    fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, border: '2px solid rgba(239,68,68,0.2)',
  },
  title: { fontSize: 26, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.5 },

  statsBar: {
    background: 'linear-gradient(135deg, var(--navy-deep), var(--navy))',
    borderRadius: 'var(--r-xl)', padding: '16px 28px',
    display: 'flex', justifyContent: 'space-around', gap: 16,
  },
  statItem: { textAlign: 'center' },
  statNum: { fontSize: 22, fontWeight: 800, color: '#fff' },
  statLabel: { fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500 },

  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 20,
    alignItems: 'flex-start',
  },
  leftPanel: { display: 'flex', flexDirection: 'column', gap: 14 },
  rightPanel: { display: 'flex', flexDirection: 'column', gap: 14 },

  cardTitle: { fontSize: 15, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 12 },
  typeGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: 8 },
  typeBtn: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    padding: '12px 8px', borderRadius: 'var(--r-lg)',
    border: '1.5px solid', cursor: 'pointer', transition: 'var(--t-fast)',
  },
  clearBtn: {
    background: 'none', border: 'none', color: 'var(--gray-400)',
    fontSize: 13, cursor: 'pointer', marginTop: 6, display: 'block', textAlign: 'center', width: '100%',
  },

  samples: { display: 'flex', flexDirection: 'column', gap: 6 },
  sampleBtn: {
    background: 'var(--gray-50)', border: '1px solid var(--gray-200)',
    borderRadius: 'var(--r-md)', padding: '8px 12px',
    fontSize: 12, color: 'var(--gray-600)', cursor: 'pointer',
    textAlign: 'left', lineHeight: 1.4, transition: 'var(--t-fast)',
  },

  emptyState: { textAlign: 'center', padding: '40px 24px' },
  emptyIcon: { fontSize: 56, marginBottom: 14 },
  emptyTitle: { fontSize: 18, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 8 },
  emptyDesc: { fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.6 },

  riskCard: { borderRadius: 'var(--r-xl)', padding: '20px 24px' },
  riskTop: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 },
  riskLevel: { fontSize: 22, fontWeight: 800, lineHeight: 1, marginBottom: 3 },
  riskScore: { marginLeft: 'auto', textAlign: 'center' },
  riskNum: { fontSize: 30, fontWeight: 800, lineHeight: 1 },
  scoreBar: { height: 8, background: 'rgba(0,0,0,0.1)', borderRadius: 4, overflow: 'hidden' },
  scoreFill: { height: '100%', borderRadius: 4, transition: 'width 0.5s ease' },

  sectionLabel: { fontSize: 13, fontWeight: 700, color: 'var(--gray-600)', marginBottom: 8, textTransform: 'uppercase' },
  recommendation: { fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.6 },

  threatsList: { display: 'flex', flexDirection: 'column', gap: 8 },
  threatItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', background: 'var(--gray-50)', borderRadius: 'var(--r-md)',
  },
  threatIcon: { fontSize: 18, flexShrink: 0 },
  threatType: { fontSize: 12, fontWeight: 700, color: 'var(--gray-700)' },
  threatDesc: { fontSize: 12, color: 'var(--gray-500)', marginTop: 1 },

  indicator: {
    padding: '8px 12px', background: '#FFFBEB',
    borderRadius: 'var(--r-md)', fontSize: 13,
    color: '#92400E', marginBottom: 6,
  },

  resultActions: { display: 'flex', gap: 10 },

  safetyTips: { display: 'flex', flexDirection: 'column', gap: 8 },
  safetyTip: { fontSize: 13.5, color: 'var(--gray-700)', lineHeight: 1.5 },
};
