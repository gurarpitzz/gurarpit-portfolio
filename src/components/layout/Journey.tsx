"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Journey() {
    return (
        <section id="journey" className="py-24 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em]">Journey</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Academic <span className="text-primary">Timeline</span></h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/20 to-transparent md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {/* Education VIPS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            <div className="absolute left-1/2 top-4 w-4 h-4 rounded-full bg-primary -translate-x-1/2 hidden md:block z-10 shadow-[0_0_15px_rgba(14,165,255,1)]" />

                            <div className="md:order-2 md:pl-12">
                                <div className="glass p-8 space-y-6 hover:bg-white/[0.03] transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold">Bachelor in Computer Applications</h3>
                                            <p className="text-primary font-bold text-sm">Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC)</p>
                                            <p className="text-foreground/30 text-[10px] font-bold uppercase tracking-widest pt-1">Aug 2023 - Expected 2027 • GGSIPU, Delhi</p>
                                        </div>
                                        <div className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">2027</div>
                                    </div>

                                    <ul className="space-y-3 text-foreground/60 text-sm">
                                        {[
                                            "CGPA: 9.24 / 10.0",
                                            "Relevant Coursework: Python, Data Structures, DBMS, Statistics, Computer Organization"
                                        ].map((p, pi) => (
                                            <li key={pi} className="flex gap-3 md:items-start group/li">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 group-hover/li:bg-primary" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {["Python", "DSA", "DBMS", "Statistics"].map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest text-foreground/40">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* School Shimla */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            <div className="absolute left-1/2 top-4 w-4 h-4 rounded-full bg-primary/40 -translate-x-1/2 hidden md:block z-10" />

                            <div className="md:text-right md:pr-12">
                                <div className="glass p-8 space-y-6 hover:bg-white/[0.03] transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">Shimla</div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold">Secondary Education</h3>
                                            <p className="text-primary font-bold text-sm">St. Edward’s School</p>
                                            <p className="text-foreground/30 text-[10px] font-bold uppercase tracking-widest pt-1">Shimla, Himachal Pradesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Leadership & Coordination */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="pt-12 md:px-12"
                        >
                            <div className="glass p-12 space-y-8 border border-primary/10 bg-primary/[0.01]">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold">Leadership & Coordination</h3>
                                        <p className="text-foreground/40 text-sm font-medium">Bridges the gap between technical trade-offs and team alignment.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                    {[
                                        { label: "Coordination", desc: "Steps into roles when direction is unclear." },
                                        { label: "Problem Solving", desc: "Breaks problems into trade-offs and next steps." },
                                        { label: "Alignment", desc: "Maintains consensus across differing viewpoints." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <p className="text-primary font-bold text-xs uppercase tracking-widest">{item.label}</p>
                                            <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
