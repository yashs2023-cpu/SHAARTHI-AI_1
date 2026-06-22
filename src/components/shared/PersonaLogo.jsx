import React from 'react';

/**
 * PersonaLogo — Beautiful SVG-based logos for each Saarthi persona
 * Replaces generic emoji avatars with culturally themed illustrations
 */

// ─── Amma Logo: Lotus flower with home motif ───────────────────────────────
function AmmaLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle background */}
      <circle cx="40" cy="40" r="38" fill="#FFF0F5" stroke="#D4547A" strokeWidth="2"/>
      {/* Lotus petals (back) */}
      <ellipse cx="40" cy="30" rx="8" ry="14" fill="#F9A8C4" opacity="0.6" transform="rotate(-30 40 40)"/>
      <ellipse cx="40" cy="30" rx="8" ry="14" fill="#F9A8C4" opacity="0.6" transform="rotate(30 40 40)"/>
      <ellipse cx="40" cy="30" rx="8" ry="14" fill="#F9A8C4" opacity="0.6" transform="rotate(90 40 40)"/>
      <ellipse cx="40" cy="30" rx="8" ry="14" fill="#F9A8C4" opacity="0.6" transform="rotate(-90 40 40)"/>
      {/* Lotus petals (front) */}
      <ellipse cx="40" cy="28" rx="6" ry="12" fill="#D4547A" opacity="0.85" transform="rotate(0 40 40)"/>
      <ellipse cx="40" cy="28" rx="6" ry="12" fill="#D4547A" opacity="0.85" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="28" rx="6" ry="12" fill="#D4547A" opacity="0.85" transform="rotate(-60 40 40)"/>
      {/* Small house in center */}
      <rect x="34" y="40" width="12" height="10" rx="1" fill="#A83860"/>
      <polygon points="33,41 40,34 47,41" fill="#A83860"/>
      <rect x="37.5" y="44" width="5" height="6" rx="1" fill="#FFF0F5"/>
      {/* Center circle */}
      <circle cx="40" cy="40" r="4" fill="#FFB3CC"/>
      {/* Decorative dots */}
      <circle cx="23" cy="56" r="2" fill="#D4547A" opacity="0.4"/>
      <circle cx="57" cy="56" r="2" fill="#D4547A" opacity="0.4"/>
      <circle cx="40" cy="62" r="2" fill="#D4547A" opacity="0.4"/>
    </svg>
  );
}

// ─── Student Logo: Open book with graduation cap ────────────────────────────
function StudentLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <circle cx="40" cy="40" r="38" fill="#F5F3FF" stroke="#6C63FF" strokeWidth="2"/>
      {/* Open book */}
      <path d="M18 30 Q18 28 20 28 L39 30 L39 56 Q32 54 20 56 Q18 56 18 54 Z" fill="#A78BFA" opacity="0.7"/>
      <path d="M62 30 Q62 28 60 28 L41 30 L41 56 Q48 54 60 56 Q62 56 62 54 Z" fill="#6C63FF" opacity="0.7"/>
      {/* Book spine */}
      <rect x="38.5" y="29" width="3" height="27" rx="1" fill="#4F46E5"/>
      {/* Book lines */}
      <line x1="23" y1="35" x2="37" y2="35" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="23" y1="39" x2="37" y2="39" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="23" y1="43" x2="37" y2="43" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="43" y1="35" x2="57" y2="35" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="43" y1="39" x2="57" y2="39" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="43" y1="43" x2="57" y2="43" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      {/* Graduation cap */}
      <polygon points="40,17 54,22 40,27 26,22" fill="#4F46E5"/>
      <rect x="49.5" y="22" width="2.5" height="8" rx="1" fill="#6C63FF"/>
      <circle cx="50.75" cy="31" r="2.5" fill="#D4AF37"/>
      {/* Stars */}
      <circle cx="20" cy="20" r="1.5" fill="#6C63FF" opacity="0.5"/>
      <circle cx="60" cy="18" r="1.5" fill="#6C63FF" opacity="0.5"/>
      <circle cx="15" cy="60" r="1.5" fill="#A78BFA" opacity="0.5"/>
    </svg>
  );
}

// ─── Senior Logo: Warm sun with hands/care motif ────────────────────────────
function SeniorLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <circle cx="40" cy="40" r="38" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="2"/>
      {/* Sun rays */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
        <line
          key={i}
          x1="40" y1="40"
          x2={40 + 30 * Math.cos((angle * Math.PI) / 180)}
          y2={40 + 30 * Math.sin((angle * Math.PI) / 180)}
          stroke="#BAE6FD"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* Sun circle */}
      <circle cx="40" cy="40" r="16" fill="#0EA5E9"/>
      <circle cx="40" cy="40" r="13" fill="#38BDF8"/>
      {/* Heart in sun */}
      <path d="M40 46 C40 46 31 40 31 35 C31 32 33.5 30 36 30 C38 30 39 31 40 33 C41 31 42 30 44 30 C46.5 30 49 32 49 35 C49 40 40 46 40 46Z" fill="#fff" opacity="0.9"/>
      {/* Gentle wave decoration */}
      <path d="M15 60 Q22 56 29 60 Q36 64 43 60 Q50 56 57 60 Q62 63 65 60" stroke="#BAE6FD" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Small stars */}
      <circle cx="18" cy="25" r="2" fill="#38BDF8" opacity="0.5"/>
      <circle cx="62" cy="22" r="2" fill="#0EA5E9" opacity="0.5"/>
      <circle cx="20" cy="55" r="1.5" fill="#38BDF8" opacity="0.4"/>
      <circle cx="60" cy="57" r="1.5" fill="#38BDF8" opacity="0.4"/>
    </svg>
  );
}

// ─── Business Logo: Upward chart with Indian rupee ─────────────────────────
function BusinessLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <circle cx="40" cy="40" r="38" fill="#F0F4F8" stroke="#1B365D" strokeWidth="2"/>
      {/* Bar chart bars */}
      <rect x="16" y="52" width="10" height="14" rx="2" fill="#1B365D" opacity="0.5"/>
      <rect x="30" y="42" width="10" height="24" rx="2" fill="#1B365D" opacity="0.7"/>
      <rect x="44" y="32" width="10" height="34" rx="2" fill="#1B365D"/>
      {/* Upward arrow / growth line */}
      <path d="M18 55 L32 44 L46 33 L60 20" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="60" cy="20" r="3" fill="#D4AF37"/>
      {/* Rupee symbol */}
      <text x="54" y="58" fontSize="18" fontFamily="sans-serif" fontWeight="bold" fill="#D4AF37" textAnchor="middle">₹</text>
      {/* Decorative corner elements */}
      <circle cx="20" cy="20" r="2" fill="#D4AF37" opacity="0.4"/>
      <circle cx="22" cy="68" r="2" fill="#1B365D" opacity="0.3"/>
      <circle cx="62" cy="62" r="2" fill="#D4AF37" opacity="0.4"/>
    </svg>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────
const LOGOS = {
  amma:     AmmaLogo,
  student:  StudentLogo,
  senior:   SeniorLogo,
  business: BusinessLogo,
};

export default function PersonaLogo({ persona = 'amma', size = 80, style = {} }) {
  const Logo = LOGOS[persona] || AmmaLogo;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <Logo size={size} />
    </div>
  );
}

export { AmmaLogo, StudentLogo, SeniorLogo, BusinessLogo };
