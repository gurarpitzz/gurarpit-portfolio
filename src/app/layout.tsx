import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import IntroGate from "@/components/layout/IntroGate";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });

import { SITE_NAME, SITE_ROLE, SITE_DESCRIPTION, SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_ROLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["Backend Developer", "Machine Learning", "Data Systems", "Semantic Search", "Portfolio"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} | ${SITE_ROLE}`,
    description: "Building reliable backend systems and data-driven decision-support tools.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Backend & ML Systems`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_ROLE}`,
    description: "Building backend-driven ML and data systems focused on decision support.",
    images: [OG_IMAGE],
    creator: "@GurarpitS66760",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics gaId="G-W8CHP25CZN" />
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden bg-[#0a0a0b] text-foreground`}>
        <IntroGate>
          <Nav />
          <main>{children}</main>
          <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="text-xl font-bold tracking-tighter text-white">
                  GS<span className="text-primary">.</span>
                </div>
                <p className="text-[12px] font-medium text-foreground/30 max-w-xs leading-relaxed">
                  Building reliable backend systems and extracting meaning from data.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/20">
                  © 2026 Gurarpit Singh // All Rights Reserved
                </p>
                <p className="text-[9px] font-mono text-foreground/10 uppercase tracking-widest">
                  Built with Next.js & Framer Motion
                </p>
              </div>
            </div>
          </footer>
        </IntroGate>
      </body>
    </html>
  );
}
