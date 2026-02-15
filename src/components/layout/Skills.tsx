"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "01. Engineering",
        items: ["Python", "Pandas & NumPy", "SQL (PostgreSQL)", "RESTful APIs", "System Architecture"]
    },
    {
        category: "02. Analysis",
        items: ["Exploratory Data Analysis", "Root Cause Analysis", "Pattern Discovery", "Semantic Search", "NLP Embeddings"]
    },
    {
        category: "03. Strategy & Decision",
        items: ["Operations Thinking", "Business Analytics", "Strategic Decision-Making", "Process Optimization"]
    }
];

export default function Skills() {
    return (
        <section id="expertise" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b]">
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

                    {/* Skills Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {skills.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white underline underline-offset-8 decoration-primary/30">
                                    {group.category}
                                </h3>
                                <ul className="space-y-4">
                                    {group.items.map((item, j) => (
                                        <li key={j} className="text-foreground/40 text-sm font-medium hover:text-white transition-colors cursor-default">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
