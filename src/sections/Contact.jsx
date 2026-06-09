import { useForm, ValidationError } from '@formspree/react';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const rows = [
  { icon: 'phone', t: 'Call us', d: '07921 843 606' },
  { icon: 'mail', t: 'Email us', d: 'quote@rjhtiling.co.uk' },
  { icon: 'map-pin', t: 'Areas covered', d: 'Luton & surrounding areas' },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('mqeoaorr');

  const field = {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    padding: '13px 15px',
    border: '1px solid rgba(243,238,232,.22)',
    borderRadius: 3,
    background: 'rgba(243,238,232,.06)',
    color: 'var(--on-dark)',
    width: '100%',
    boxSizing: 'border-box',
  };

  const errStyle = { color: '#E2A4A4', fontSize: 12.5, margin: '-6px 0 0' };

  // Dropdown options render against the OS's light popup background, so give
  // them explicit dark text (otherwise they inherit the field's light colour
  // and become unreadable when the list opens).
  const optStyle = { color: 'var(--ink)', background: 'var(--bone-2)' };

  return (
    <section id="contact" className="rjh-section" style={{ background: 'var(--charcoal)', padding: '88px 0' }}>
      <div
        className="rjh-contact-grid rjh-wrap"
        style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}
      >
        <div>
          <SectionHeader eyebrow="Get In Touch" title="Request a free quote" dark />
          <p style={{ color: 'var(--on-dark-2)', fontSize: 16, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 440 }}>
            Tell us about your project and we&apos;ll be in touch within one working day to arrange a free, no-obligation quote.
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {rows.map(r => (
              <div key={r.t} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: 3,
                  border: '1px solid rgba(243,238,232,.2)',
                  display: 'grid',
                  placeItems: 'center',
                  flex: 'none',
                }}>
                  <Icon name={r.icon} size={20} color="var(--bronze-soft)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--on-dark-2)', fontWeight: 600 }}>
                    {r.t}
                  </div>
                  <div style={{ fontSize: 17, color: 'var(--on-dark)', marginTop: 3 }}>{r.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--charcoal-2)', borderRadius: 4, padding: '32px 30px', boxShadow: 'var(--shadow-lg)' }}>
          {state.succeeded ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(192,160,106,.18)',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 18px',
              }}>
                <Icon name="check" size={28} color="var(--bronze-soft)" stroke={2.5} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                fontSize: 24,
                margin: '0 0 8px',
                color: 'var(--on-dark)',
              }}>
                Request Received
              </h3>
              <p style={{ color: 'var(--on-dark-2)', fontSize: 15, margin: 0 }}>
                Thanks — we&apos;ll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'grid', gap: 14 }}
            >
              {/* Honeypot field to prevent spam */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <input style={field} name="name" placeholder="Your name" required />
              <input style={field} name="phone" placeholder="Phone number" required />
              <input style={field} name="email" placeholder="Email address" type="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} style={errStyle} />
              <select style={field} name="work_type" defaultValue="">
                <option value="" disabled style={{ ...optStyle, color: 'var(--ink-2)' }}>Type of work…</option>
                <option style={optStyle}>Bathroom tiling</option>
                <option style={optStyle}>Kitchen &amp; splashback</option>
                <option style={optStyle}>Floor tiling</option>
                <option style={optStyle}>External / stonework</option>
                <option style={optStyle}>Other</option>
              </select>
              <textarea
                style={{ ...field, minHeight: 90, resize: 'vertical' }}
                name="message"
                placeholder="Tell us a little about the project…"
              ></textarea>
              <ValidationError field="message" errors={state.errors} style={errStyle} />
              <ValidationError errors={state.errors} style={errStyle} />
              <Button
                type="submit"
                disabled={state.submitting}
                style={{ justifyContent: 'center', width: '100%', padding: '16px', opacity: state.submitting ? 0.7 : 1 }}
              >
                {state.submitting ? 'Sending…' : 'Request My Free Quote'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
