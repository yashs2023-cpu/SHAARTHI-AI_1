import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, changeLanguage, languages } = useLanguage();

  return (
    <div style={styles.container}>
      <span style={styles.icon}>🌐</span>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        style={styles.select}
        aria-label="Select Language"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.native}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '4px 8px',
    borderRadius: 'var(--r-full)',
    border: '1px solid var(--gray-200)',
    boxShadow: 'var(--shadow-sm)',
  },
  icon: {
    fontSize: '14px',
  },
  select: {
    border: 'none',
    background: 'transparent',
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--navy-deep)',
    cursor: 'pointer',
    outline: 'none',
    padding: '0 4px',
  },
};
