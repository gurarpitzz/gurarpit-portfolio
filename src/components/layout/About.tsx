"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Avatar / Image Placeholder */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square max-w-[400px] mx-auto lg:ml-0"
                        >
                            {/* Image Frame */}
                            <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl z-10 group-hover:inset-2 transition-all duration-500" />
                            <div className="absolute inset-0 bg-[#111] rounded-2xl overflow-hidden border border-white/5">
                                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <div className="text-foreground/20 font-bold text-4xl">GS</div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 glass px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                                Full-Stack
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="text-primary text-xs font-bold uppercase tracking-widest"
                                >
                                    About Me
                                </motion.p>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Building the future, <br />
                                    <span className="text-primary">one line at a time</span>
                                </motion.h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 text-foreground/70 leading-relaxed text-lg"
                            >
                                <p>
                                    I&apos;m a BCA student at <span className="text-white font-semibold">Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC)</span>, GGSIPU, experienced in extracting actionable insights from structured and unstructured data.
                                </p>
                                <p>
                                    I specialize in building end-to-end data pipelines and translating technical outputs into decision-support insights across accessibility, research intelligence, and healthcare use-cases. I graduating in <span className="text-white">2027</span> with a current CGPA of <span className="text-white">9.24</span>.
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="w-full md:w-64 glass p-8 space-y-8 border border-white/10"
                        >
                            {[
                                { label: "10+", sub: "Projects Completed" },
                                { label: "9.24", sub: "Academic CGPA" },
                                { label: "2027", sub: "Expected Graduation" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-3xl font-black text-primary">{stat.label}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{stat.sub}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
