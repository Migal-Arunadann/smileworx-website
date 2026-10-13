import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import OpeningHours from "../components/OpeningHours";
import { CLINIC, MAPS_DIRECTIONS_URL, TREATMENTS } from "../data/site";

export default function Home() {
  return (
    <>
      <Seo
        title="Smileworx Dental Care | Dental Clinic in Ponniammanmedu, Chennai"
        description="Dental clinic in Ponniammanmedu, Chennai. Dr. S. Helen Joice, Dental Surgeon. Braces, clear aligners, dental implants, dentures, veneers and crowns. Call +91 93605 53755."
        path="/"
        image="/images/hero/consultation.jpg"
        clinicSchema
      />

      {/* B — HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero__grid">
          <div>
            <p className="hero__id">Dental clinic · Ponniammanmedu, Chennai</p>
            <h1 id="hero-heading" className="display-xl">
              Care for your smile.{" "}
              <span className="accent">Confidence in every detail.</span>
            </h1>
            <p className="hero__copy">
              Smileworx Dental Care is a neighbourhood practice led by {CLINIC.dentist},{" "}
              {CLINIC.dentistTitle.toLowerCase()} — from routine check-ups to
              orthodontics, implants and aesthetic restorations.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn btn--gold">
                Book an Appointment
              </Link>
              <Link to="/treatments" className="btn btn--outline">
                Explore Treatments
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__edge" aria-hidden="true" />
            <ScrollReveal mask className="figure hero__figure figure--framed">
              <img
                src="/images/hero/consultation.jpg"
                alt="A dentist explaining a treatment plan to a patient during a dental consultation — illustrative photograph"
                width={1200}
                height={1500}
                fetchPriority="high"
                decoding="async"
              />
            </ScrollReveal>
            <div className="hero__badge">
              <strong>{CLINIC.dentist}</strong>
              <span>{CLINIC.dentistTitle}</span>
            </div>
          </div>
        </div>
      </section>

      {/* C — CLINIC INTRODUCTION */}
      <section className="section section--cream intro" aria-labelledby="intro-heading">
        <div className="container intro__grid">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">01</span> The practice
            </p>
            <h2 id="intro-heading" className="display-l" style={{ color: "var(--plum)" }}>
              A calm, considered approach to dentistry — close to home.
            </h2>
            <hr className="rule-gold" />
            <p className="lede">
              Smileworx serves families around Ponniammanmedu and Anna Nagar East with
              general, orthodontic and restorative dental care. Appointments run in two
              daily sessions, so school mornings, working hours and evening slots all
              have room.
            </p>
            <p style={{ maxWidth: "56ch", color: "var(--ink-soft)" }}>
              Every visit starts with understanding the concern — what hurts, what
              bothers you when you smile, what you want changed — before any treatment
              is discussed. Options are explained plainly, and decisions are made
              together.
            </p>
            <p style={{ marginTop: "1.8rem" }}>
              <Link to="/about" className="textlink">
                More about the clinic <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="intro__stack">
              <figure className="figure figure--tall" style={{ margin: 0 }}>
                <img
                  src="/images/clinic/reception.jpg"
                  alt="Clinic reception area with warm plum and cream interiors — placeholder image pending genuine clinic photography"
                  width={800}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="figure figure--square" style={{ margin: 0 }}>
                <img
                  src="/images/clinic/instruments.jpg"
                  alt="Arranged dental instruments on a tray prepared for a routine examination — placeholder image"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <p className="caption" style={{ marginTop: "0.8rem" }}>
              Interiors shown are placeholders — genuine clinic photographs will replace
              these images.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* D — TREATMENTS PREVIEW */}
      <section className="section" aria-labelledby="tp-heading">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">02</span> What we treat
            </p>
            <h2 id="tp-heading" className="display-l" style={{ color: "var(--plum)" }}>
              Six core treatments, explained without the jargon.
            </h2>
          </ScrollReveal>

          <div className="tp-feature" style={{ marginTop: "clamp(2rem,5vw,3.5rem)" }}>
            <ScrollReveal mask className="figure tp-feature__figure">
              <img
                src="/images/treatments/braces.jpg"
                alt={TREATMENTS[0].alt}
                width={1400}
                height={875}
                loading="lazy"
                decoding="async"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="small-label" style={{ color: "var(--gold-dark)", marginBottom: ".6rem" }}>
                Featured · Orthodontics
              </p>
              <h3 className="display-m" style={{ color: "var(--plum)" }}>
                Straighter teeth are rarely only about looks.
              </h3>
              <p style={{ color: "var(--ink-soft)" }}>
                Crowding and bite problems affect cleaning, wear and comfort as much as
                appearance. Braces and clear aligners are the two main routes — and
                which one fits depends on the case, assessed clinically at the clinic.
              </p>
              <Link to="/treatments#braces" className="textlink">
                Read about braces &amp; aligners{" "}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="tp-list">
            {TREATMENTS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 40}>
                <Link to={`/treatments#${t.id}`} className="tp-row">
                  <span className="tp-row__num" aria-hidden="true">
                    {t.index}
                  </span>
                  <span>
                    <span className="tp-row__kicker">{t.kicker}</span>
                    <span className="tp-row__title">{t.name}</span>
                  </span>
                  <p className="tp-row__blurb">{t.homeBlurb}</p>
                  <span className="tp-row__go">
                    Details <span className="arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* E — BEFORE AND AFTER */}
      <section className="section section--dark" aria-labelledby="ba-heading">
        <div className="container ba-shell">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">03</span> Alignment, illustrated
            </p>
            <h2 id="ba-heading" className="display-l" style={{ color: "var(--white)" }}>
              Drag the line. See what alignment work can change.
            </h2>
            <hr className="rule-gold" />
            <p className="lede">
              This comparison shows a plausible improvement in tooth position — the kind
              of outcome orthodontic and cosmetic treatment aims for in suitable cases.
            </p>
            <p className="caption" style={{ marginTop: "1rem" }}>
              Illustrative comparison. Individual treatment outcomes vary. These images
              do not show a Smileworx patient or a verified clinic result.
            </p>
            <p style={{ marginTop: "1.6rem" }}>
              <Link
                to="/treatments#clear-aligners"
                className="textlink"
                style={{ color: "var(--gold-light)", borderColor: "rgba(233,214,154,.4)" }}
              >
                How aligners work <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <BeforeAfterSlider
              beforeSrc="/images/comparisons/before.jpg"
              afterSrc="/images/comparisons/after.jpg"
              beforeAlt="Illustrative before image: a smile with mildly crowded upper front teeth."
              afterAlt="Illustrative after image: the same smile with improved tooth alignment."
              width={1200}
              height={800}
            />
            <div className="ba__note">
              <span className="caption">
                Use the handle — drag with mouse or finger, or focus it and use arrow keys.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* F — GALLERY */}
      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">04</span> Inside the clinic
            </p>
            <h2 id="gallery-heading" className="display-l" style={{ color: "var(--plum)" }}>
              The space where the work happens.
            </h2>
            <p className="caption" style={{ marginBottom: "2.5rem" }}>
              Placeholder imagery for now — genuine photographs of the Smileworx
              premises will be inserted here.
            </p>
          </ScrollReveal>

          <div className="gallery">
            <ScrollReveal mask className="g-a">
              <figure>
                <img
                  src="/images/clinic/op-chair.jpg"
                  alt="Dental operator chair and unit in a treatment room — placeholder image"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Treatment room</figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal mask delay={80} className="g-b">
              <figure>
                <img
                  src="/images/clinic/sterilisation.jpg"
                  alt="Sterilisation area with instrument pouches ready for processing — placeholder image"
                  width={900}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Sterilisation</figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal mask delay={60} className="g-c">
              <figure>
                <img
                  src="/images/clinic/waiting.jpg"
                  alt="Waiting area with comfortable seating — placeholder image"
                  width={1000}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Waiting area</figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal mask delay={120} className="g-d">
              <figure>
                <img
                  src="/images/clinic/examination.jpg"
                  alt="Dentist examining a patient with a mouth mirror and light — placeholder image"
                  width={1600}
                  height={920}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Examination</figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* G — LOCATION & HOURS */}
      <section className="section section--deep" aria-labelledby="loc-heading">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">05</span> Visit us
            </p>
            <h2 id="loc-heading" className="display-l" style={{ color: "var(--white)" }}>
              Find Smileworx in Ponniammanmedu.
            </h2>
          </ScrollReveal>

          <div className="loc__grid" style={{ marginTop: "clamp(2rem,5vw,3.5rem)" }}>
            <ScrollReveal>
              <div className="loc__block">
                <h3 style={{ color: "var(--gold)" }}>Address</h3>
                <address style={{ fontStyle: "normal", lineHeight: 1.9 }}>
                  {CLINIC.addressLines.map((l) => (
                    <span key={l}>{l}<br /></span>
                  ))}
                </address>
                <p className="caption" style={{ marginTop: "0.8rem" }}>
                  Location code: {CLINIC.plusCode}
                </p>
                <p style={{ marginTop: "1.2rem" }}>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="textlink"
                    style={{ color: "var(--gold-light)", borderColor: "rgba(233,214,154,.4)" }}
                  >
                    Get directions <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="loc__block">
                <h3 style={{ color: "var(--gold)" }}>Opening hours</h3>
                <OpeningHours />
                <p className="caption" style={{ marginTop: "0.9rem" }}>
                  Two sessions daily, Monday to Saturday.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="loc__block">
                <h3 style={{ color: "var(--gold)" }}>Speak to the clinic</h3>
                <p style={{ lineHeight: 1.9 }}>
                  <a
                    href={CLINIC.phoneHref}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.5rem",
                      color: "var(--white)",
                      textDecoration: "none",
                    }}
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </p>
                <p style={{ color: "rgba(242,235,221,.75)" }}>
                  Call during session hours, or send an appointment enquiry online.
                </p>
                <p style={{ marginTop: "1.2rem" }}>
                  <Link to="/contact" className="btn btn--gold">
                    Appointment enquiry
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* H — FINAL CTA */}
      <section className="section final-cta" aria-labelledby="cta-heading">
        <div className="container final-cta__inner">
          <ScrollReveal>
            <h2 id="cta-heading" className="display-l" style={{ color: "var(--white)" }}>
              Ready for a proper look, a clear explanation, and a plan?
            </h2>
            <p className="lede" style={{ color: "var(--gold-light)" }}>
              Send an enquiry or call the clinic directly — morning and evening slots
              are available Monday to Saturday.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="actions">
              <a href={CLINIC.phoneHref} className="btn btn--gold">
                Call {CLINIC.phoneDisplay}
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-light"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
