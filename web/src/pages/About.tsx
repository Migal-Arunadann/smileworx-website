import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import OpeningHours from "../components/OpeningHours";
import { CLINIC, MAPS_DIRECTIONS_URL, TREATMENTS } from "../data/site";

/**
 * About — text-led profile of the clinic and its dentist. No fabricated
 * history, qualifications or statistics; no fake portrait. Clinic imagery
 * used here is illustrative until genuine photographs are supplied.
 */
export default function About() {
  return (
    <>
      <Seo
        title="About Smileworx Dental Care | Ponniammanmedu, Chennai"
        description="Smileworx Dental Care is a dental clinic in Ponniammanmedu, Chennai, led by Dr. S. Helen Joice, Dental Surgeon. Learn about the practice, its approach and its services."
        path="/about"
        image="/images/clinic/op-chair.jpg"
      />

      {/* HEADER */}
      <section className="page-hero" aria-labelledby="about-h">
        <div className="container">
          <span className="breadcrumb">About · Smileworx</span>
          <h1 id="about-h" className="display-xl">
            Thoughtful care begins with{" "}
            <span className="accent">understanding you.</span>
          </h1>
          <p className="lede" style={{ marginTop: "1.25rem", maxWidth: "46ch" }}>
            A short introduction to who we are, where we practise, and how an
            appointment at Smileworx typically unfolds.
          </p>
        </div>
      </section>

      {/* 01 — THE PRACTICE */}
      <section className="section" aria-labelledby="about-practice-h">
        <div className="container intro__grid">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">01</span> The practice
            </p>
            <h2 id="about-practice-h" className="display-m">
              A neighbourhood dental clinic in Ponniammanmedu
            </h2>
            <hr className="rule-gold" />
            <p>
              {CLINIC.name} ({CLINIC.tamilName}) is a dental clinic on{" "}
              {CLINIC.addressLines[0]} in {CLINIC.addressShort}. The practice
              covers general dentistry alongside orthodontics, implants and
              aesthetic restorations — the treatments listed on our signboard
              and detailed on this website.
            </p>
            <p>
              We see patients across two daily sessions, Monday to Saturday, so
              that appointments can fit around school and working hours. Sunday
              the clinic is closed.
            </p>
            <p className="caption">
              Clinic images on this page are placeholders for now and will be
              replaced with genuine photographs of the premises.
            </p>
          </ScrollReveal>

          <ScrollReveal mask delay={120} className="intro__stack">
            <figure className="figure figure--tall figure--framed">
              <img
                src="/images/clinic/op-chair.jpg"
                alt="Dental operator chair and unit in a bright treatment room — placeholder image pending genuine clinic photography"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="figure figure--square">
              <img
                src="/images/clinic/waiting.jpg"
                alt="Patient waiting area of a dental clinic — placeholder image pending genuine clinic photography"
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 — DENTIST PROFILE (text-led) */}
      <section className="section section--dark" aria-labelledby="about-dentist-h">
        <div className="container about-profile">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>
              <span className="num">02</span> Your dentist
            </p>
            <h2 id="about-dentist-h" className="display-l" style={{ color: "var(--white)" }}>
              {CLINIC.dentist}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                color: "var(--gold)",
                margin: "0.35rem 0 1.4rem",
              }}
            >
              {CLINIC.dentistTitle}
            </p>
            <hr className="rule-gold" />
            <p style={{ color: "rgba(250,247,240,.82)", maxWidth: "58ch" }}>
              {CLINIC.dentist} leads Smileworx Dental Care and personally
              handles consultations and treatment through both daily sessions.
              Appointments begin with an examination and a plain-language
              discussion of your dental concerns — what was found, what the
              realistic options are, and what each would involve before any
              treatment starts.
            </p>
            <p style={{ color: "rgba(250,247,240,.82)", maxWidth: "58ch" }}>
              If a concern falls outside what the clinic treats, we say so and
              suggest where you can be referred. We believe being straight with
              patients is part of good dentistry.
            </p>
            <p style={{ marginTop: "1.75rem" }}>
              <Link to="/contact" className="btn btn--gold">
                Speak with the clinic
              </Link>
            </p>
          </ScrollReveal>

          {/* Deliberately text-led: no portrait is shown until an authentic photograph is supplied */}
          <ScrollReveal delay={120}>
            <div className="about-monogram" aria-hidden="true">
              <span className="about-monogram__ring" />
              <span className="about-monogram__initials">SHJ</span>
              <span className="about-monogram__label">
                Dentist profile · portrait to follow
              </span>
            </div>
            <p className="caption" style={{ color: "rgba(250,247,240,.55)", textAlign: "center", marginTop: "1rem" }}>
              A genuine portrait will appear here once one is available.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 03 — HOW AN APPOINTMENT WORKS */}
      <section className="section" aria-labelledby="about-visit-h">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="num">03</span> What to expect
            </p>
            <h2 id="about-visit-h" className="display-m">
              An appointment, step by step
            </h2>
            <hr className="rule-gold" />
          </ScrollReveal>

          <ol className="about-steps">
            {[
              {
                n: "i",
                t: "You reach out",
                d: "Call during working hours or send an appointment enquiry through the contact page. The clinic confirms a slot within the morning or evening session.",
              },
              {
                n: "ii",
                t: "Examination",
                d: "The visit opens with a clinical examination of your teeth and gums. Depending on the concern, additional records may be advised at the dentist's discretion.",
              },
              {
                n: "iii",
                t: "Discussion of options",
                d: "Findings are explained in plain terms, along with the realistic treatment choices, what each involves, and whether the case suits the treatments offered here.",
              },
              {
                n: "iv",
                t: "Treatment, at your pace",
                d: "Nothing proceeds without your consent. Multi-stage treatments such as braces or aligners continue with scheduled review visits.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <li className="about-step">
                  <span className="about-step__num">{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 — SERVICES + HOURS STRIP */}
      <section className="section--tight" aria-labelledby="about-scope-h">
        <div className="container loc__grid">
          <ScrollReveal>
            <h2 id="about-scope-h" className="display-m">
              Treatments offered
            </h2>
            <hr className="rule-gold" />
            <ul className="about-scope">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <Link to={`/treatments#${t.id}`}>
                    <span className="num">{t.index}</span> {t.name}
                    <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1.25rem" }}>
              Alongside these, routine check-ups, cleaning and general dental
              care are part of everyday practice at the clinic.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h2 className="display-m">Opening hours</h2>
            <hr className="rule-gold" />
            <OpeningHours />
            <address className="loc__block" style={{ marginTop: "1.5rem" }}>
              {CLINIC.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <br />
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get directions · Plus code {CLINIC.plusCode}
              </a>
            </address>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="final-cta" aria-labelledby="about-cta-h">
        <div className="container final-cta__inner">
          <ScrollReveal>
            <h2 id="about-cta-h" className="display-l" style={{ color: "var(--white)" }}>
              Have a dental concern?{" "}
              <span style={{ color: "var(--gold)" }}>Tell us about it first.</span>
            </h2>
            <p style={{ color: "rgba(250,247,240,.75)", maxWidth: "52ch", marginTop: "1rem" }}>
              Send an enquiry or call {CLINIC.phoneDisplay} during clinic hours —
              morning or evening session, Monday to Saturday.
            </p>
            <div className="hero__cta" style={{ marginTop: "1.75rem" }}>
              <Link to="/contact" className="btn btn--gold">
                Appointment enquiry
              </Link>
              <a href={CLINIC.phoneHref} className="btn btn--outline-light">
                Call the clinic
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
