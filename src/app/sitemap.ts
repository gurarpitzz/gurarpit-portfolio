import { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/mdx";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const slugs = getAllProjectSlugs();

    const projectEntries: MetadataRoute.Sitemap = slugs.map((s) => ({
        url: `${SITE_URL}/projects/${s.params.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        ...projectEntries,
    ];
}
