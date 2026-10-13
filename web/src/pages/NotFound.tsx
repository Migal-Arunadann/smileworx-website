import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { CLINIC } from "../data/site";

/** Fallback route — not a primary page, no extra nav entry. */
export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${CLINIC.name}`}
        description="The page you requested could not be found."
        path="/"
      />
      <section className="page-hero section" aria-labelledby="nf-h" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <p className="eyebrow"><span className="num">—</span> Page not found</p>
          <h1 id="nf-h" className="display-l">This page seems to have drifted out of alignment.</h1>
          <p className="lede">Return to the homepage, or jump straight into treatments and contact.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link to="/" className="btn btn--gold">Back to home</Link>
            <Link to="/treatments" className="btn btn--outline">Treatments</Link>
            <Link to="/contact" className="btn btn--outline">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
