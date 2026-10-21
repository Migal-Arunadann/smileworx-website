import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Clock, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { CLINIC_DATA, TREATMENTS } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function Home() {
  return (
    <>
      <SEOHead
        title="Smileworx Dental Care | Dental Clinic in Ponniammanmedu, Chennai"
        description="Smileworx Dental Care is a modern dental clinic in Ponniammanmedu, Chennai led by Dental Surgeon Dr. S. Helen Joice. Professional care for braces, clear aligners, dental implants, dentures, veneers, and crowns."
        canonicalPath="/"
      />

      {/* SECTION 2: HERO (Editorial Asymmetric Composition) */}
      <section style={{
        position: 'relative',
        paddingTop: 'clamp(3rem, 5vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6.5rem)',
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-light)',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative background watermark */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 189, 99, 0.08) 0%, rgba(81, 32, 68, 0.02) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="editorial-grid-2">
            {/* Left Content Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span className="editorial-kicker" style={{ marginBottom: 0 }}>
                  Smileworx Dental Care · Chennai
                </span>
                <span className="badge-tag badge-tag-gold tamil-script" style={{ fontWeight: 600 }}>
                  {CLINIC_DATA.tamilName}
                </span>
              </div>

              <h1 className="headline-hero" style={{ marginBottom: '1.4rem', color: 'var(--plum-deep)' }}>
                Care for your smile.<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--plum-secondary)' }}>
                  Confidence in every detail.
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}>
                Personalised, gentle dental care in Ponniammanmedu, Chennai. Led by Dental Surgeon Dr. S. Helen Joice, we guide you through clear orthodontic, restorative, and general dental treatment choices with genuine time and clinical attention.
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <Link to="/contact" className="btn btn-primary">
                  <Calendar size={17} style={{ color: 'var(--gold-signature)' }} />
                  <span>Book an Appointment</span>
                </Link>

                <Link to="/treatments" className="btn btn-secondary">
                  <span>Explore Treatments</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Verified Quick Contact Callout */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: 'var(--bg-cream)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--plum-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)'
                }}>
                  <Phone size={17} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Direct Clinic Inquiries
                  </p>
                  <a
                    href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                    style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--plum-primary)' }}
                  >
                    {CLINIC_DATA.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Editorial Image Frame */}
            <div style={{ position: 'relative' }}>
              <div className="gold-offset-border">
                <div className="editorial-frame" style={{ aspectRatio: '4/3', maxHeight: '520px' }}>
                  <img
                    src="/images/hero/hero-consultation.jpg"
                    alt="Dental consultation with patient at Smileworx Dental Care clinic in Chennai"
                    loading="eager"
                    fetchPriority="high"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Subtle Floating Editorial Tag */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '0.85rem 1.35rem',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-editorial)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                maxWidth: '320px'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-signature)',
                  flexShrink: 0
                }} />
                <p style={{ fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--text-primary)', margin: 0 }}>
                  <strong>Dr. S. Helen Joice</strong><br />
                  <span style={{ color: 'var(--text-secondary)' }}>Dental Surgeon · Ponniammanmedu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTRODUCING SMILEWORX */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="editorial-grid-2 reverse">
            {/* Image on left */}
            <div>
              <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-subtle)' }}>
                <img
                  src="/images/clinic/clinic-operatory.jpg"
                  alt="Modern dental operatory treatment chair in plum leather at Smileworx Dental Care"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                marginTop: '0.65rem',
                fontStyle: 'italic',
                textAlign: 'right'
              }}>
                Clinical operatory suite with modern ergonomic patient care setup
              </p>
            </div>

            {/* Content on right */}
            <div>
              <span className="editorial-kicker">
                Clinical Philosophy
              </span>

              <h2 className="headline-section" style={{ marginBottom: '1.25rem', color: 'var(--plum-deep)' }}>
                A more thoughtful approach to your dental care.
              </h2>

              <div className="gold-divider" />

              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                At Smileworx Dental Care, every appointment begins with listening. We believe that understanding your specific oral health concerns, lifestyle, and comfort expectations is just as essential as clinical diagnosis.
              </p>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Whether you are exploring orthodontic options like braces and aligners, seeking permanent tooth replacement with dental implants, or looking to protect compromised teeth with crowns, Dr. S. Helen Joice takes the time to explain the procedure step by step, empowering you to make informed decisions for your smile.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ borderLeft: '2px solid var(--gold-signature)', paddingLeft: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.2rem' }}>
                    Transparent Consultations
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    Detailed discussion of clinical choices before any procedure begins.
                  </p>
                </div>

                <div style={{ borderLeft: '2px solid var(--gold-signature)', paddingLeft: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.2rem' }}>
                    Patient Comfort Focus
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    Calm operatory environment designed to reduce anxiety for all ages.
                  </p>
                </div>
              </div>

              <Link to="/about" className="btn-text">
                <span>Learn more about our clinic experience</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TREATMENTS PREVIEW (Editorial Collection) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="editorial-kicker">
                Clinical Services
              </span>
              <h2 className="headline-section" style={{ color: 'var(--plum-deep)' }}>
                Treatment options designed for your needs.
              </h2>
            </div>

            <Link to="/treatments" className="btn btn-secondary">
              <span>View All 6 Treatments</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Asymmetric Varied Collection (Not 6 repetitive identical cards!) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Spotlight Feature: Orthodontics (Braces & Clear Aligners) */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1.5rem, 3.5vw, 3rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: 'var(--shadow-subtle)'
            }}>
              <div>
                <span className="badge-tag badge-tag-gold" style={{ marginBottom: '0.85rem' }}>
                  Orthodontic Alignment
                </span>
                <h3 className="headline-sub" style={{ color: 'var(--plum-deep)', marginBottom: '1rem' }}>
                  Braces & Clear Aligners
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  Whether addressing misaligned teeth, crowding, or interdental gaps, orthodontic treatment helps establish balanced chewing function and natural smile aesthetics. We provide both established ceramic braces and discreet removable clear aligners.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <Link to="/treatments#braces" className="btn-text">
                    <span>Braces Details</span>
                    <ChevronRight size={14} />
                  </Link>
                  <Link to="/treatments#aligners" className="btn-text">
                    <span>Clear Aligners Details</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="editorial-frame" style={{ aspectRatio: '1/1', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/treatments/braces.jpg"
                    alt="Aesthetic orthodontic ceramic braces on natural teeth"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="editorial-frame" style={{ aspectRatio: '1/1', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/treatments/aligners.jpg"
                    alt="Modern transparent orthodontic clear aligners"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* 4 Supporting Treatments Grid (Implants, Dentures, Veneers, Crowns) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}>
              {TREATMENTS.slice(2).map((treatment, idx) => (
                <div
                  key={treatment.id}
                  className="clinic-accent-card"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={treatment.image}
                      alt={treatment.alt}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(39, 11, 34, 0.88)',
                      color: 'var(--gold-light)',
                      border: '1px solid rgba(223, 192, 102, 0.35)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      0{idx + 3}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div className="tamil-script" style={{ color: 'var(--gold-dark)', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {treatment.tamilName}
                    </div>
                    <h3 className="headline-card" style={{ color: 'var(--plum-primary)', marginBottom: '0.5rem' }}>
                      {treatment.name}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                      {treatment.shortDesc}
                    </p>
                    <Link
                      to={`/treatments#${treatment.id}`}
                      className="btn-text"
                      style={{ marginTop: 'auto' }}
                    >
                      <span>Read Treatment Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLINICAL SMILE TRANSFORMATION (Interactive Comparison) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="editorial-kicker" style={{ justifyContent: 'center' }}>
              Clinical Smile Transformation
            </span>
            <h2 className="headline-section" style={{ color: 'var(--plum-primary)', marginBottom: '1rem' }}>
              Restoring anatomical balance & aesthetic harmony.
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Drag the interactive slider below to explore an authentic clinical transformation: restoring worn, chipped anterior enamel with custom-contoured porcelain veneers to achieve a radiant, confident smile line.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* SECTION 6: WHY PATIENTS CHOOSE SMILEWORX */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="editorial-kicker">
              Practice Standards
            </span>
            <h2 className="headline-section" style={{ color: 'var(--plum-deep)', marginBottom: '1rem' }}>
              A dependable partner for your family’s dental health.
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              We focus on clinical accuracy, clear patient communication, and dependable treatment practices grounded in the needs of our local Chennai community.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-signature)', marginBottom: '1rem' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                Comprehensive Treatment Range
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                From orthodontic brackets and aligners to permanent dental implants and crowns, receive complete treatment planning without unnecessary external referrals.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-signature)', marginBottom: '1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                Surgeon-Led Diagnosis
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Consult directly with Dr. S. Helen Joice (Dental Surgeon) at each visit, ensuring consistent continuity of care throughout your treatment process.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-signature)', marginBottom: '1rem' }}>
                <Clock size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                Split Morning & Evening Hours
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Convenient morning (9:30 AM–1 PM) and evening (5:30 PM–9 PM) slots tailored for working professionals, school students, and families.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-signature)', marginBottom: '1rem' }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                Accessible Ponniammanmedu Location
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Located at Valliammai Nagar Extension in Ponniammanmedu, North Chennai, with easy street access and landmark navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLINIC PHOTOGRAPHY */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
            <span className="editorial-kicker">
              Clinic Atmosphere
            </span>
            <h2 className="headline-section" style={{ color: 'var(--plum-deep)' }}>
              A calm, hygienic clinical space.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}>
            <div style={{ gridColumn: 'span 7' }} className="gallery-col-large">
              <div className="editorial-frame" style={{ height: '380px' }}>
                <img
                  src="/images/clinic/clinic-operatory.jpg"
                  alt="Modern operatory with ergonomic dental chair at Smileworx"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Operatory treatment suite with infection-control hygiene protocols
              </p>
            </div>

            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="gallery-col-small">
              <div className="editorial-frame" style={{ height: '175px' }}>
                <img
                  src="/images/hero/hero-consultation.jpg"
                  alt="Gentle doctor patient consultation at Smileworx Chennai"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="editorial-frame" style={{ height: '175px' }}>
                <img
                  src="/images/clinic/reception.jpg"
                  alt="Comfortable clinic reception and patient waiting area"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .gallery-col-large { grid-column: span 12 !important; }
            .gallery-col-small { grid-column: span 12 !important; }
          }
        `}</style>
      </section>

      {/* SECTION 8: LOCATION AND HOURS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-editorial)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}>
            {/* Left: Location & Details */}
            <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', borderRight: '1px solid var(--border-light)' }}>
              <span className="editorial-kicker">
                Clinic Location
              </span>
              <h2 className="headline-sub" style={{ color: 'var(--plum-deep)', marginBottom: '1.5rem' }}>
                Smileworx Dental Care
              </h2>

              <p className="tamil-script" style={{ color: 'var(--gold-dark)', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>
                {CLINIC_DATA.tamilName}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <MapPin size={20} style={{ color: 'var(--plum-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>12/C Valliamman, Annapoorna Nagar Ext</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Valliammai Nagar Extension, Ponniammanmedu</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Chennai, Tamil Nadu 600110, India</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Google Plus Code: <strong>{CLINIC_DATA.address.locationCode}</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--plum-primary)', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone Inquiries</p>
                    <a href={`tel:${CLINIC_DATA.contact.phoneTel}`} style={{ fontWeight: 700, color: 'var(--plum-primary)', fontSize: '1.1rem' }}>
                      {CLINIC_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={CLINIC_DATA.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  <MapPin size={15} />
                  <span>Open in Google Maps</span>
                </a>

                <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
                  <Calendar size={15} style={{ color: 'var(--gold-signature)' }} />
                  <span>Enquiry Form</span>
                </Link>
              </div>
            </div>

            {/* Right: Weekly Schedule Table */}
            <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', backgroundColor: 'var(--bg-ivory)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Clock size={20} style={{ color: 'var(--gold-signature)' }} />
                <h3 className="headline-sub" style={{ color: 'var(--plum-deep)' }}>
                  Opening Hours
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We operate two distinct daily sessions for your convenience. Please note that appointments are scheduled in advance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {CLINIC_DATA.schedule.map((slot) => (
                  <div
                    key={slot.day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: slot.closed ? 'rgba(229, 62, 62, 0.06)' : '#FFFFFF',
                      border: slot.closed ? '1px solid rgba(229, 62, 62, 0.2)' : '1px solid var(--border-light)',
                      fontSize: '0.86rem'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: slot.closed ? '#C53030' : 'var(--text-primary)' }}>
                      {slot.day}
                    </span>

                    {slot.closed ? (
                      <span style={{ fontWeight: 700, color: '#C53030', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Closed
                      </span>
                    ) : (
                      <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>
                        <div>Morning: <strong>{slot.morning}</strong></div>
                        <div>Evening: <strong>{slot.evening}</strong></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL EDITORIAL CTA */}
      <section style={{
        backgroundColor: 'var(--plum-primary)',
        color: '#FAF7F0',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Gold Rule */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--gold-signature), transparent)'
        }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span className="editorial-kicker editorial-kicker-gold" style={{ justifyContent: 'center' }}>
            Book Your Consultation
          </span>

          <h2 className="headline-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Your next step towards a healthier, more confident smile.
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.65,
            color: 'var(--text-inverse-muted)',
            marginBottom: '2.5rem'
          }}>
            Schedule a dental consultation with Dr. S. Helen Joice at Smileworx Dental Care in Ponniammanmedu, Chennai. We are ready to answer your questions and design a care plan tailored to you.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <a href={`tel:${CLINIC_DATA.contact.phoneTel}`} className="btn btn-gold">
              <Phone size={17} />
              <span>Call {CLINIC_DATA.contact.phoneDisplay}</span>
            </a>

            <a
              href={CLINIC_DATA.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <MapPin size={17} />
              <span>Get Directions</span>
            </a>

            <Link to="/contact" className="btn btn-outline-light">
              <Calendar size={17} />
              <span>Online Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
