import { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Styles', id: 'styles' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 83, behavior: 'smooth' });
}

export default function Nav() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 980);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 980);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = 'home';
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) cur = n.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { setOpen(false); scrollToId(id); };

  const linkStyle = (id) => ({
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: active === id ? 'var(--bronze-deep)' : 'var(--ink)',
    textDecoration: 'none',
    paddingBottom: 4,
    cursor: 'pointer',
    background: 'none',
    border: 0,
    borderBottom: active === id ? '2px solid var(--bronze)' : '2px solid transparent',
    transition: 'color .2s, border-color .2s',
  });

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(247,244,239,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        height: 84,
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }}>
        <button
          onClick={() => go('home')}
          style={{ marginRight: 'auto', background: 'none', border: 0, cursor: 'pointer', padding: 0 }}
        >
          <Logo size={26} />
        </button>

        {!mobile && (
          <>
            <nav style={{ display: 'flex', gap: 28 }}>
              {NAV.map(n => (
                <button key={n.id} onClick={() => go(n.id)} style={linkStyle(n.id)}>
                  {n.label}
                </button>
              ))}
            </nav>
            <Button onClick={() => go('contact')} style={{ padding: '12px 22px' }}>Get a Quote</Button>
          </>
        )}

        {mobile && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            style={{ background: 'none', border: 0, cursor: 'pointer', display: 'flex', color: 'var(--ink)' }}
          >
            <Icon name={open ? 'x' : 'menu'} size={26} color="var(--ink)" />
          </button>
        )}
      </div>

      {mobile && open && (
        <nav style={{
          background: 'var(--bone-2)',
          borderTop: '1px solid var(--line)',
          padding: '12px 24px 20px',
          display: 'grid',
          gap: 4,
        }}>
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              style={{ ...linkStyle(n.id), textAlign: 'left', padding: '12px 0', borderBottom: '1px solid var(--line)' }}
            >
              {n.label}
            </button>
          ))}
          <Button onClick={() => go('contact')} style={{ justifyContent: 'center', marginTop: 12 }}>Get a Quote</Button>
        </nav>
      )}
    </header>
  );
}
