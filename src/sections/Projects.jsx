import { useState } from 'react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

// All available project photos. The first INITIAL are shown by default;
// "View More Projects" reveals the rest.
const all = [
  'work-grey-subway',
  'work-victorian-floor',
  'work-beige-bathroom',
  'work-patterned-floor',
  'work-teal-shower',
  'work-natural-stone',
];
const INITIAL = 4;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? all : all.slice(0, INITIAL);

  return (
    <section id="projects" className="rjh-section" style={{ background: 'var(--bone)', padding: '80px 0' }}>
      <div className="rjh-wrap" style={WRAP}>
        <SectionHeader eyebrow="Recent Work" title="Recent Projects" align="center" />
        <div
          className="rjh-proj-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 44 }}
        >
          {visible.map(i => (
            <div key={i} style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '1/1', background: 'var(--bone-3)' }}>
              <img
                src={`/assets/${i}.jpg`}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        {all.length > INITIAL && (
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Button variant="ghost" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Show Less' : 'View More Projects'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
