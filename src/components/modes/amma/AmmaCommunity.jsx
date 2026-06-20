import React, { useState } from 'react';
import { useToast } from '../../../hooks/useToast';

const DEFAULT_GROUPS = [
  {
    id: 1, name: 'Mahila Mandal — West Ward',
    leader: 'Mrs. Lakshmi Sharma', members: 45,
    focus: 'Women Empowerment & Skill Training',
    meetings: 'Every Tuesday 2 PM',
    location: 'Community Center, Block A',
    fee: '₹50/month',
    activities: ['Stitching Classes', 'Financial Literacy', 'Health Camps'],
    phone: '9876543210',
    color: '#FF9933',
  },
  {
    id: 2, name: 'Self Help Group — Craft Makers',
    leader: 'Mrs. Priya Verma', members: 32,
    focus: 'Handmade Products & Income Generation',
    meetings: 'Every Saturday 10 AM',
    location: 'Local Hall, Main Street',
    fee: '₹100 one-time + ₹25/month',
    activities: ['Pottery', 'Weaving', 'Embroidery', 'Market Access'],
    phone: '9876543211',
    color: '#10B981',
  },
  {
    id: 3, name: 'Joint Liability Group — Savings Circle',
    leader: 'Mrs. Anjali Singh', members: 28,
    focus: 'Microfinance & Group Savings',
    meetings: 'Every 1st of month',
    location: 'Bank Office, Main Road',
    fee: '₹100 monthly savings',
    activities: ['Savings Pool', 'Micro-loans', 'Business Training'],
    phone: '9876543212',
    color: '#6C63FF',
  },
];
import { useLanguage } from '../../../contexts/LanguageContext';

