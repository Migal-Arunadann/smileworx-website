import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, ExternalLink, Send } from 'lucide-react';
import { CLINIC_DATA, TREATMENTS } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

interface FormState {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  treatment: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  treatment?: string;
  consent?: string;
}

export function Contact() {
  const location = useLocation();
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Form State
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTimeSlot: '',
    treatment: 'general',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Read URL query parameter ?treatment=... to prefill treatment
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const treatmentParam = params.get('treatment');
    if (treatmentParam) {
      setFormData(prev => ({ ...prev, treatment: treatmentParam }));
    }
  }, [location.search]);

  // Today's date in YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_DATA.address.full).then(() => {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // Indian phone number validation (10 digits starting with 6, 7, 8, or 9; optional +91 or 0 prefix)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile phone number.';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 93605 53755).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred consultation date.';
    }

    if (!formData.preferredTimeSlot) {
      newErrors.preferredTimeSlot = 'Please select a preferred clinic session.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding your enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const generateWhatsAppUrl = (data: FormState) => {
    const treatmentName = TREATMENTS.find(t => t.id === data.treatment)?.name || data.treatment;
    const text = `Hello Smileworx Dental Care,\n\nI would like to make an appointment enquiry:\n- Name: ${data.fullName}\n- Phone: ${data.phone}\n- Preferred Date: ${data.preferredDate}\n- Preferred Slot: ${data.preferredTimeSlot}\n- Treatment: ${treatmentName}\n${data.message ? `- Note: ${data.message}\n` : ''}\nThank you!`;
    return `https://wa.me/${CLINIC_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEOHead
        title="Contact Smileworx Dental Care | Ponniammanmedu, Chennai"
        description="Contact Smileworx Dental Care in Ponniammanmedu, Chennai. Call +91 93605 53755, view opening hours, get Google Maps directions, or submit an appointment enquiry."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section style={{
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span className="editorial-kicker" style={{ justifyContent: 'center' }}>
            Appointments & Enquiries
          </span>

          <h1 className="headline-hero" style={{ color: 'var(--plum-deep)', marginBottom: '1.25rem' }}>
            Let's talk about your dental care.
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            We welcome appointment enquiries and questions about any dental treatment. Call us directly or fill in the enquiry form below, and our clinic team will connect with you.
          </p>
        </div>
      </section>

      {/* Main Grid: Details (Left) + Enquiry Form (Right) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4.5vw, 4.5rem)',
            alignItems: 'start'
          }}>
            {/* LEFT COLUMN: VERIFIED CONTACT DETAILS & HOURS */}
            <div>
              <div style={{
                backgroundColor: 'var(--bg-ivory)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                marginBottom: '2rem'
              }}>
                <span className="editorial-kicker">
                  Clinic Details
                </span>

                <h2 className="headline-card" style={{ color: 'var(--plum-deep)', marginBottom: '0.25rem' }}>
                  Smileworx Dental Care
                </h2>

                <p className="tamil-script" style={{ color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '1rem' }}>
                  {CLINIC_DATA.tamilName}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  backgroundColor: 'var(--plum-tint)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.84rem',
                  color: 'var(--plum-primary)',
                  fontWeight: 600,
                  marginBottom: '1.75rem'
                }}>
                  <span>Dr. S. Helen Joice · Dental Surgeon</span>
                </div>

                {/* Telephone */}
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Telephone Number
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a
                      href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                      style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--plum-primary)' }}
                    >
                      {CLINIC_DATA.contact.phoneDisplay}
                    </a>
                    <a
                      href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                      className="btn btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', minHeight: '38px' }}
                    >
                      <Phone size={14} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.45rem' }}>
                    Physical Address
                  </p>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    <strong>12/C Valliamman, Annapoorna Nagar Ext,</strong><br />
                    Valliammai Nagar Extension, Ponniammanmedu,<br />
                    Chennai, Tamil Nadu 600110, India.
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="btn btn-secondary"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem', minHeight: '36px' }}
                    >
                      {copiedAddress ? <Check size={14} style={{ color: 'green' }} /> : <Copy size={14} />}
                      <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                    </button>

                    <a
                      href={CLINIC_DATA.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-text"
                      style={{ fontSize: '0.82rem' }}
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Google Maps Code */}
                <div style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span>Google Location Code: </span>
                  <strong style={{ color: 'var(--plum-primary)' }}>{CLINIC_DATA.address.locationCode}</strong>
                </div>
              </div>

              {/* Verified Operating Hours Card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Clock size={18} style={{ color: 'var(--gold-signature)' }} />
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--plum-deep)' }}>
                    Clinic Consultation Timings
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {CLINIC_DATA.schedule.map(slot => (
                    <div
                      key={slot.day}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.55rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: slot.day === 'Sunday' ? 'var(--plum-tint)' : 'var(--bg-ivory)',
                        border: slot.day === 'Sunday' ? '1px solid rgba(223, 192, 102, 0.35)' : '1px solid transparent',
                        fontSize: '0.84rem'
                      }}
                    >
                      <span style={{ fontWeight: 600, color: slot.day === 'Sunday' ? 'var(--plum-primary)' : 'var(--text-primary)' }}>
                        {slot.day}
                      </span>

                      {slot.day === 'Sunday' ? (
                        <span style={{ fontWeight: 600, color: 'var(--plum-primary)', fontStyle: 'italic', fontSize: '0.82rem' }}>
                          Based on Appointments
                        </span>
                      ) : (
                        <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                          <span>9:30 AM–1 PM & 5:30–9 PM</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: APPOINTMENT ENQUIRY FORM */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-editorial)'
              }}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="editorial-kicker">
                    Direct Request
                  </span>
                  <h2 className="headline-sub" style={{ color: 'var(--plum-deep)', marginBottom: '0.5rem' }}>
                    Request an Appointment Enquiry
                  </h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    Please submit your preferred day and session. Our clinic will reach out to confirm your slot.
                  </p>
                </div>

                {/* SUBMITTED DEMONSTRATION WORKFLOW STATE */}
                {isSubmitted && submittedData ? (
                  <div style={{
                    padding: '2rem',
                    backgroundColor: 'var(--bg-ivory)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--gold-signature)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--plum-primary)' }}>
                      <CheckCircle2 size={26} style={{ color: 'var(--gold-signature)' }} />
                      <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', fontWeight: 700 }}>
                        Enquiry Received
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry details have been recorded for demonstration.
                    </p>

                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.88rem',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <div><strong>Contact Phone:</strong> {submittedData.phone}</div>
                      <div><strong>Preferred Date:</strong> {submittedData.preferredDate}</div>
                      <div><strong>Preferred Slot:</strong> {submittedData.preferredTimeSlot}</div>
                      <div><strong>Treatment:</strong> {TREATMENTS.find(t => t.id === submittedData.treatment)?.name || submittedData.treatment}</div>
                    </div>

                    <div style={{
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(216, 189, 99, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--gold-border)',
                      fontSize: '0.82rem',
                      color: 'var(--plum-deep)',
                      marginBottom: '1.75rem'
                    }}>
                      <strong>Notice:</strong> This is a static demonstration version. To send these details directly to the clinic right now, use the official WhatsApp enquiry button below:
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <a
                        href={generateWhatsAppUrl(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <MessageSquare size={17} />
                        <span>Send via WhatsApp (+91 93605 53755)</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            preferredDate: '',
                            preferredTimeSlot: '',
                            treatment: 'general',
                            message: '',
                            consent: false
                          });
                        }}
                        className="btn btn-secondary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span>Submit Another Enquiry</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* THE ACTIVE FORM */
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span style={{ color: '#C53030' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                      />
                      {errors.fullName && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Mobile Phone Number (India) <span style={{ color: '#C53030' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="e.g. 93605 53755"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Preferred Date & Session Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label htmlFor="preferredDate" className="form-label">
                          Preferred Date <span style={{ color: '#C53030' }}>*</span>
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                          disabled={isSubmitting}
                        />
                        {errors.preferredDate && (
                          <div className="form-error-msg">
                            <AlertCircle size={14} />
                            <span>{errors.preferredDate}</span>
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="preferredTimeSlot" className="form-label">
                          Time Session <span style={{ color: '#C53030' }}>*</span>
                        </label>
                        <select
                          id="preferredTimeSlot"
                          value={formData.preferredTimeSlot}
                          onChange={e => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                          className={`form-select ${errors.preferredTimeSlot ? 'error' : ''}`}
                          disabled={isSubmitting}
                        >
                          <option value="">Select session...</option>
                          <option value="Morning (9:30 AM – 1:00 PM)">Morning (9:30 AM – 1:00 PM)</option>
                          <option value="Evening (5:30 PM – 9:00 PM)">Evening (5:30 PM – 9:00 PM)</option>
                        </select>
                        {errors.preferredTimeSlot && (
                          <div className="form-error-msg">
                            <AlertCircle size={14} />
                            <span>{errors.preferredTimeSlot}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Treatment of Interest */}
                    <div className="form-group">
                      <label htmlFor="treatment" className="form-label">
                        Treatment of Interest
                      </label>
                      <select
                        id="treatment"
                        value={formData.treatment}
                        onChange={e => setFormData({ ...formData, treatment: e.target.value })}
                        className="form-select"
                        disabled={isSubmitting}
                      >
                        <option value="general">General Dental Consultation</option>
                        {TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>
                            {t.name}
                          </option>
                        ))}
                        <option value="unsure">Not sure yet / Need examination</option>
                      </select>
                    </div>

                    {/* Optional Message */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Additional Note (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="form-textarea"
                        placeholder="Briefly describe your symptoms or specific questions..."
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="form-group">
                      <label style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                          style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: 'var(--plum-primary)' }}
                          disabled={isSubmitting}
                        />
                        <span>
                          I consent to Smileworx Dental Care contacting me via phone or messaging regarding this appointment enquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.consent}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send size={16} style={{ color: 'var(--gold-signature)' }} />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.85rem' }}>
                      * Submitting this form initiates an enquiry. Your appointment slot is confirmed after our clinic team contacts you.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="headline-sub" style={{ color: 'var(--plum-deep)', marginBottom: '0.75rem' }}>
            Finding Smileworx in Ponniammanmedu
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 1.5rem auto', color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
            Our clinic is situated at 12/C Valliamman, Annapoorna Nagar Extension, directly accessible within Ponniammanmedu, North Chennai.
          </p>

          <a
            href={CLINIC_DATA.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <MapPin size={16} />
            <span>Open Google Maps Directions ({CLINIC_DATA.address.locationCode})</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
