export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "automify.in",
    url: "https://automify.in",
    logo: "https://automify.in/logo.png",
    description: "Enterprise-grade engineering meets startup speed. We build and scale MVPs for startups and small businesses.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98706-33671",
      contactType: "Customer Service",
      email: "contact@automify.in",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add your social media profiles here
      // "https://twitter.com/automify",
      // "https://linkedin.com/company/automify",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development & Consulting",
    provider: {
      "@type": "Organization",
      name: "automify.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: "Custom software development, AI solutions, MVP development, and growth strategies for startups and small businesses.",
    offers: {
      "@type": "Offer",
      description: "End-to-end software development and consulting services",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "automify.in",
    url: "https://automify.in",
    description: "Build & Scale MVPs with enterprise-grade engineering",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://automify.in/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does automify.in offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer end-to-end software development services including web applications, mobile apps, AI agents & automation, business digitization, custom websites, MVP development, growth strategy, SEO optimization, paid advertising, conversion optimization, lead generation, and analytics & insights.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use agile methodology with 2-week sprint cycles to deliver working features rapidly. MVP development typically takes 4-12 weeks depending on complexity.",
        },
      },
      {
        "@type": "Question",
        name: "What is the experience level of your engineers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team consists of senior engineers from Top MNCs, Amazon, and Silicon Valley Startups with 10+ years average industry experience per engineer. They've built products used by billions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide post-launch support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, post-launch support and maintenance are included in our services. We ensure your product continues to perform optimally after launch.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
