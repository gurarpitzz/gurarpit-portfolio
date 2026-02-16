"use client";
import { useState, useMemo } from "react";

import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import ProjectCard from "@/components/ui/ProjectCard";
import Skills from "@/components/layout/Skills";
import Journey from "@/components/layout/Journey";
import Contact from "@/components/layout/Contact";

const projects = [
  {
    title: "VibroBraille",
    description: "Braille-First AI Reading Interface designed for sequential vibration patterns on smartphones. Translates semantic meaning into tactile signals.",
    tags: ["Accessibility", "Signal Encoding", "Python"],
    link: "/projects/vibrobraille",
    github: "https://github.com/gurarpitzz/Vibrobraille-hybrid",
    image: "/projects/vibrobraille.jpg",
    category: "Signal Processing"
  },
  {
    title: "AETHER",
    description: "Autonomous, AI-driven cyber defense system that shifts security from passive detection to active deception using digital DNA and reinforcement learning.",
    tags: ["Cybersecurity", "AI", "Honeypot"],
    link: "/projects/aether",
    github: "https://github.com/gurarpitzz/AETHER-Smart-Honeypot",
    image: "/projects/aether.jpg",
    category: "Systems",
    publication: "https://www.techrxiv.org/users/938624/articles/1308701-aether-autonomous-evolving-tamper-proof-honeypot-ecosystem-with-reactive-intelligence"
  },
  {
    title: "SRME",
    description: "Semantic Research Matchmaking Engine indexing 500+ faculty profiles and publications into a searchable semantic similarity engine.",
    tags: ["NLP", "Semantic Search", "Knowledge Graph"],
    link: "/projects/srme",
    github: "https://github.com/gurarpitzz/semantic-research-matchmaking-engine",
    image: "/projects/srme.jpg",
    category: "Data Visualization"
  },
  {
    title: "ARES POC",
    description: "Research Verification Engine. A mathematically grounded misinformation verification engine using evidence aggregation metrics.",
    tags: ["Research Integrity", "Mathematics", "Verification"],
    link: "/projects/ares_poc",
    github: "https://github.com/gurarpitzz/ARES_POC",
    image: "/projects/ares_poc.jpg",
    category: "Systems",
    publication: "https://www.researchsquare.com/article/rs-6973364/v1"
  },
  {
    title: "BeCured Support",
    description: "Early Disease Diagnosis Support framing model outputs as decision-support signals on medical imaging datasets.",
    tags: ["Healthcare", "DL", "Interpretability"],
    link: "/projects/becured",
    github: "https://github.com/gurarpitzz/Be-cured",
    image: "/projects/becured.jpg",
    category: "Web Development"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProject = projects[0];

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    const uniqueCats = Array.from(new Set(cats));
    return ["All", ...uniqueCats];
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredOtherProjects = useMemo(() => {
    const others = projects.slice(1);
    if (activeCategory === "All") return others;
    return others.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-0 bg-[#0a0a0b] text-white selection:bg-primary/30 selection:text-white antialiased">
      {/* Home */}
      <Hero />

      {/* About */}
      <About />

      {/* Expertise */}
      <Skills />

      {/* Work (Projects) */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto space-y-48">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6">
              <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] font-mono">{"// selected work"}</p>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
                My <br /> Work<span className="text-primary">.</span>
              </h2>
            </div>
            <div className="max-w-xs space-y-4">
              <p className="text-foreground/40 text-sm font-medium leading-relaxed">
                Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
              </p>
              <div className="h-px w-12 bg-primary/20" />
            </div>
          </div>

          {/* Featured Showcase Area */}
          <div className="relative pt-12">
            <div className="absolute -top-4 left-0 hidden lg:block">
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest bg-[#0a0a0b] px-4">
                [ Protocol: FLAGSHIP ]
              </span>
            </div>
            <div className="relative">
              <ProjectCard
                {...featuredProject}
                index={0}
                variant="featured"
              />
            </div>
          </div>

          {/* Asymmetric Showcase Header & Filter */}
          <div className="pt-24 space-y-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest border-b border-white/5 pb-8">
              <span className="text-white/20">Filter by</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`transition-colors flex items-center gap-1 ${activeCategory === cat ? "text-primary" : "text-white/40 hover:text-white"
                    }`}
                >
                  {cat} <sup className="text-[8px] opacity-40">{categoryCounts[cat]?.toString().padStart(2, '0')}</sup>
                </button>
              ))}
            </div>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-start">
              {filteredOtherProjects.map((project, i) => (
                <ProjectCard
                  key={i}
                  index={i + 1}
                  {...project}
                  variant="secondary"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Journey />

      {/* Contact */}
      <Contact />
    </div>
  );
}
