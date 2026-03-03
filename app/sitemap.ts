import { MetadataRoute } from "next";
import { products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stackduel.com";

  // Categories
  const categories = Array.from(new Set(products.map((p) => p.category.toLowerCase().replace(" ", "-"))));
  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/best/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Top Comparisons
  const topComparisons = [
    { a: "hubspot", b: "salesforce" },
    { a: "asana", b: "trello" },
    { a: "monday-pm", b: "clickup" },
    { a: "pipedrive", b: "zoho-crm" },
    { a: "notion", b: "asana" },
  ];
  const comparisonUrls = topComparisons.map((comp) => ({
    url: `${baseUrl}/compare/${comp.a}/vs/${comp.b}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryUrls,
    ...comparisonUrls,
  ];
}
