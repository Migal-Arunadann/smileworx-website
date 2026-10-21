import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { CLINIC_DATA, TREATMENTS } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

export function Treatments() {
  return (
    <>
      <SEOHead
        title="Dental Treatments | Smileworx Dental Care, Chennai"
        description="Comprehensive guide to dental treatments at Smileworx Dental Care in Chennai. Learn about orthodontic braces, clear aligners, dental implants, dentures, veneers, and crowns."
        canonicalPath="/treatments"
        isTreatmentPage={true}
      />

      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--plum-primary)', fontWeight: 500 }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Dental Treatments</span>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="editorial-kicker">
            Treatment Guide · Smileworx
          </span>

          <h1 className="headline-hero" style={{ color: 'var(--plum-deep)', marginBottom: '1.25rem' }}>
            Explore your treatment options.
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Every mouth is anatomically distinct. This guide introduces the core treatment disciplines provided at Smileworx Dental Care in Ponniammanmedu, Chennai. Treatment recommendations depend on a clinical evaluation with Dr. S. Helen Joice, taking into account bone structure, gum health, and personal functional goals.
          </p>

          {/* Quick Jump Navigator Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            paddingTop: '0.5rem'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
              Jump to:
            </span>
            {TREATMENTS.map((t, idx) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="badge-tag"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--plum-primary)',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.78rem',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>0{idx + 1}. {t.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 Substantial Treatment Sections with Alternating Layouts */}
      <div style={{ backgroundColor: '#FFFFFF' }}>
        {TREATMENTS.map((treatment, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={treatment.id}
              id={treatment.id}
              style={{
                paddingTop: 'clamp(4rem, 6vw, 6rem)',
                paddingBottom: 'clamp(4rem, 6vw, 6rem)',
                borderBottom: '1px solid var(--border-light)',
                backgroundColor: isEven ? '#FFFFFF' : 'var(--bg-ivory)',
                scrollMarginTop: '80px'
              }}
            >
              <div className="container">
                <div className={`editorial-grid-2 ${isEven ? '' : 'reverse'}`}>
                  {/* Text Column */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--gold-signature)',
                        letterSpacing: '0.1em'
                      }}>
                        SECTION 0{index + 1}
                      </span>
                      <span className="badge-tag badge-tag-gold tamil-script" style={{ fontWeight: 600 }}>
                        {treatment.tamilName}
                      </span>
                    </div>

                    <h2 className="headline-section" style={{ color: 'var(--plum-deep)', marginBottom: '0.5rem' }}>
                      {treatment.name}
                    </h2>

                    <p style={{
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: 'var(--plum-secondary)',
                      marginBottom: '1.25rem'
                    }}>
                      {treatment.tagline}
                    </p>

                    <div className="gold-divider" />

                    <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      {treatment.overview}
                    </p>

                    {/* What it involves */}
                    <div style={{
                      backgroundColor: isEven ? 'var(--bg-ivory)' : '#FFFFFF',
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      marginBottom: '1.5rem'
                    }}>
                      <h3 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--plum-primary)',
                        marginBottom: '0.85rem'
                      }}>
                        What The Process Involves
                      </h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {treatment.involves.map((step, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--gold-signature)', flexShrink: 0, marginTop: '3px' }} />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Who may consider this */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--plum-primary)',
                        marginBottom: '0.75rem'
                      }}>
                        Who May Consider This Treatment
                      </h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {treatment.suitability.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--gold-signature)', fontWeight: 700 }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Note */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(81, 32, 68, 0.05)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '2rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <AlertCircle size={16} style={{ color: 'var(--plum-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <p>
                        <strong>Clinical Assessment Note:</strong> {treatment.considerations}
                      </p>
                    </div>

                    {/* Contextual Action Link */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link
                        to={`/contact?treatment=${treatment.id}`}
                        className="btn btn-primary"
                        style={{ fontSize: '0.85rem' }}
                      >
                        <Calendar size={15} style={{ color: 'var(--gold-signature)' }} />
                        <span>Enquire About {treatment.name}</span>
                      </Link>

                      <a
                        href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                        className="btn btn-secondary"
                        style={{ fontSize: '0.85rem' }}
                      >
                        <Phone size={15} />
                        <span>Call For Queries</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div>
                    <div className="gold-offset-border">
                      <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
                        <img
                          src={treatment.image}
                          alt={treatment.alt}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>

                    <div style={{
                      marginTop: '1.25rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: isEven ? 'var(--bg-cream)' : '#FFFFFF',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)'
                    }}>
                      <span>Clinical educational photography</span>
                      <span style={{ fontWeight: 600, color: 'var(--plum-primary)' }}>Smileworx Chennai</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing Consultation Callout */}
      <section style={{
        backgroundColor: 'var(--plum-deep)',
        color: '#FAF7F0',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="editorial-kicker editorial-kicker-gold" style={{ justifyContent: 'center' }}>
            Book a Clinical Assessment
          </span>

          <h2 className="headline-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Unsure which treatment is appropriate for you?
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--text-inverse-muted)',
            marginBottom: '2.5rem'
          }}>
            A thorough examination with Dental Surgeon Dr. S. Helen Joice will clarify your options, outline estimated timeframes, and give you honest answers without sales pressure.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">
              <Calendar size={17} />
              <span>Request Appointment Enquiry</span>
            </Link>

            <a href={`tel:${CLINIC_DATA.contact.phoneTel}`} className="btn btn-outline-light">
              <Phone size={17} />
              <span>Call +91 93605 53755</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
