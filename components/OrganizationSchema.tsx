import { siteConfig } from "@/config/site";

export const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.organization.name,
          legalName: siteConfig.organization.legalName,
          url: siteConfig.url,
          logo: `${siteConfig.url}${siteConfig.organization.logo}`,
          address: {
            "@type": "PostalAddress",
            ...siteConfig.organization.address,
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
          },
        }),
      }}
    />
  );
};
