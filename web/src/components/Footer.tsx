import { Link } from "react-router-dom";
import Logo, { ToothMark } from "./Logo";
import OpeningHours from "./OpeningHours";
import { CLINIC, NAV_LINKS, TREATMENTS } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <ToothMark size={40} variant="light" />
              <Logo variant="light" />
            </div>
            <p className="footer__tamil">{CLINIC.tamilName}</p>
            <address style={{ fontStyle: "normal", marginTop: "1rem", lineHeight: 1.8 }}>
              {CLINIC.addressLines.map((l) => (
                <span key={l}>{l}<br /></span>
              ))}
            </address>
          </div>

          <div>
            <h4>Pages</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Treatments</h4>
            <ul>
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <Link to={`/treatments#${t.id}`}>{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Visit the clinic</h4>
            <p style={{ margin: "0 0 0.9rem" }}>
              <a href={CLINIC.phoneHref} style={{ fontWeight: 700, color: "var(--gold-light)" }}>
                {CLINIC.phoneDisplay}
              </a>
            </p>
            <div style={{ opacity: 0.9 }}>
              <OpeningHours compact />
            </div>
            <p style={{ marginTop: "0.9rem", fontSize: "0.82rem", opacity: 0.7 }}>
              Location code: {CLINIC.plusCode}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {CLINIC.name}. All rights reserved.
          </span>
          <span>
            {CLINIC.dentist}, {CLINIC.dentistTitle} · Ponniammanmedu, Chennai
          </span>
        </div>
      </div>
    </footer>
  );
}
