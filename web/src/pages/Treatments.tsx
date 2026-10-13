import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import { CLINIC, MAPS_DIRECTIONS_URL, TREATMENTS } from "../data/site";

/**
 * Treatments — editorial guide. Each of the six signboard services gets a
 * substantial section with alternating image/text compositions (01 & 05 use
 * a wide banner treatment), plus a closing appointment CTA.
 */
export default function Treatments() {
  return (
    <>
      <Seo
        title="Dental Treatments | Smileworx Dental Care, Chennai"
        description="Braces, clear aligners, dental implants, dentures, veneers and crowns at Smileworx Dental Care, Ponniammanmedu, Chennai. What each treatment involves and who may consider it."
        path="/treatments"
        image="/images/treatments/braces.jpg"
      />

      {/* PAGE HEADER */}
      <section className="page-hero" aria-labelledby="tx-h">
        <div className="container tx-hero__grid">
          <div>
            <span className="breadcrumb">Treatments · Smileworx</span>
            <h1 id="tx-h" className="display-xl">
              Six things we do,{" "}
              <span className="accent">explained plainly.</span>
            </h1>
          </div>
          <p className="lede tx-hero__aside">
            Every treatment below begins with an examination and an honest
            conversation. What suits one patient may not suit another —
            suitability always depends on a professional assessment of your
            teeth, gums and bite.
          </p>
        </div>
      </section>

      {/* INDEX STRIP */}
      <nav className="tx-index" aria-label="Jump to a treatment">
        <div className="container tx-index__row">
          {TREATMENTS.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="tx-index__link">
              <span className="num">{t.index}</span>
              {t.name}
            </a>
          ))}
        </div>
      </nav>

      {/* SIX SECTIONS — varied compositions */}
      {TREATMENTS.map((t, i) => {
        const wide = i === 0 || i === 4; // Braces + Veneers get full-width imagery
        const flip = i % 2 === 1; // alternate text side for standard rows
        return (
          <section
            key={t.id}
            id={t.id}
            className={`tx-sec${wide ? " tx-sec--wide" : ""}`}
            aria-labelledby={`tx-${t.id}-h`}
          >
            <div className="container">
              {wide ? (
                /* WIDE COMPOSITION: full-bleed-ish figure above, offset text below */
                <>
                  <ScrollReveal mask className="figure tx-sec__figure tx-sec__figure--wide">
                    <img
                      src={t.image}
                      alt={t.alt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </ScrollReveal>
                  <div className="tx-sec__wide-grid">
                    <ScrollReveal>
                      <header className="tx-sec__head">
                        <p className="eyebrow">
                          <span className="num">{t.index}</span> {t.kicker}
                        </p>
                        <h2 id={`tx-${t.id}-h`} className="display-l">
                          {t.name}
                        </h2>
                        <hr className="rule-gold" />
                      </header>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                      <div className="tx-sec__body">
                        <p className="lede">{t.summary}</p>
                        <TreatmentFacts t={t} />
                        <EnquireLink id={t.id} name={t.name} />
                      </div>
                    </ScrollReveal>
                  </div>
                </>
              ) : (
                /* STANDARD COMPOSITION: asymmetric two-column, alternating sides */
                <div
                  className={`tx-sec__grid${flip ? " tx-sec__grid--flip" : ""}`}
                >
                  <ScrollReveal className="tx-sec__text">
                    <p className="eyebrow">
                      <span className="num">{t.index}</span> {t.kicker}
                    </p>
                    <h2 id={`tx-${t.id}-h`} className="display-l">
                      {t.name}
                    </h2>
                    <hr className="rule-gold" />
                    <p className="lede">{t.summary}</p>
                    <TreatmentFacts t={t} />
                    <EnquireLink id={t.id} name={t.name} />
                  </ScrollReveal>
                  <ScrollReveal
                    mask
                    delay={100}
                    className={`figure tx-sec__figure${
                      flip ? " figure--offset-left" : " figure--framed"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.alt}
                      width={1200}
                      height={1400}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="caption">
                      Illustrative image · {t.name.toLowerCase()} at Smileworx,{" "}
                      {CLINIC.addressShort}
                    </figcaption>
                  </ScrollReveal>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* DISCLAIMER STRIP */}
      <section className="section--tight" aria-label="A note on treatment suitability">
        <div className="container">
          <ScrollReveal>
            <div className="tx-note">
              <p style={{ margin: 0 }}>
                <strong>A note on expectations:</strong> no treatment is right
                for every patient. Braces, aligners, implants, dentures,
                veneers and crowns each have clinical indications — your dentist
                will tell you plainly whether an option is appropriate for your
                situation, and what it involves before anything begins.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band" aria-labelledby="tx-cta-h">
        <div className="container cta-band__inner">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>
              <span className="num">—</span> Next step
            </p>
            <h2 id="tx-cta-h" className="display-l" style={{ color: "var(--white)" }}>
              Not sure which treatment applies to you?{" "}
              <span style={{ color: "var(--gold)" }}>Start with a conversation.</span>
            </h2>
            <div className="cta-band__actions">
              <Link
                to="/contact?treatment=unsure"
                className="btn btn--gold"
              >
                Send an appointment enquiry
              </Link>
              <a href={CLINIC.phoneHref} className="btn btn--ghost">
                Call {CLINIC.phoneDisplay}
              </a>
            </div>
            <p className="caption" style={{ marginTop: "1.25rem", color: "rgba(250,247,240,.6)" }}>
              Mon–Sat · {CLINIC.hours.morning} &amp; {CLINIC.hours.evening} · Sunday{" "}
              {CLINIC.hours.sunday.toLowerCase()}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function TreatmentFacts({ t }: { t: (typeof TREATMENTS)[number] }) {
  return (
    <div className="tx-facts">
      <div className="tx-fact">
        <h3>What it involves</h3>
        <ul>
          {t.involves.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="tx-fact">
        <h3>Who may consider it</h3>
        <ul>
          {t.whoFor.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EnquireLink({ id, name }: { id: string; name: string }) {
  return (
    <p style={{ marginTop: "1.75rem" }}>
      <Link to={`/contact?treatment=${id}`} className="btn btn--ink">
        Enquire about {name}
      </Link>{" "}
      <a href={MAPS_DIRECTIONS_URL} className="textlink" target="_blank" rel="noopener noreferrer">
        Get directions <span className="arrow" aria-hidden="true">→</span>
      </a>
    </p>
  );
}
