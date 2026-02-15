"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "BCA Scholar",
        org: "VIPS-TC (GGSIPU)",
        period: "2024 // Present",
        details: [
            "Analytical focus on systems thinking and statistical logic.",
            "Current CGPA: 9.24/10.0.",
            "Relevant Focus: Python, Data Structures, DBMS, Statistics."
        ]
    },
    {
        title: "Foundation Studies",
        org: "St. Edward’s School",
        details: [
            "Established core mathematical and logical foundations.",
            "Focus on early computational logic and systems theory."
        ]
    }
];

export default function Journey() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b]">
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
                            {"// experience & education"}
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                            The Academic <br /> Foundations.
                        </h2>
                    </div>

                    {/* Timeline / List */}
                    <div className="lg:col-span-8 space-y-16">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-8 border-l border-white/5 space-y-4"
                            >
                                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-primary/30" />

                                <div className="space-y-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <h3 className="text-xl font-bold text-white leading-tight">{exp.title}</h3>
                                        <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">{exp.period}</span>
                                    </div>
                                    <p className="text-foreground/40 font-bold uppercase tracking-widest text-[11px]">{exp.org}</p>
                                </div>

                                {exp.details.length > 0 && (
                                    <ul className="space-y-2">
                                        {exp.details.map((detail, j) => (
                                            <li key={j} className="text-sm text-foreground/40 leading-relaxed max-w-xl">
                                                — {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}

                        {/* Leadership Plug */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-12 border-t border-white/5"
                        >
                            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Coordination & Leadership</h4>
                            <p className="text-sm text-foreground/40 leading-relaxed max-w-2xl">
                                Beyond technical foundations, I focus on bridging the gap between engineering trade-offs and team alignment—maintaining consensus and clarity in complex environments.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
