const SITE_URL = "https://www.bara.capital";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolio`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
