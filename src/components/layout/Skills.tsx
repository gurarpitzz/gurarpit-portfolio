"use client";

import { motion } from "framer-motion";
import { Database, Code2, LineChart, Server, Search, Terminal, BarChart3 } from "lucide-react";

export default function Skills() {
    const expertSkills = [
        {
            title: "Data Analysis",
            icon: LineChart,
            skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
            level: "Core"
        },
        {
            title: "Systems Thinking",
            icon: Server,
            skills: ["Root Cause Analysis", "Pattern Discovery", "Insight Reporting"],
            level: "Methodology"
        }
    ];

    const subSkills = [
        { title: "Languages", icon: Code2, skills: ["Python", "SQL", "JavaScript"] },
        { title: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "SQL"] },
        { title: "Tools", icon: Terminal, skills: ["Excel (Pivot)", "Git", "VS Code"] },
        { title: "Analysis", icon: BarChart3, skills: ["EDA", "Data Cleaning", "Market Insights"] },
        { title: "Search", icon: Search, skills: ["NLP", "Embeddings", "Semantic Search"] }
    ];

    return (
        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em]">Capabilities</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Technical & <span className="text-primary">Analytical Skills</span>
                    </h2>
                </div>

                {/* Top: Expert/Core Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {expertSkills.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 flex flex-col items-center text-center space-y-6 group hover:bg-white/[0.04] transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <card.icon className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold">{card.title}</h3>
                                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-foreground/40 font-medium">
                                    {card.skills.map(s => <span key={s}>{s}</span>)}
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary/60">{card.level}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom: Sub Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {subSkills.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 flex flex-col items-center text-center space-y-4 group hover:bg-white/[0.04] transition-all"
                        >
                            <div className="text-primary/60 group-hover:text-primary transition-colors">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm tracking-tight">{card.title}</h4>
                                <div className="text-[9px] font-bold text-foreground/30 flex flex-col space-y-1 group-hover:text-foreground/50">
                                    {card.skills.map(s => <span key={s}>{s}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
