import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo, { ToothMark } from "./Logo";
import MobileNavigation from "./MobileNavigation";
import { CLINIC, NAV_LINKS } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // close drawer on route change
  useEffect(() => setDrawerOpen(false), [location.pathname]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <Link to="/" className="logo-link" aria-label={`${CLINIC.name} — home`}>
            <ToothMark size={42} />
            <Logo />
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={CLINIC.phoneHref}>
              {CLINIC.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn--gold">
              Book an Appointment
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <path d="M2 5h18M2 11h18M2 17h18" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