export default function AmmaCommunity() {
  const [view, setView] = useState('groups');
  const [groups, setGroups] = useState(DEFAULT_GROUPS);
  const { showToast } = useToast();
  const { t } = useLanguage();
  const cT = t?.community || {};

  // Form State
  const [formName, setFormName] = useState('');
  const [formFocus, setFormFocus] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formPhone, setFormPhone] = useState('');

  const handleCreateGroup = () => {
    if (!formName.trim() || !formFocus.trim()) {
      showToast('Please fill out the Group Name and Focus Area', 'warning');
      return;
    }

    const newGroup = {
      id: Date.now(),
      name: formName,
      leader: 'You', // Assuming the current user is the leader
      members: 1,
      focus: formFocus,
      meetings: 'TBD',
      location: formLocation || 'Local Area',
      fee: 'Free',
      activities: ['New Group Activity'],
      phone: formPhone || '-',
      color: '#0EA5E9', // Default distinct color
    };

    setGroups([newGroup, ...groups]);
    showToast(`${formName} created successfully! 🎊`, 'success');
    
    // Reset and switch view
    setFormName('');
    setFormFocus('');
    setFormLocation('');
    setFormPhone('');
    setView('groups');
  };

  const activeGroups = cT.defaultMock || groups;

  return (
    <div style={styles.page}>
      <div>
        <h1 style={styles.title}>{cT.title}</h1>
        <p style={styles.subtitle}>{cT.subtitle}</p>
      </div>

      <div style={styles.tabRow}>
        {[['groups', cT.browse || 'Browse Groups'], ['create', cT.start || 'Start New Group']].map(([key, label]) => (
          <button
            key={key}
            style={{
              ...styles.tab,
              background: view === key ? 'var(--saffron)' : '#fff',
              color: view === key ? '#fff' : 'var(--gray-600)',
              borderColor: view === key ? 'var(--saffron)' : 'var(--gray-200)',
            }}
            onClick={() => setView(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {view === 'groups' && (
        <div style={styles.groupsList}>
          {activeGroups.map(g => (
            <div key={g.id} className="saarthi-card" style={{ borderLeft: `4px solid ${g.color}` }}>
              <div style={styles.groupHeader}>
                <div>
                  <h3 style={styles.groupName}>{g.name}</h3>
                  <p style={styles.groupLeader}>👤 {g.leader}</p>
                </div>
                <div style={{ ...styles.memberBadge, background: g.color }}>
                  {g.members} {cT.members}
                </div>
              </div>
              <p style={styles.groupFocus}>{g.focus}</p>
              <div style={styles.groupMeta}>
                <span>📅 {g.meetings}</span>
                <span>📍 {g.location}</span>
                <span>💰 {g.fee}</span>
              </div>
              <div style={styles.activityTags}>
                {g.activities.map(a => (
                  <span key={a} style={styles.activityTag}>{a}</span>
                ))}
              </div>
              <div style={styles.groupActions}>
                <button
                  className="btn btn-sm"
                  style={{ background: g.color, color: '#fff', borderRadius: 'var(--r-full)', flex: 1 }}
                  onClick={() => showToast(`Joined ${g.name}! 🎉`, 'success')}
                >
                  📝 {cT.join}
                </button>
                <button
                  className="btn btn-sm"
                  style={{ background: '#fff', border: `1.5px solid ${g.color}`, color: g.color, borderRadius: 'var(--r-full)' }}
                  onClick={() => showToast(`Calling ${g.leader}… 📞`, 'info')}
                >
                  📞 {cT.contact}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'create' && (
        <div className="saarthi-card">
          <h3 style={styles.formTitle}>{cT.formTitle}</h3>
          <p style={styles.formDesc}>{cT.formDesc}</p>
          <div style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>{cT.gName}</label>
              <input 
                className="saarthi-input" 
                placeholder="e.g., Women's Stitching Group" 
                value={formName}
                onChange={e => setFormName(e.target.value)}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>{cT.focus}</label>
              <input 
                className="saarthi-input" 
                placeholder="e.g., Skill training, Savings, Crafts" 
                value={formFocus}
                onChange={e => setFormFocus(e.target.value)}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>{cT.loc}</label>
              <input 
                className="saarthi-input" 
                placeholder="Your locality or address" 
                value={formLocation}
                onChange={e => setFormLocation(e.target.value)}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>{cT.phone}</label>
              <input 
                className="saarthi-input" 
                placeholder="+91 XXXXX XXXXX" 
                value={formPhone}
                onChange={e => setFormPhone(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 4 }}
              onClick={handleCreateGroup}
            >
              {cT.createBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { display: 'flex', flexDirection: 'column', gap: 20 },
  title: { fontSize: 22, fontWeight: 800, color: 'var(--navy-deep)', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'var(--gray-500)' },

  tabRow: { display: 'flex', gap: 10 },
  tab: {
    padding: '9px 22px', borderRadius: 'var(--r-full)',
    border: '1.5px solid', cursor: 'pointer',
    fontSize: 13, fontWeight: 600, transition: 'var(--t-fast)',
  },

  groupsList: { display: 'flex', flexDirection: 'column', gap: 14 },
  groupHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  groupName: { fontSize: 15, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 2 },
  groupLeader: { fontSize: 12, color: 'var(--gray-500)' },
  memberBadge: {
    color: '#fff', padding: '5px 12px', borderRadius: 'var(--r-full)',
    fontSize: 12, fontWeight: 700,
  },
  groupFocus: { fontSize: 13, color: 'var(--gray-600)', marginBottom: 10 },
  groupMeta: {
    display: 'flex', flexWrap: 'wrap', gap: 12,
    fontSize: 12, color: 'var(--gray-500)', marginBottom: 10,
  },
  activityTags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 },
  activityTag: {
    background: 'var(--ivory)', border: '1px solid var(--saffron-glow)',
    color: 'var(--saffron-dark)', padding: '4px 10px',
    borderRadius: 'var(--r-full)', fontSize: 12, fontWeight: 600,
  },
  groupActions: { display: 'flex', gap: 8 },

  formTitle: { fontSize: 18, fontWeight: 700, color: 'var(--navy-deep)', marginBottom: 6 },
  formDesc: { fontSize: 14, color: 'var(--gray-500)', marginBottom: 20, lineHeight: 1.6 },
  form: { display: 'flex', flexDirection: 'column', gap: 14 },
  field: { display: 'flex', flexDirection: 'column', gap: 5 },
  label: { fontSize: 13, fontWeight: 600, color: 'var(--gray-700)' },
};
