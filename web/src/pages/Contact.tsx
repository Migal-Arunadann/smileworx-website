import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";
import OpeningHours from "../components/OpeningHours";
import { CLINIC, MAPS_DIRECTIONS_URL, MAPS_PLACE_SEARCH_URL } from "../data/site";

export default function Contact() {
  const [params] = useSearchParams();
  const treatmentParam = params.get("treatment") ?? undefined;

  const [copied, setCopied] = useState<"idle" | "done" | "fail">("idle");

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CLINIC.addressOneLine);
      setCopied("done");
    } catch {
      setCopied("fail");
    }
    window.setTimeout(() => setCopied("idle"), 2500);
  };

  return (
    <>
      <Seo
        title="Contact Smileworx Dental Care | Chennai"
        description="Contact Smileworx Dental Care, Ponniammanmedu, Chennai. Call +91 93605 53755, view opening hours and directions, or send an appointment enquiry to Dr. S. Helen Joice, Dental Surgeon."
        path="/contact"
        image="/images/clinic/reception.jpg"
      />

      <section className="page-hero" aria-labelledby="contact-h">
        <div className="container">
          <span className="breadcrumb">Contact · Smileworx</span>
          <h1 id="contact-h" className="display-xl">
            Two sessions a day.{" "}
            <span style={{ color: "var(--plum)" }}>One call away.</span>
          </h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Reach the clinic by phone during working hours, get directions from Google
            Maps, or send an appointment enquiry using the form below.
          </p>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: "clamp(4rem,8vw,7rem)" }}>
        <div className="container contact-grid">
          {/* left column — practical details */}
          <div>
            <ScrollReveal>
              <div className="info-block">
                <h3>Clinic</h3>
                <p style={{ fontWeight: 700, color: "var(--plum)", fontSize: "1.1rem" }}>
                  {CLINIC.name}
                </p>
                <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>
                  {CLINIC.dentist} · {CLINIC.dentistTitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="info-block">
                <h3>Address</h3>
                <address>{CLINIC.addressLines.map((l) => (<span key={l}>{l}<br /></span>))}</address>
                <p className="caption" style={{ marginTop: ".5rem" }}>
                  Plus code: {CLINIC.plusCode}
                </p>
                <button type="button" className="copy-btn" onClick={copyAddress}>
                  {copied === "done"
                    ? "Address copied ✓"
                    : copied === "fail"
                      ? "Copy failed — select manually"
                      : "Copy address"}
                </button>
                <span aria-live="polite" className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                  {copied === "done" ? "Clinic address copied to clipboard" : ""}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="info-block">
                <h3>Phone</h3>
                <p style={{ margin: 0 }}>
                  <a
                    href={CLINIC.phoneHref}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.6rem",
                      color: "var(--plum)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 44,
                    }}
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </p>
                <p className="caption" style={{ marginTop: ".4rem" }}>
                  Tap to call — lines open during session hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="info-block">
                <h3>Opening hours</h3>
                <OpeningHours compact />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="info-block">
                <h3>Maps</h3>
                <div style={{ display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--plum"
                    style={{ minHeight: 44 }}
                  >
                    Get directions
                  </a>
                  <a
                    href={MAPS_PLACE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                    style={{ minHeight: 44 }}
                  >
                    View in Google Maps
                  </a>
                </div>
                <p className="caption" style={{ marginTop: ".8rem" }}>
                  A lightweight embedded map is intentionally avoided; links above open
                  Google Maps at the verified address.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* right column — enquiry form */}
          <ScrollReveal delay={80}>
            <ContactForm initialTreatment={treatmentParam} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
