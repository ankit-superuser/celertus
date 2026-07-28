import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object | object[];
  noIndex?: boolean;
}

const DOMAIN = "https://celertus.germanysoon.com";
const DEFAULT_IMAGE = `${DOMAIN}/social-preview.png`;

export const SEO = ({
  title,
  description,
  keywords = "AI solutions, software development, cloud architecture, mobile app development, web development, digital transformation, microservices, celertus",
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema,
  noIndex = false,
}: SEOProps) => {
  const pageTitle = title.includes("Celertus") ? title : `${title} | Celertus.ai`;
  const currentCanonical = canonicalUrl ? `${DOMAIN}${canonicalUrl}` : DOMAIN;

  useEffect(() => {
    // Update Title
    document.title = pageTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (nameAttr: string, nameValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Meta Description & Keywords
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", "Celertus.ai");
    
    // Robots tag for non-indexed pages (e.g. 404)
    if (noIndex) {
      updateMetaTag("name", "robots", "noindex, nofollow");
    } else {
      updateMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    // Canonical URL
    updateLinkTag("canonical", currentCanonical);

    // Open Graph Tags
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", ogType);
    updateMetaTag("property", "og:url", currentCanonical);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:site_name", "Celertus.ai");

    // Twitter Card Tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", pageTitle);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", ogImage);

    // Inject JSON-LD Schema
    let scriptElement: HTMLScriptElement | null = document.querySelector("script#json-ld-schema");
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "json-ld-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [pageTitle, description, keywords, currentCanonical, ogType, ogImage, schema, noIndex]);

  return null;
};

export default SEO;
