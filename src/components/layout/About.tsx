"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Content Area */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-mono"
                            >
                                {"// 01. expertise & bio"}
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black tracking-tighter text-white"
                            >
                                Solving problems <br />
                                with <span className="text-primary">engineered data.</span>
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-foreground/60 leading-relaxed text-lg max-w-2xl font-medium"
                        >
                            <p>
                                I&apos;m a BCA student at <span className="text-white">VIPS-TC (GGSIPU)</span>, specializing in the intersection of data engineering and decision support systems.
                            </p>
                            <p>
                                I build end-to-end data pipelines that translate complex technical outputs into actionable insights across accessibility, research intelligence, and healthcare.
                            </p>
                            <p className="text-white italic text-xl border-l-2 border-primary pl-6 py-2">
                                &quot;Good decisions start with good data.&quot;
                            </p>
                            <p className="text-sm">
                                Graduating in 2027 • Current CGPA: 9.24
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Minimalist Specs */}
                    <div className="lg:col-span-4 lg:pt-24">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-8 pl-8 border-l border-white/5"
                        >
                            {[
                                { label: "Focus", value: "Backend Systems" },
                                { label: "Method", value: "Exploratory Data Analysis" },
                                { label: "Context", value: "Decision-Support Tech" },
                            ].map((spec, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">{spec.label}</p>
                                    <p className="text-lg font-bold text-white/80">{spec.value}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
