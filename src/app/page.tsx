"use client";

import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import ArchitectureHighlight from "@/components/layout/ArchitectureHighlight";
import ProjectCard from "@/components/ui/ProjectCard";
import Skills from "@/components/layout/Skills";
import Journey from "@/components/layout/Journey";
import Contact from "@/components/layout/Contact";
import { motion } from "framer-motion";

const projects = [
  {
    title: "VibroBraille",
    description: "Braille-First AI Reading Interface designed for sequential vibration patterns on smartphones. Translates semantic meaning into tactile signals.",
    tags: ["Accessibility", "Signal Encoding", "Python"],
    link: "/projects/vibrobraille",
    github: "https://github.com/gurarpitzz/Vibrobraille-hybrid",
    image: "/projects/vibrobraille.jpg"
  },
  {
    title: "SRME",
    description: "Semantic Research Matchmaking Engine indexing 500+ faculty profiles and publications into a searchable semantic similarity engine using NLP embeddings.",
    tags: ["NLP", "Semantic Search", "Knowledge Graph"],
    link: "/projects/srme",
    github: "https://github.com/gurarpitzz/semantic-research-matchmaking-engine",
    image: "/projects/srme.jpg"
  },
  {
    title: "ARES POC",
    description: "Research Verification Engine. A mathematically grounded misinformation verification engine using evidence aggregation metrics V(C)=f(R,S,N,W).",
    tags: ["Research Integrity", "Mathematics", "Verification"],
    link: "/projects/ares_poc",
    github: "https://github.com/gurarpitzz/ARES_POC",
    image: "/projects/ares_poc.jpg"
  },
  {
    title: "BeCured Support",
    description: "Early Disease Diagnosis Support framing model outputs as decision-support signals on medical imaging datasets. Focuses on responsible analytical usage.",
    tags: ["Healthcare", "DL", "Interpretability"],
    link: "/projects/becured",
    github: "https://github.com/gurarpitzz/Be-cured",
    image: "/projects/becured.jpg"
  }
];

export default function Home() {
  return (
    <div className="space-y-0 bg-black text-white selection:bg-primary selection:text-black">
      <Hero />
      <About />

      {/* Philosophy Area */}
      <section className="py-24 px-6 flex flex-col items-center text-center bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl px-12 py-8 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
          <div className="space-y-6 text-left pl-12">
            <h3 className="text-4xl md:text-6xl font-bold italic tracking-tighter text-white/95 leading-[1.1]">
              &quot;Good decisions start with good data.&quot;
            </h3>
            <p className="text-primary tracking-widest uppercase text-[10px] font-bold">
              — Engineering Philosophy
            </p>
          </div>
        </motion.div>
      </section>

      <ArchitectureHighlight />

      {/* Selected Work Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em]">Decision-Support Projects</p>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
                Translating Complexity <br /> into <span className="text-primary">Insights</span>
              </h2>
            </div>
            <p className="text-foreground/40 text-sm max-w-sm uppercase font-bold tracking-widest leading-relaxed">
              Extracting actionable meaning from structured and unstructured data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                index={i}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Journey />

      {/* Interests Area */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] mb-4">Focus</p>
              <h3 className="text-3xl font-bold tracking-tight">Core Interests</h3>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4">
                {[
                  "Business Analytics", "Operations Thinking", "Strategic Decision-Making",
                  "Organizational Systems", "Consumer Behavior", "Market Research",
                  "Product Optimization", "Process Optimization"
                ].map(interest => (
                  <span key={interest} className="px-6 py-3 glass rounded-xl text-sm font-semibold text-foreground/70 hover:text-primary transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
