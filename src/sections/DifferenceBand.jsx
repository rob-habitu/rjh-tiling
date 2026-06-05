import Button from '../components/Button.jsx';

export default function DifferenceBand({ onQuote }) {
  return (
    <section className="rjh-split-diff" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', background: 'var(--charcoal)' }}>
      <div style={{ minHeight: 320, overflow: 'hidden' }}>
        <img
          src="/assets/work-teal-shower.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="rjh-diff-body" style={{
        padding: '72px max(40px, calc((100vw - 1200px)/2 + 40px)) 72px 6vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: 'clamp(28px,3.2vw,42px)',
          lineHeight: 1,
          margin: 0,
          color: 'var(--bronze-soft)',
        }}>
          Quality. Precision. Finish.<br />
          <span style={{ color: 'var(--on-dark)' }}>That&apos;s the RJH difference.</span>
        </h2>
        <p style={{ color: 'var(--on-dark-2)', fontSize: 16, lineHeight: 1.65, maxWidth: 480, margin: '20px 0 30px' }}>
          From concept to completion, we take pride in delivering flawless tiling solutions tailored to your space.
        </p>
        <div>
          <Button onClick={onQuote}>Get a Free Quote</Button>
        </div>
      </div>
    </section>
  );
}
