import Icon from '../components/Icon.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const items = [
  { icon: 'layout-grid', t: 'Expert Tiling', d: 'Precision tiling with a keen eye for detail.' },
  { icon: 'shield-check', t: 'Quality Materials', d: 'We use only high-quality materials for lasting results.' },
  { icon: 'home', t: 'All Areas', d: 'Bathrooms, kitchens, floors, splashbacks and more.' },
  { icon: 'award', t: 'Reliable & Professional', d: 'On time, on budget, every time.' },
];

export default function FeatureRow() {
  return (
    <section style={{ background: 'var(--bone)' }}>
      <div
        className="rjh-feature-grid"
        style={{ ...WRAP, padding: '54px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
      >
        {items.map((it, i) => (
          <div key={it.t} style={{ textAlign: 'center', padding: '0 26px', borderLeft: i ? '1px solid var(--line)' : 0 }}>
            <Icon name={it.icon} size={36} color="var(--bronze)" />
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.08em',
              fontSize: 14,
              margin: '14px 0 8px',
              color: 'var(--ink)',
            }}>
              {it.t}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
