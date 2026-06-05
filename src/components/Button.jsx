import { useState } from 'react';

export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false, style = {} }) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    fontSize: 13,
    padding: '15px 28px',
    borderRadius: 2,
    cursor: 'pointer',
    border: 0,
    transition: 'background .2s var(--ease), color .2s var(--ease), transform .08s var(--ease)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    lineHeight: 1,
    whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: 'var(--bronze)', color: '#fff' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)' },
    ghostDark: { background: 'transparent', color: 'var(--on-dark)', border: '1.5px solid rgba(243,238,232,.55)' },
  };

  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  let s = { ...base, ...variants[variant], ...style };
  if (hover && !disabled && variant === 'primary') s.background = 'var(--bronze-deep)';
  if (hover && !disabled && variant === 'ghost') { s.background = 'var(--ink)'; s.color = 'var(--bone)'; }
  if (hover && !disabled && variant === 'ghostDark') { s.background = 'var(--on-dark)'; s.color = 'var(--charcoal)'; }
  if (down && !disabled) s.transform = 'translateY(1px)';
  if (disabled) s.cursor = 'not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={s}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      {children}
    </button>
  );
}
