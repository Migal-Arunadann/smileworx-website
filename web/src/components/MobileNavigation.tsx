import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CLINIC, NAV_LINKS } from "../data/site";

type Props = { open: boolean; onClose: () => void };

export default function MobileNavigation({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-drawer"
      className={`mobile-drawer${open ? " is-open" : ""}`}
      aria-hidden={!open}
    >
      <div className="mobile-drawer__scrim" onClick={onClose} />
      <div
        className="mobile-drawer__panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="mobile-drawer__top">
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.3rem",
              color: "var(--gold)",
            }}
          >
            Smileworx
          </span>
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close navigation menu"
            onClick={onClose}
            ref={closeRef}
          >
            ✕
          </button>
        </div>

        <nav aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} tabIndex={open ? 0 : -1}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <Link to="/contact" className="btn btn--gold" tabIndex={open ? 0 : -1}>
            Book an Appointment
          </Link>
          <a
            className="mobile-drawer__phone"
            href={CLINIC.phoneHref}
            tabIndex={open ? 0 : -1}
          >
            {CLINIC.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
