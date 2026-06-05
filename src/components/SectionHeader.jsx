function Eyebrow({ children, dark }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      textTransform: 'uppercase',
      fontSize: 14,
      letterSpacing: '.14em',
      color: dark ? 'var(--bronze-soft)' : 'var(--bronze)',
    }}>
      {children}
    </div>
  );
}

export default function SectionHeader({ eyebrow, title, dark, align = 'left', children }) {
  return (
    <div style={{
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      margin: align === 'center' ? '0 auto' : 0,
    }}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <div style={{
        width: 56,
        height: 3,
        background: 'var(--bronze)',
        margin: align === 'center' ? '14px auto 18px' : '14px 0 18px',
      }}></div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: 'clamp(30px,3.4vw,46px)',
        lineHeight: .98,
        margin: 0,
        color: dark ? 'var(--on-dark)' : 'var(--ink)',
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
