import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  type?: "website" | "article" | "business.business";
  image?: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  type = "website",
  image = "/og-image.jpg",
  canonical,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | PT. Budi Mulya Jaya - Kontraktor Aspal & Jalan`;
    document.title = fullTitle;

    // Helper to set meta tag
    const setMeta = (
      nameOrProperty: string,
      content: string,
      isProperty = false,
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${nameOrProperty}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Set Standard Meta Tags
    setMeta("description", description);

    // 3. Set Open Graph (OG) Meta Tags
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:image", image, true);
    const currentUrl = canonical || window.location.href;
    setMeta("og:url", currentUrl, true);
    setMeta("og:site_name", "PT. Budi Mulya Jaya", true);

    // 4. Set Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // 5. Set Canonical URL
    setLink("canonical", currentUrl);

    // 6. Inject Schema.org JSON-LD
    const existingSchemaScript = document.getElementById("seo-jsonld");
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    // Default schemas: Organization & LocalBusiness
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentContractor",
      "@id": "https://budimulyajaya.co.id/#organization",
      name: "PT. Budi Mulya Jaya",
      url: "https://budimulyajaya.co.id",
      logo: "https://budimulyajaya.co.id/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/pt-budi-mulya-jaya",
        "https://instagram.com/pt.budimulyajaya",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-811-XXXX-XXXX", // Fill with real phone
        contactType: "sales",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": "https://budimulyajaya.co.id/#localbusiness",
      name: "PT. Budi Mulya Jaya",
      image: image || "https://budimulyajaya.co.id/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Industri No. 45, Kawasan Industri Jababeka",
        addressLocality: "Bekasi",
        addressRegion: "Jawa Barat",
        postalCode: "17530",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.2858,
        longitude: 107.1706,
      },
      telephone: "+62-811-XXXX-XXXX",
      url: "https://budimulyajaya.co.id",
      priceRange: "$$$",
    };

    const combinedSchemas: Record<string, any>[] = [
      organizationSchema,
      localBusinessSchema,
    ];
    if (schema) {
      if (Array.isArray(schema)) {
        combinedSchemas.push(...schema);
      } else {
        combinedSchemas.push(schema);
      }
    }

    const script = document.createElement("script");
    script.id = "seo-jsonld";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(combinedSchemas);
    document.head.appendChild(script);

    return () => {
      // Clean up dynamic schema script on unmount
      const scriptToRemove = document.getElementById("seo-jsonld");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, type, image, canonical, schema]);

  return null;
}
