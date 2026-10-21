import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Clock } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Clinic Utility Bar */}
      <div style={{
        backgroundColor: 'var(--plum-deep)',
        color: 'var(--gold-light)',
        fontSize: '0.8rem',
        padding: '0.45rem 0',
        borderBottom: '1px solid rgba(216, 189, 99, 0.2)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#FAF7F0' }}>
              <span className="tamil-script" style={{ color: 'var(--gold-signature)', fontWeight: 600 }}>
                {CLINIC_DATA.tamilName}
              </span>
              <span style={{ opacity: 0.6, margin: '0 0.25rem' }}>·</span>
              <span>Ponniammanmedu, Chennai</span>
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', opacity: 0.85 }}>
              <Clock size={13} style={{ color: 'var(--gold-signature)' }} />
              <span>Mon–Sat: 9:30 AM–1 PM & 5:30–9 PM</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={`tel:${CLINIC_DATA.contact.phoneTel}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--gold-light)',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              <Phone size={13} style={{ color: 'var(--gold-signature)' }} />
              <span>{CLINIC_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 80,
          backgroundColor: isScrolled ? 'rgba(58, 20, 52, 0.98)' : 'var(--plum-primary)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: '1px solid rgba(223, 192, 102, 0.35)',
          transition: 'all var(--transition-smooth)',
          boxShadow: isScrolled ? '0 6px 24px rgba(39, 11, 34, 0.3)' : '0 2px 12px rgba(39, 11, 34, 0.15)'
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '72px' : '82px',
          transition: 'height var(--transition-smooth)'
        }}>
          {/* Logo & Brand Mark in Signature Gold */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
            aria-label="Smileworx Dental Care Homepage"
          >
            <img
              src="/images/brand/logo-gold.png"
              alt="Smileworx Dental Care Logo"
              style={{
                height: isScrolled ? '46px' : '52px',
                width: 'auto',
                transition: 'height var(--transition-smooth)'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.25rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link-dark ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions in Signature Gold */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem'
            }}
            className="desktop-actions"
          >
            <Link to="/contact" className="btn btn-gold" style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}>
              <Calendar size={15} style={{ color: '#270B22' }} />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'rgba(223, 192, 102, 0.12)',
              border: '1px solid rgba(223, 192, 102, 0.35)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--gold-signature)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--plum-deep)',
              borderBottom: '2px solid var(--gold-signature)',
              boxShadow: '0 20px 35px rgba(26, 7, 22, 0.65)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 99
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--gold-signature)' : '#FAF7F0',
                      backgroundColor: isActive ? 'rgba(223, 192, 102, 0.12)' : 'transparent',
                      borderLeft: isActive ? '3px solid var(--gold-signature)' : '3px solid transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(223, 192, 102, 0.25)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${CLINIC_DATA.contact.phoneTel}`}
                className="btn btn-outline-light"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={16} style={{ color: 'var(--gold-signature)' }} />
                <span>Call {CLINIC_DATA.contact.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="btn btn-gold"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={16} style={{ color: '#270B22' }} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Responsive media query helper for desktop-only display */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
