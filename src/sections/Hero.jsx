import Button from '../components/Button.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function Hero({ onQuote }) {
  return (
    <section id="home" style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img
        src="/assets/work-beige-bathroom.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(28,26,22,.92) 0%, rgba(28,26,22,.7) 42%, rgba(28,26,22,.15) 100%)' }}></div>
      <div style={{ ...WRAP, position: 'relative', width: '100%' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: 'clamp(48px,7vw,92px)',
          lineHeight: .9,
          margin: 0,
          color: '#fff',
        }}>
          Beautifully tiled.<br /><span style={{ color: 'var(--bronze-soft)' }}>Built to last.</span>
        </h1>
        <p style={{
          color: 'rgba(243,238,232,.9)',
          fontSize: 'clamp(16px,1.5vw,20px)',
          maxWidth: 460,
          margin: '22px 0 32px',
          lineHeight: 1.6,
        }}>
          Professional tiling for bathrooms, kitchens, floors, splashbacks and more.
        </p>
        <Button onClick={onQuote} style={{ padding: '17px 32px', fontSize: 14 }}>Get a Free Quote</Button>
      </div>
    </section>
  );
}
