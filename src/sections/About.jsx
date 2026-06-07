import SectionHeader from '../components/SectionHeader.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const stats = [
  { n: '10+', l: 'Years Experience' },
  { n: '500+', l: 'Projects Completed' },
  { n: '100%', l: 'Satisfaction Focused' },
];

export default function About() {
  return (
    <section id="about" className="rjh-section" style={{ background: 'var(--bone-2)', padding: '88px 0' }}>
      <div
        className="rjh-about-grid rjh-wrap"
        style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}
      >
        <div style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '4/5' }}>
          <img
            src="/assets/work-patterned-floor.jpg"
            alt="RJH tiling work"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <SectionHeader eyebrow="About RJH Tiling" title="Luton's tiling specialists." />
          <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.7, margin: '0 0 18px', maxWidth: 520 }}>
            Founded and run by Richard Horwood, RJH Tiling is an independent tiling and stonework company serving Luton and the surrounding areas. We specialise in bathrooms, kitchens, flooring, and external tiling &amp; stonework — bringing precision, clean lines and a lasting finish to every project.
          </p>
          <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.7, margin: '0 0 30px', maxWidth: 520 }}>
            From concept to completion, we take pride in delivering flawless results tailored to your space. We&apos;re not happy until you&apos;re happy.
          </p>
          <div className="rjh-stats" style={{ display: 'flex', gap: 40 }}>
            {stats.map(s => (
              <div key={s.l}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 44,
                  lineHeight: 1,
                  color: 'var(--bronze)',
                }}>
                  {s.n}
                </div>
                <div style={{
                  fontSize: 12.5,
                  textTransform: 'uppercase',
                  letterSpacing: '.1em',
                  color: 'var(--ink-2)',
                  fontWeight: 600,
                  marginTop: 8,
                }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
