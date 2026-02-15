import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Gurarpit Singh | Full-Stack & Backend Engineer",
  description: "Building scalable backends & intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden bg-background text-foreground`}>
        <Nav />
        <main>{children}</main>
        <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-black/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-black tracking-tighter">
                G<span className="text-primary">.</span>S
              </div>
              <p className="text-sm text-foreground/40 max-w-xs">
                Designing systems that bridge complexities with intelligent, human-centric solutions.
              </p>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/20">
              © 2026 Gurarpit Singh. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
