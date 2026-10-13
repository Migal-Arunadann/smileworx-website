import { useEffect } from "react";
import { CLINIC, SITE_URL, TREATMENTS } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/treatments"
  image?: string;
  /** render LocalBusiness dental-clinic JSON-LD (home page) */
  clinicSchema?: boolean;
};

export default function Seo({
  title,
  description,
  path,
  image = "/images/hero/consultation.jpg",
  clinicSchema = false,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("property", "og:image", `${SITE_URL}${image}`);
    setMeta("property", "og:site_name", CLINIC.name);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", `${SITE_URL}${image}`);

    // canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${path}`;

    // remove previous page-level JSON-LD, keep any persistent one
    document.head
      .querySelectorAll('script[data-seo="page"]')
      .forEach((s) => s.remove());

    if (clinicSchema) {
      const graph = buildClinicGraph();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "page";
      script.textContent = JSON.stringify(graph);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, clinicSchema]);

  return null;
}

function buildClinicGraph() {
  const TREATMENT_LIST = TREATMENTS.map((t) => ({
    "@type": "MedicalProcedure",
    name: t.name,
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${SITE_URL}/#clinic`,
        name: CLINIC.name,
        alternateName: CLINIC.tamilName,
        description:
          "Dental clinic in Ponniammanmedu, Chennai offering braces, clear aligners, dental implants, dentures, veneers and crowns.",
        url: `${SITE_URL}/`,
        telephone: "+91-9360553755",
        image: `${SITE_URL}/images/hero/consultation.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "12/C Valliamman, Annapoorna Nagar Ext, Valliammai Nagar Extension",
          addressLocality: "Ponniammanmedu, Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600110",
          addressCountry: "IN",
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${CLINIC.mapsQuery}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "13:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "17:30",
            closes: "21:00",
          },
        ],
        availableService: TREATMENT_LIST,
      },
      {
        "@type": "Physician",
        "@id": `${SITE_URL}/#dentist`,
        name: CLINIC.dentist,
        title: CLINIC.dentistTitle,
        medicalArea: "Dentistry",
        worksFor: { "@id": `${SITE_URL}/#clinic` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: CLINIC.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#clinic` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        ],
      },
    ],
  };
}
