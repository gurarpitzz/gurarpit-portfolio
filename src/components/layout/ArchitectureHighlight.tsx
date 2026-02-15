"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Globe, Server, Activity, ShieldCheck, LucideIcon } from "lucide-react";

const FlowStep = ({ icon: Icon, label, color, delay }: { icon: LucideIcon, label: string, color: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center gap-3 relative z-10"
    >
        <div className={`p-4 rounded-xl bg-primary/10 border border-white/10 glass shadow-lg`}>
            <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">{label}</span>
    </motion.div>
);

const Connection = ({ delay }: { delay: number }) => (
    <div className="flex-1 h-[2px] bg-white/5 relative mx-2 min-w-[40px]">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay, duration: 1 }}
            className="absolute h-full bg-primary shadow-[0_0_10px_#0ea5ff]"
        />
    </div>
);

export default function ArchitectureHighlight() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        I design systems that <span className="text-primary">scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/60 max-w-2xl mx-auto"
                    >
                        From ML inference pipelines to real-time assistive tech, I build the hidden architecture that powers seamless digital experiences.
                    </motion.p>
                </div>

                <div className="glass p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                        <FlowStep icon={Globe} label="Data Ingestion" color="primary" delay={0.4} />
                        <Connection delay={0.6} />
                        <FlowStep icon={Server} label="Backend Pipeline" color="primary" delay={0.8} />
                        <Connection delay={1.0} />
                        <FlowStep icon={Cpu} label="ML Inference" color="primary" delay={1.2} />
                        <Connection delay={1.4} />
                        <FlowStep icon={Database} label="PostgreSQL / Redis" color="primary" delay={1.6} />
                        <Connection delay={1.8} />
                        <FlowStep icon={ShieldCheck} label="Secure Delivery" color="primary" delay={2.0} />
                    </div>

                    <motion.div
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 blur-[100px] rounded-full pointer-events-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        { title: "Performance First", desc: "Optimized for sub-500ms response times and high concurrency.", icon: Activity },
                        { title: "ML Integration", desc: "Seamlessly deploying TensorFlow/PyTorch models into production APIs.", icon: Cpu },
                        { title: "Security & Privacy", desc: "End-to-end encryption and metadata sanitization as a standard.", icon: ShieldCheck }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * i }}
                            className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                        >
                            <feature.icon className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-foreground/40">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
