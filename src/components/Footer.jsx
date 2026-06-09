import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { scrollToId } from './Nav.jsx';

const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Styles', id: 'styles' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const col = { display: 'flex', flexDirection: 'column', gap: 9 };
  const head = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    color: 'var(--bronze-soft)',
    marginBottom: 6,
  };
  const link = {
    color: 'var(--on-dark-2)',
    fontSize: 14,
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 0,
    textAlign: 'left',
    padding: 0,
    fontFamily: 'var(--font-body)',
  };

  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--on-dark)' }}>
      <div
        className="rjh-foot-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 24px 28px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.2fr 1.2fr',
          gap: 40,
        }}
      >
        <div>
          <Logo variant="dark" size={30} />
          <p style={{ color: 'var(--on-dark-2)', fontSize: 14, marginTop: 16, maxWidth: 240, lineHeight: 1.6 }}>
            Quality tiling. Built to last. Serving Luton &amp; surrounding areas.
          </p>
        </div>

        <div style={col}>
          <div style={head}>Quick Links</div>
          {NAV.map(n => (
            <button key={n.id} onClick={() => scrollToId(n.id)} style={link}>{n.label}</button>
          ))}
        </div>

        <div style={col}>
          <div style={head}>Our Services</div>
          {['Bathroom Tiling', 'Kitchen & Splashback', 'Floor Tiling', 'Wall Tiling', 'Grouting & Repair', 'Waterproofing'].map(l => (
            <button key={l} onClick={() => scrollToId('services')} style={link}>{l}</button>
          ))}
        </div>

        <div style={col}>
          <div style={head}>Contact Us</div>
          <span style={{ ...link, display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'default' }}>
            <Icon name="phone" size={15} color="var(--bronze-soft)" />
            07921 843 606
          </span>
          <span style={{ ...link, display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'default' }}>
            <Icon name="mail" size={15} color="var(--bronze-soft)" />
            quote@rjhtiling.co.uk
          </span>
          <span style={{ ...link, display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'default' }}>
            <Icon name="map-pin" size={15} color="var(--bronze-soft)" />
            Luton &amp; surrounding areas
          </span>
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            <a href="https://www.instagram.com/rjhtiling" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, border: '1px solid rgba(243,238,232,.25)', borderRadius: 2, display: 'grid', placeItems: 'center', color: 'var(--on-dark)' }}>
              <Icon name="instagram" size={16} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(243,238,232,.12)' }}>
        <div
          className="rjh-foot-bar"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            fontSize: 12,
            color: 'var(--on-dark-2)',
            letterSpacing: '.03em',
          }}
        >
          <span>© 2026 RJH Tiling. All Rights Reserved.</span>
          <span style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'var(--on-dark-2)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--on-dark-2)', textDecoration: 'none' }}>Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
