import { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: "Gurarpit",
        description: SITE_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0b",
        theme_color: "#0e0d0e",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
