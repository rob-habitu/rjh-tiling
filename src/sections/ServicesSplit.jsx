import Icon from '../components/Icon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const services = [
  'Bathroom Tiling',
  'Kitchen & Splashback Tiling',
  'Floor Tiling',
  'Wall Tiling',
  'Grouting & Repair Work',
  'Waterproofing',
];

const whys = [
  { icon: 'users', t: 'Customer Focused', d: 'We listen, we plan, and deliver exactly what you need.' },
  { icon: 'wrench', t: 'Experienced', d: 'Skilled tilers with attention to every detail.' },
  { icon: 'thumbs-up', t: 'Satisfaction Guaranteed', d: "We're not happy until you're happy." },
];

export default function ServicesSplit() {
  return (
    <section id="services" className="rjh-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ background: 'var(--bone-2)', padding: '72px 6vw 72px max(40px, calc((100vw - 1200px)/2 + 40px))' }}>
        <SectionHeader eyebrow="What We Do" title="Our Services" />
        <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'grid', gap: 16 }}>
          {services.map(s => (
            <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 17, color: 'var(--ink)' }}>
              <Icon name="check" size={18} color="var(--bronze)" stroke={2.6} /> {s}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ background: 'var(--charcoal)', padding: '72px max(40px, calc((100vw - 1200px)/2 + 40px)) 72px 6vw' }}>
        <SectionHeader eyebrow="The RJH Promise" title="Why Choose RJH Tiling?" dark />
        <p style={{ color: 'var(--on-dark-2)', fontSize: 16, lineHeight: 1.65, maxWidth: 460, margin: '0 0 30px' }}>
          With years of experience and a passion for perfection, we bring your vision to life with clean lines, durable finishes, and a commitment to quality you can see.
        </p>
        <div className="rjh-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {whys.map(w => (
            <div key={w.t}>
              <Icon name={w.icon} size={28} color="var(--bronze-soft)" />
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.06em',
                fontSize: 12.5,
                margin: '12px 0 6px',
                color: 'var(--on-dark)',
              }}>
                {w.t}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--on-dark-2)', lineHeight: 1.5 }}>{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
