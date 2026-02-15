"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
    { label: "10+ Projects Built", position: "top-[-20px] left-[50px]" },
    { label: "Systems Thinking", position: "top-[100px] right-[-40px]" },
    { label: "Data-Driven Insights", position: "bottom-[80px] right-[-20px]" }
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

            {/* Glowing Diagonal Line */}
            <div className="absolute top-0 left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-[-35deg] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 space-y-8"
                >
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary text-xs font-bold uppercase tracking-[0.3em]"
                        >
                            Full-Stack & Backend Engineer
                        </motion.p>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
                            Hi, I&apos;m <br />
                            <span className="text-primary">Gurarpit Singh</span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-lg leading-relaxed font-medium">
                            Building scalable backends & <span className="text-white">intelligent systems</span> that scale.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:brightness-110 transition-all flex items-center group shadow-[0_0_20px_rgba(14,165,255,0.3)]">
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-all">
                            Get In Touch
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual - Monogram & Floating Stats */}
                <div className="relative flex justify-center items-center py-20 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                    >
                        {/* Main Circular Background */}
                        <div className="absolute inset-0 bg-[#0d0d0d] rounded-full border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center">
                            <div className="text-[120px] md:text-[180px] font-black text-primary select-none cursor-default tracking-tighter">
                                GS
                            </div>
                            {/* Internal Glow */}
                            <div className="absolute inset-0 bg-primary/5 blur-2xl opacity-35" />
                        </div>

                        {/* Background Glow Orb */}
                        <div className="absolute inset-[-40px] bg-primary/7 blur-[60px] rounded-full -z-10 animate-pulse-slow" />

                        {/* Floating Stats */}
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                                className={`absolute ${stat.position} glass px-6 py-4 rounded-xl min-w-[140px] shadow-2xl z-20 hidden md:block border border-white/10`}
                            >
                                <div className="text-primary font-bold text-lg leading-none mb-1">
                                    {stat.label.split(' ')[0]}
                                </div>
                                <div className="text-[9px] uppercase tracking-widest font-bold text-foreground/40 whitespace-nowrap">
                                    {stat.label.split(' ').slice(1).join(' ')}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: 0.3,
                    y: [0, 8, 0]
                }}
                transition={{
                    opacity: { delay: 2, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer pt-4"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
