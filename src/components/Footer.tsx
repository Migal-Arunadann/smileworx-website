import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA, TREATMENTS } from '../data/clinicData';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer style={{
      backgroundColor: 'var(--plum-deep)',
      color: '#FAF7F0',
      borderTop: '2px solid var(--gold-signature)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: Brand & Identity */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="/images/brand/logo-gold.png"
                alt="Smileworx Dental Care"
                style={{ height: '54px', width: 'auto' }}
              />
            </Link>

            <p className="tamil-script" style={{
              color: 'var(--gold-signature)',
              fontSize: '0.95rem',
              fontWeight: 600,
              marginBottom: '0.65rem'
            }}>
              {CLINIC_DATA.tamilName}
            </p>

            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: 'var(--text-inverse-muted)',
              marginBottom: '1.25rem'
            }}>
              Personalised dental healthcare and orthodontics in Ponniammanmedu, Chennai. Thoughtful consultations focused on patient comfort and clinical clarity.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: 'rgba(216, 189, 99, 0.12)',
              border: '1px solid rgba(216, 189, 99, 0.25)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: 'var(--gold-light)'
            }}>
              <ShieldCheck size={16} style={{ color: 'var(--gold-signature)' }} />
              <span>{CLINIC_DATA.doctor.name} · {CLINIC_DATA.doctor.title}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-signature)',
              marginBottom: '1.25rem'
            }}>
              Quick Navigation
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-inverse-muted)', fontSize: '0.92rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" style={{ color: 'var(--text-inverse-muted)', fontSize: '0.92rem' }}>
                  Dental Treatments
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-inverse-muted)', fontSize: '0.92rem' }}>
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-inverse-muted)', fontSize: '0.92rem' }}>
                  Contact & Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments Guide */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-signature)',
              marginBottom: '1.25rem'
            }}>
              Dental Treatments
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {TREATMENTS.map(t => (
                <li key={t.id}>
                  <Link
                    to={`/treatments#${t.id}`}
                    style={{
                      color: 'var(--text-inverse-muted)',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span style={{ color: 'var(--gold-signature)', fontSize: '0.75rem' }}>›</span>
                    <span>{t.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Opening Hours */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-signature)',
              marginBottom: '1.25rem'
            }}>
              Visit & Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-inverse-muted)' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: 'var(--gold-signature)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 500, marginBottom: '0.2rem' }}>Smileworx Dental Care</p>
                  <p>{CLINIC_DATA.address.line1}</p>
                  <p>{CLINIC_DATA.address.line2}</p>
                  <p>{CLINIC_DATA.address.city}, {CLINIC_DATA.address.state} {CLINIC_DATA.address.postalCode}</p>
                  <a
                    href={CLINIC_DATA.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--gold-light)',
                      marginTop: '0.4rem',
                      fontWeight: 600,
                      fontSize: '0.82rem'
                    }}
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--gold-signature)', flexShrink: 0 }} />
                <a
                  href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                  style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {CLINIC_DATA.contact.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Clock size={18} style={{ color: 'var(--gold-signature)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600 }}>Monday – Saturday</p>
                  <p>Morning: 9:30 AM – 1:00 PM</p>
                  <p>Evening: 5:30 PM – 9:00 PM</p>
                  <p style={{ color: '#F6AD55', marginTop: '0.25rem', fontWeight: 500 }}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          borderTop: '1px solid rgba(229, 220, 227, 0.12)',
          borderBottom: '1px solid rgba(229, 220, 227, 0.12)',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontSize: '0.78rem',
            lineHeight: 1.6,
            color: 'rgba(216, 206, 214, 0.75)'
          }}>
            <strong>Medical Notice:</strong> Information published on this website is for educational and appointment enquiry purposes only and is not intended as medical or diagnostic advice. Clinical candidacy, procedure requirements, and potential risks for any dental treatment can only be established through a personal in-clinic consultation with a registered dental surgeon. Illustrative before-and-after imagery does not guarantee specific patient outcomes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-inverse-muted)'
        }}>
          <p>
            © {currentYear} {CLINIC_DATA.name}. All rights reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Dr. S. Helen Joice · Dental Surgeon</span>
            <span>·</span>
            <span>Ponniammanmedu, Chennai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
