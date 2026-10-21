import { Link } from 'react-router-dom';
import { Phone, Calendar, Heart, Shield, Sparkles, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

export function About() {
  return (
    <>
      <SEOHead
        title="About Smileworx Dental Care | Ponniammanmedu, Chennai"
        description="Learn about Smileworx Dental Care in Ponniammanmedu, Chennai. Led by Dental Surgeon Dr. S. Helen Joice, our clinic focuses on thoughtful patient consultations, clinical hygiene, and clear communication."
        canonicalPath="/about"
      />

      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--plum-primary)', fontWeight: 500 }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>About Smileworx</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div className="editorial-grid-2">
            <div>
              <span className="editorial-kicker">
                About The Practice
              </span>

              <h1 className="headline-hero" style={{ color: 'var(--plum-deep)', marginBottom: '1.5rem' }}>
                Thoughtful care begins with understanding you.
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                Smileworx Dental Care is a community-focused dental clinic established in Ponniammanmedu, Chennai. We believe a dental visit should feel comfortable, unhurried, and transparent from your very first consultation.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  <Calendar size={16} style={{ color: 'var(--gold-signature)' }} />
                  <span>Schedule Consultation</span>
                </Link>

                <Link to="/treatments" className="btn btn-secondary">
                  <span>Explore Treatments</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="gold-offset-border">
                <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/about/clinic-care.jpg"
                    alt="Serene and hygienic dental clinic consultation room at Smileworx"
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLINIC INTRODUCTION */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="editorial-kicker" style={{ justifyContent: 'center' }}>
              Locally Rooted Healthcare
            </span>
            <h2 className="headline-section" style={{ color: 'var(--plum-deep)', marginBottom: '1rem' }}>
              Serving Families in Ponniammanmedu & North Chennai
            </h2>
            <div className="gold-divider" style={{ margin: '1rem auto' }} />
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Located at Valliammai Nagar Extension in Ponniammanmedu, Smileworx Dental Care serves individuals and families seeking honest, accessible dental treatment. Whether a patient is visiting for routine preventive advice, seeking orthodontic realignment, or exploring permanent options for missing teeth, we approach each clinical case with diligence and empathy.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Our practice is intentionally structured around unhurried appointments. Dental anxieties are normal, and we recognize that patients often delay care simply because past treatments felt rushed or unclear. We take the necessary time to discuss treatment expectations, step-by-step procedures, and maintenance protocols so that you feel fully informed and confident at every step.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            padding: '2rem',
            backgroundColor: 'var(--bg-cream)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)'
          }}>
            <div>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                Clinic Location
              </p>
              <p style={{ fontWeight: 600, color: 'var(--plum-primary)' }}>
                Ponniammanmedu, Chennai
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Valliammai Nagar Extension, 600110
              </p>
            </div>

            <div>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                Consulting Surgeon
              </p>
              <p style={{ fontWeight: 600, color: 'var(--plum-primary)' }}>
                Dr. S. Helen Joice
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Dental Surgeon
              </p>
            </div>

            <div>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                Clinical Services
              </p>
              <p style={{ fontWeight: 600, color: 'var(--plum-primary)' }}>
                Comprehensive Dentistry
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Braces, Aligners, Implants, Dentures, Veneers, Crowns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE DENTAL SURGEON (Text-Led Editorial Profile) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: 'var(--shadow-editorial)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Left: Dignified Profile Description */}
            <div>
              <span className="editorial-kicker">
                Lead Practitioner
              </span>

              <h2 className="headline-section" style={{ color: 'var(--plum-deep)', marginBottom: '0.4rem' }}>
                Dr. S. Helen Joice
              </h2>

              <p style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--gold-dark)',
                letterSpacing: '0.04em',
                marginBottom: '1.25rem'
              }}>
                Dental Surgeon
              </p>

              <div className="gold-divider" />

              <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                As the dental surgeon leading Smileworx Dental Care, Dr. S. Helen Joice is dedicated to providing high-quality dental treatments that blend clinical precision with a gentle touch.
              </p>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Her approach centers on clear, honest communication. Rather than recommending invasive treatments unnecessarily, she evaluates each patient’s oral condition thoroughly, explains conservative alternatives, and partners with patients to achieve long-term dental health.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--gold-signature)' }} />
                  <span>Dedicated, one-on-one patient consultations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--gold-signature)' }} />
                  <span>Conservative and tooth-preserving restorative philosophy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--gold-signature)' }} />
                  <span>Fluent communication and clear explanations in Tamil & English</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                <Calendar size={16} style={{ color: 'var(--gold-signature)' }} />
                <span>Consult with Dr. S. Helen Joice</span>
              </Link>
            </div>

            {/* Right: Thoughtful Clinical Environment Imagery */}
            <div>
              <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
                <img
                  src="/images/hero/hero-consultation.jpg"
                  alt="Dr. S. Helen Joice consultation environment at Smileworx"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginTop: '0.65rem',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                Patient consultation and examination room at Smileworx Dental Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PATIENT EXPERIENCE PRINCIPLES */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <span className="editorial-kicker" style={{ justifyContent: 'center' }}>
              Our Care Standards
            </span>
            <h2 className="headline-section" style={{ color: 'var(--plum-deep)', marginBottom: '1rem' }}>
              What to expect when you visit.
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              We adhere to four practical principles to ensure every patient feels comfortable, heard, and cared for.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--plum-primary)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Heart size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                1. Unhurried Appointments
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We do not double-book appointments. Your consultation slot is dedicated to you, ensuring Dr. S. Helen Joice has ample time to examine and discuss your dental needs.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--plum-primary)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                2. Honest Treatment Advice
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We believe in ethical dentistry. You receive straightforward recommendations outlining the benefits, limitations, and realistic expectations of every treatment option.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--plum-primary)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Shield size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                3. Stringent Hygiene Protocols
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Our clinic maintains strict autoclave sterilization, surface disinfection, and single-use barrier protections for every patient to guarantee total safety.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--plum-primary)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <MapPin size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--plum-primary)', marginBottom: '0.65rem' }}>
                4. Accessible Community Care
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We are proud to serve the Ponniammanmedu neighborhood with convenient morning and evening consultation slots, accommodating both work and school schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLINIC PHOTO GALLERY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="editorial-kicker">
                Clinical Facility
              </span>
              <h2 className="headline-section" style={{ color: 'var(--plum-deep)' }}>
                Designed for your comfort.
              </h2>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '420px' }}>
              Clean, welcoming spaces designed to put you at ease from the moment you step through our doors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
              <img
                src="/images/clinic/clinic-operatory.jpg"
                alt="Operatory dental chair and equipment suite at Smileworx"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
              <img
                src="/images/clinic/reception.jpg"
                alt="Patient waiting lounge and reception area at Smileworx Chennai"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="editorial-frame" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-sm)' }}>
              <img
                src="/images/about/clinic-care.jpg"
                alt="Sterilized clinical dental instruments and operatory setup"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section style={{
        backgroundColor: 'var(--plum-primary)',
        color: '#FAF7F0',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <span className="editorial-kicker editorial-kicker-gold" style={{ justifyContent: 'center' }}>
            Get in Touch
          </span>

          <h2 className="headline-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            We look forward to welcoming you.
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--text-inverse-muted)',
            marginBottom: '2.5rem'
          }}>
            Have questions about dental treatments or want to schedule a visit for yourself or a family member? Contact our clinic team in Ponniammanmedu today.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">
              <Calendar size={17} />
              <span>Book an Appointment</span>
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
