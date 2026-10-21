import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" role="region" aria-label="Quick mobile clinic actions">
      <a
        href={`tel:${CLINIC_DATA.contact.phoneTel}`}
        className="btn btn-secondary"
        style={{
          flex: 1,
          padding: '0.65rem 0.5rem',
          fontSize: '0.8rem',
          minHeight: '44px',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Phone size={15} style={{ color: 'var(--plum-primary)' }} />
        <span>Call Clinic</span>
      </a>

      <Link
        to="/contact"
        className="btn btn-gold"
        style={{
          flex: 1.2,
          padding: '0.65rem 0.5rem',
          fontSize: '0.8rem',
          minHeight: '44px',
          justifyContent: 'center'
        }}
      >
        <Calendar size={15} style={{ color: '#270B22' }} />
        <span>Enquire Now</span>
      </Link>
    </div>
  );
}
