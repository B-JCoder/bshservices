import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bshsolutionss.com",
      lastModified: new Date(),
    },
    {
      url: "https://bshsolutionss.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://bshsolutionss.com/Services/development",
      lastModified: new Date(),
    },
    {
      url: "https://bshsolutionss.com/Services/designing",
      lastModified: new Date(),
    },
    {
      url: "https://bshsolutionss.com/Services/marketing",
      lastModified: new Date(),
    },
    {
      url: "https://bshsolutionss.com/Services/photography",
      lastModified: new Date(),
    },
  ];
}
