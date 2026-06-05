import { useState } from 'react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const styles = [
  { img: 'work-grey-subway', t: 'Classic & Timeless', d: 'Elegant, traditional finishes that never go out of style.' },
  { img: 'work-beige-bathroom', t: 'Modern & Minimal', d: 'Clean lines and contemporary looks for a sleek finish.' },
  { img: 'work-natural-stone', t: 'Natural Stone', d: 'Premium natural stone for a unique, high-end feel.' },
  { img: 'work-victorian-floor', t: 'Mosaic & Feature', d: 'Eye-catching patterns for standout designs.' },
  { img: 'work-teal-shower', t: 'Bold & Feature', d: 'Statement colour and gloss for the elements.' },
];

function StyleCard({ img, t, d }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '3/4', background: 'var(--bone-3)' }}>
        <img
          src={`/assets/${img}.jpg`}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: h ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform .5s var(--ease)',
          }}
        />
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        fontSize: 13,
        margin: '14px 0 5px',
        color: 'var(--ink)',
      }}>
        {t}
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>{d}</div>
    </div>
  );
}

export default function StylesGrid() {
  return (
    <section id="styles" className="rjh-section" style={{ background: 'var(--bone)', padding: '80px 0' }}>
      <div className="rjh-wrap" style={WRAP}>
        <SectionHeader eyebrow="Our Specialisms" title="Tiling Styles We Specialise In" align="center" />
        <div
          className="rjh-styles-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, marginTop: 44 }}
        >
          {styles.map(s => <StyleCard key={s.t} {...s} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Button>View Our Work</Button>
        </div>
      </div>
    </section>
  );
}
