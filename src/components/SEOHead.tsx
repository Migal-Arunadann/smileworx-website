import { useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  isTreatmentPage?: boolean;
}

export function SEOHead({ title, description, canonicalPath = '', isTreatmentPage = false }: SEOHeadProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical Link
    const canonicalUrl = `${CLINIC_DATA.canonicalDomain}${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const updateOG = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:url', canonicalUrl);
    updateOG('og:type', isTreatmentPage ? 'article' : 'website');
    updateOG('og:image', `${CLINIC_DATA.canonicalDomain}/images/brand/smileworx-logo.png`);

    // Structured Data (JSON-LD) for Local Dental Clinic
    const scriptId = 'smileworx-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      'name': CLINIC_DATA.name,
      'alternateName': CLINIC_DATA.tamilName,
      'description': description,
      'url': CLINIC_DATA.canonicalDomain,
      'logo': `${CLINIC_DATA.canonicalDomain}/images/brand/smileworx-logo.png`,
      'image': `${CLINIC_DATA.canonicalDomain}/images/clinic/clinic-operatory.jpg`,
      'telephone': CLINIC_DATA.contact.phoneTel,
      'medicalSpecialty': 'Dentistry',
      'founder': {
        '@type': 'Person',
        'name': CLINIC_DATA.doctor.name,
        'jobTitle': CLINIC_DATA.doctor.title
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '12/C Valliamman, Annapoorna Nagar Ext, Valliammai Nagar Extension',
        'addressLocality': 'Ponniammanmedu',
        'addressRegion': 'Chennai, Tamil Nadu',
        'postalCode': '600110',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'postalCode': '600110'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:30',
          'closes': '13:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '17:30',
          'closes': '21:00'
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(jsonLd);
  }, [title, description, canonicalPath, isTreatmentPage]);

  return null;
}
