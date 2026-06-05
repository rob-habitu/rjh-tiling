import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const imgs = ['work-grey-subway', 'work-victorian-floor', 'work-beige-bathroom', 'work-patterned-floor'];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bone)', padding: '80px 0' }}>
      <div style={WRAP}>
        <SectionHeader eyebrow="Recent Work" title="Recent Projects" align="center" />
        <div
          className="rjh-proj-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 44 }}
        >
          {imgs.map(i => (
            <div key={i} style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '1/1', background: 'var(--bone-3)' }}>
              <img
                src={`/assets/${i}.jpg`}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Button variant="ghost">View More Projects</Button>
        </div>
      </div>
    </section>
  );
}
