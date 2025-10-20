import { siteConfig } from '@/lib/config'

export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.siteName,
    "url": siteConfig.baseUrl,
    "description": "Discover the best air fryer recipes that actually work! Kitchen-tested recipes for chicken, vegetables, desserts, and more. Quick, easy, and delicious air frying recipes.",
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "url": siteConfig.baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.baseUrl}/logo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.baseUrl}/recipes?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/bestairfryerrecipes",
      "https://www.instagram.com/bestairfryerrecipes",
      "https://www.pinterest.com/bestairfryerrecipes"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
