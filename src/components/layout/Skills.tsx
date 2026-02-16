"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Smartphone } from "lucide-react";

const skills = [
    {
        icon: Monitor,
        title: "Backend",
        subtitle: "Engineering",
        description: "Building reliable backend systems with Python, FastAPI, PostgreSQL. Experienced in RESTful APIs, WebSockets, and system architecture.",
        color: "text-pink-500"
    },
    {
        icon: Code,
        title: "Data & NLP",
        subtitle: "Semantic Systems",
        description: "Semantic search engines, NLP embeddings, knowledge graphs. Working with Pinecone, OpenAI, and custom vector databases for research applications.",
        color: "text-blue-400"
    },
    {
        icon: Smartphone,
        title: "Research",
        subtitle: "Systems",
        description: "Signal processing, verification engines, and accessibility interfaces. Translating complex research into production-ready systems.",
        color: "text-orange-500"
    }
];

export default function Skills() {
    return (
        <section id="expertise" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Header */}
                    <div className="lg:col-span-4 space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] font-mono"
                        >
                            {"// expertise"}
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
                            Technical <br /> Expertise.
                        </h2>
                    </div>

                    {/* Code-Styled Skills Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`
                                        relative p-8 bg-[#0d0d0e] 
                                        ${i !== skills.length - 1 ? 'border-r border-white/10' : ''}
                                        hover:bg-white/[0.02] transition-all group
                                    `}
                                >
                                    {/* Opening HTML Tag */}
                                    <div className="text-[10px] font-mono text-white/20 mb-4">
                                        &lt;h3&gt;
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-4">
                                        <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-xl font-black ${skill.color} mb-1`}>
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm font-bold text-white/60 mb-4">
                                        {skill.subtitle}
                                    </p>

                                    {/* Closing HTML Tag */}
                                    <div className="text-[10px] font-mono text-white/20 mb-4">
                                        &lt;/h3&gt;
                                    </div>

                                    {/* Description with HTML tags */}
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-mono text-white/20">
                                            &lt;p&gt;
                                        </div>
                                        <p className="text-xs text-white/40 leading-relaxed pl-4">
                                            {skill.description}
                                        </p>
                                        <div className="text-[10px] font-mono text-white/20">
                                            &lt;/p&gt;
                                        </div>
                                    </div>

                                    {/* Subtle grid pattern overlay */}
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                                            `,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Code backdrop effect - visible behind grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-30 pointer-events-none font-mono text-xs leading-relaxed overflow-hidden">
                <pre className="text-left">
                    <span className="text-gray-600">{'<script>'}</span>{'\n'}
                    <span className="text-gray-500">  {'// Things I do to get a perfect background image'}</span>{'\n'}
                    <span className="text-gray-500">  {'// Nope, I should stop tinkering with VSCode settings'}</span>{'\n'}
                    <span className="text-gray-500">  {'// Just to take a screenshot of this dummy html code.'}</span>{'\n'}
                    {'\n'}
                    <span className="text-yellow-600">  {'const'}</span> <span className="text-blue-400">expertise</span> <span className="text-white">=</span> {'{'}{'\n'}
                    <span className="text-green-500">    backend</span><span className="text-white">:</span> <span className="text-white">{'['}</span><span className="text-orange-400">'Python'</span><span className="text-white">,</span> <span className="text-orange-400">'FastAPI'</span><span className="text-white">,</span> <span className="text-orange-400">'PostgreSQL'</span><span className="text-white">{']'}</span><span className="text-white">,</span>{'\n'}
                    <span className="text-green-500">    frontend</span><span className="text-white">:</span> <span className="text-white">{'['}</span><span className="text-orange-400">'React'</span><span className="text-white">,</span> <span className="text-orange-400">'Next.js'</span><span className="text-white">,</span> <span className="text-orange-400">'TypeScript'</span><span className="text-white">{']'}</span><span className="text-white">,</span>{'\n'}
                    <span className="text-green-500">    mobile</span><span className="text-white">:</span> <span className="text-white">{'['}</span><span className="text-orange-400">'Flutter'</span><span className="text-white">,</span> <span className="text-orange-400">'Dart'</span><span className="text-white">,</span> <span className="text-orange-400">'Firebase'</span><span className="text-white">{']'}</span>{'\n'}
                    <span className="text-white">  {'}'}</span><span className="text-white">;</span>{'\n'}
                    {'\n'}
                    <span className="text-gray-500">  {'// Oops. Almost forgot to say "Hello World!"'}</span>{'\n'}
                    <span className="text-gray-600">{'</script>'}</span>
                </pre>
            </div>
        </section>
    );
}
