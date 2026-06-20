import React, { useState } from 'react';
import { useToast } from '../../../hooks/useToast';
import { useLanguage } from '../../../contexts/LanguageContext';
import voiceService from '../../../services/voice';

const SCHEMES = [
  {
    id: 1, category: 'agriculture', icon: '🌾',
    name: 'PM-Kisan Samman Nidhi',
    benefit: '₹6,000/year',
    description: 'Direct income support to farmers for seeds, fertilizers, and equipment.',
    eligibility: 'Small & marginal farmers with up to 2 hectares',
    howToApply: 'Online at pmkisan.gov.in or nearest CSC center',
    documents: ['Aadhaar Card', 'Bank Passbook', 'Land Certificate'],
    deadline: 'Ongoing',
    tag: 'Agriculture',
    applicationUrl: 'https://pmkisan.gov.in/',
  },
  {
    id: 2, category: 'energy', icon: '🔥',
    name: 'PM Ujjwala Yojana',
    benefit: 'Free LPG + ₹1,600 subsidy',
    description: 'Free LPG cooking gas connections to BPL households.',
    eligibility: 'BPL families without LPG connection',
    howToApply: 'Visit nearest LPG gas agency with documents',
    documents: ['Aadhaar', 'BPL Certificate', 'Passport Photo'],
    deadline: 'Ongoing',
    tag: 'Energy',
    applicationUrl: 'https://www.pmuy.gov.in/',
  },
  {
    id: 3, category: 'health', icon: '🏥',
    name: 'Ayushman Bharat',
    benefit: '₹5 Lakh health insurance',
    description: 'Free hospitalization and surgery coverage for vulnerable families.',
    eligibility: 'BPL and APL families on SECC database',
    howToApply: 'Contact nearest ASHA worker or pmjay.gov.in',
    documents: ['Aadhaar', 'Ration Card', 'PMJAY Card'],
    deadline: 'Ongoing',
    tag: 'Health',
    applicationUrl: 'https://pmjay.gov.in/',
  },
  {
    id: 4, category: 'employment', icon: '👷',
    name: 'MGNREGA',
    benefit: '100 days work @ ₹300-350/day',
    description: 'Guaranteed rural employment for unskilled workers.',
    eligibility: 'Rural residents 18+ willing to do manual work',
    howToApply: 'Register at Gram Panchayat office',
    documents: ['ID Proof', 'Address Proof', 'Job Card Application'],
    deadline: 'Ongoing',
    tag: 'Employment',
    applicationUrl: 'https://nrega.nic.in/',
  },
  {
    id: 5, category: 'women', icon: '👩',
    name: 'PM Matru Vandana Yojana',
    benefit: '₹5,000 cash assistance',
    description: 'Maternity benefit for pregnant women and nursing mothers.',
    eligibility: 'Pregnant/nursing women, 1st child, 19+ years',
    howToApply: 'Register at anganwadi center or health facility',
    documents: ['Aadhaar', 'MCP Card', 'Bank Account'],
    deadline: 'Within 270 days of pregnancy',
    tag: 'Women',
    applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana',
  },
  {
    id: 6, category: 'housing', icon: '🏠',
    name: 'PM Awas Yojana (Gramin)',
    benefit: '₹1.2 Lakh housing assistance',
    description: 'Affordable housing for rural BPL families.',
    eligibility: 'Homeless or kutcha house families in rural areas',
    howToApply: 'Register via Gram Panchayat or pmayg.nic.in',
    documents: ['Aadhaar', 'BPL Certificate', 'Land Ownership Proof'],
    deadline: 'Ongoing',
    tag: 'Housing',
    applicationUrl: 'https://pmayg.nic.in/',
  },
];

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
    const textToSpeak = `${scheme.name}. Benefits: ${scheme.benefit}. ${scheme.description}. Eligibility: ${scheme.eligibility}. Required documents are: ${scheme.documents.join(', ')}.`;
    showToast(`Listening to ${scheme.name}… 🔊`, 'info');
    voiceService.speak(textToSpeak, language, 'amma');
  };

  const currentSchemes = sT.defaultMock || SCHEMES;

  const filtered = currentSchemes.filter(s => {
    const matchCat = category === 'all' || s.category === category;
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
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
        {filtered.map(s => (
          <div key={s.id} className="saarthi-card" style={styles.schemeCard}>
            <div style={styles.schemeHeader} onClick={() => setExpanded(expanded === s.id ? null : s.id)}>
              <div style={styles.schemeLeft}>
                <span style={styles.schemeIcon}>{s.icon}</span>
                <div>
                  <div style={styles.schemeName}>{s.name}</div>
                  <span className="badge badge-saffron" style={{ marginTop: 4 }}>{s.tag}</span>
                </div>
              </div>
              <div style={styles.schemeRight}>
                <div style={styles.schemeBenefit}>{s.benefit}</div>
                <span style={{ fontSize: 18, color: 'var(--gray-400)' }}>
                  {expanded === s.id ? '▲' : '▼'}
                </span>
              </div>
            </div>

            {expanded === s.id && (
              <div style={styles.schemeDetails} className="anim-up">
                <p style={styles.schemeDesc}>{s.description}</p>
                <div style={styles.detailGrid}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>✓ {sT.eligibility}</span>
                    <span>{s.eligibility}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>📋 {sT.howToApply}</span>
                    <span>{s.howToApply}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>📅 {sT.deadline}</span>
                    <span>{s.deadline}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>📄 {sT.documents}</span>
                    <span>{s.documents.join(' · ')}</span>
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
        ))}
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
