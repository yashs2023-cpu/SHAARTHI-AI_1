import React, { useState } from 'react';
import { useToast } from '../../../hooks/useToast';
import { useLanguage } from '../../../contexts/LanguageContext';
import voiceService from '../../../services/voice';



// Rest of the component code remains the same...
const CATEGORIES = [
  { key: 'all',         label: 'All Schemes' },
  { key: 'agriculture', label: '🌾 Agriculture' },
  { key: 'health',      label: '🏥 Health' },
  { key: 'employment',  label: '👷 Employment' },
  { key: 'women',       label: '👩 Women' },
  { key: 'housing',     label: '🏠 Housing' },
  { key: 'energy',      label: '🔥 Energy' },
];

export default function AmmaSchemes() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const { showToast } = useToast();
  const { language, t } = useLanguage();
  const sT = t?.schemes || {};
   

  const handleListen = (scheme) => {
    // Use language-specific fields
    const nameKey = `${language}_name`;
    const benefitKey = `${language}_benefit`;
    const descKey = `${language}_description`;
    const eligKey = `${language}_eligibility`;
    const docsKey = `${language}_documents`;

    const name = scheme[nameKey] || scheme.name;
    const benefit = scheme[benefitKey] || scheme.benefit;
    const description = scheme[descKey] || scheme.description;
    const eligibility = scheme[eligKey] || scheme.eligibility;
    const documents = scheme[docsKey] || scheme.documents;

    const textToSpeak = `${name}. Benefits: ${benefit}. ${description}. Eligibility: ${eligibility}. Required documents are: ${documents.join(', ')}.`;
    showToast(`Listening to ${name}… 🔊`, 'info');
    voiceService.speak(textToSpeak, language, 'amma');
  };
  const currentSchemes = sT.defaultMock || [];
    

const filtered = currentSchemes.filter((s) => {
  const matchCat = category === 'all' || s.category === category;

  const nameKey = `${language}_name`;
  const schemeName = s[nameKey] || s.name;

  const matchSearch =
    !search ||
    schemeName.toLowerCase().includes(search.toLowerCase());

  return matchCat && matchSearch;
});

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>{sT.title}</h1>
          <p style={styles.subtitle}>{sT.subtitle}</p>
        </div>
      </div>

      {/* Search */}
      <input
        className="saarthi-input"
        placeholder={`🔍 ${sT.searchPlaceholder}`}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Category filters */}
      <div style={styles.filters}>
        {[
          { key: 'all',         label: sT.cats?.all || 'All Schemes' },
          { key: 'agriculture', label: sT.cats?.agriculture || '🌾 Agriculture' },
          { key: 'health',      label: sT.cats?.health || '🏥 Health' },
          { key: 'employment',  label: sT.cats?.employment || '👷 Employment' },
          { key: 'women',       label: sT.cats?.women || '👩 Women' },
          { key: 'housing',     label: sT.cats?.housing || '🏠 Housing' },
          { key: 'energy',      label: sT.cats?.energy || '🔥 Energy' },
        ].map(c => (
          <button
            key={c.key}
            style={{
              ...styles.filterBtn,
              background: category === c.key ? 'var(--saffron)' : '#fff',
              color: category === c.key ? '#fff' : 'var(--gray-700)',
              borderColor: category === c.key ? 'var(--saffron)' : 'var(--gray-200)',
            }}
            onClick={() => setCategory(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Schemes list */}
      <div style={styles.schemesList}>
        {filtered.map(s => {
          const nameKey = `${language}_name`;
          const benefitKey = `${language}_benefit`;
          const descKey = `${language}_description`;
          const eligKey = `${language}_eligibility`;
          const howKey = `${language}_howToApply`;
          const docsKey = `${language}_documents`;
          const deadKey = `${language}_deadline`;
          const tagKey = `${language}_tag`;

          return (
            <div key={s.id} className="saarthi-card" style={styles.schemeCard}>
              <div style={styles.schemeHeader} onClick={() => setExpanded(expanded === s.id ? null : s.id)}>
                <div style={styles.schemeLeft}>
                  <span style={styles.schemeIcon}>{s.icon}</span>
                  <div>
                    <div style={styles.schemeName}>{s[nameKey] || s.name}</div>
                    <span className="badge badge-saffron" style={{ marginTop: 4 }}>{s[tagKey] || s.tag}</span>
                  </div>
                </div>
                <div style={styles.schemeRight}>
                  <div style={styles.schemeBenefit}>{s[benefitKey] || s.benefit}</div>
                  <span style={{ fontSize: 18, color: 'var(--gray-400)' }}>
                    {expanded === s.id ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {expanded === s.id && (
                <div style={styles.schemeDetails} className="anim-up">
                  <p style={styles.schemeDesc}>{s[descKey] || s.description}</p>
                  <div style={styles.detailGrid}>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>✓ {sT.eligibility}</span>
                      <span>{s[eligKey] || s.eligibility}</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>📋 {sT.howToApply}</span>
                      <span>{s[howKey] || s.howToApply}</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>📅 {sT.deadline}</span>
                      <span>{s[deadKey] || s.deadline}</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>📄 {sT.documents}</span>
                      <span>{(s[docsKey] || s.documents).join(' · ')}</span>
                    </div>
                  </div>
                  <div style={styles.actions}>
                    <button
                      className="btn btn-sm"
                      style={{ background: 'var(--saffron)', color: '#fff', borderRadius: 'var(--r-full)' }}
                      onClick={() => window.open(s.applicationUrl, '_blank')}
                    >
                      📝 {sT.applyNow}
                    </button>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleListen(s)}
                    >
                      🔊 {sT.listen}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 20 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },

  filters: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  filterBtn: {
    padding: '7px 16px',
    borderRadius: 'var(--r-full)',
    border: '1.5px solid',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
    transition: 'var(--t-fast)',
  },

  schemesList: { display: 'flex', flexDirection: 'column', gap: 12 },
  schemeCard: { cursor: 'pointer' },
  schemeHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  schemeLeft: { display: 'flex', alignItems: 'flex-start', gap: 12 },
  schemeIcon: { fontSize: 28, flexShrink: 0 },
  schemeName: { fontSize: 15, fontWeight: 700, color: 'var(--navy-deep)' },
  schemeRight: { display: 'flex', alignItems: 'center', gap: 12 },
  schemeBenefit: { fontSize: 14, fontWeight: 700, color: 'var(--saffron)' },

  schemeDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTop: '1px solid var(--gray-100)',
  },
  schemeDesc: { fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 14 },
  detailGrid: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 },
  detailItem: {
    display: 'flex', flexDirection: 'column', gap: 2,
    padding: '10px 14px',
    background: 'var(--gray-50)',
    borderRadius: 'var(--r-md)',
    fontSize: 13,
    color: 'var(--gray-700)',
  },
  detailLabel: { fontWeight: 700, color: 'var(--gray-500)', fontSize: 11, textTransform: 'uppercase', marginBottom: 2 },
  actions: { display: 'flex', gap: 10, flexWrap: 'wrap' },
};