import { Link } from "react-router-dom";
import { CLINIC } from "../data/site";

/** Compact fixed action bar for small screens. Hidden on desktop. */
export default function MobileActionBar() {
  return (
    <div className="mobile-bar" role="group" aria-label="Quick actions">
      <a className="btn btn--outline-light" href={CLINIC.phoneHref}>
        Call Clinic
      </a>
      <Link to="/contact" className="btn btn--gold">
        Enquire
      </Link>
    </div>
  );
}
