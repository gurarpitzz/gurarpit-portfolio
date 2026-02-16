"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content: Name & Role */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            Gurarpit <br />
                            Singh
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/40 font-medium tracking-tight">
                            Backend Developer | ML & Data Systems
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:brightness-110 transition-all flex items-center group"
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-all text-white/80"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual: Physical Laptop Animation */}
                <div className="relative flex justify-center items-center py-20 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full max-w-[500px] aspect-[16/10]"
                    >
                        {/* SVG Laptop Design */}
                        <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-[0_20px_50px_rgba(34,211,238,0.1)]">
                            {/* Laptop Base (Bottom Part) */}
                            <path
                                d="M50 250 L450 250 L470 270 Q475 275 465 275 L35 275 Q25 275 30 270 Z"
                                fill="#1a1a1b"
                            />
                            <rect x="180" y="250" width="140" height="4" fill="#0a0a0b" rx="2" />

                            {/* Laptop Lid (Top Part with Projection) */}
                            <motion.g
                                initial={{ rotateX: 85 }}
                                animate={{ rotateX: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 1.5,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                                style={{ transformOrigin: "250px 250px", transformStyle: "preserve-3d" }}
                            >
                                {/* Lid Outer Frame */}
                                <rect x="50" y="20" width="400" height="230" rx="12" fill="#1a1a1b" stroke="#333" strokeWidth="1" />

                                {/* Screen Area */}
                                <rect x="65" y="35" width="370" height="200" rx="4" fill="#050505" />

                                {/* Screen Glow & Content */}
                                <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.8, duration: 0.8 }}
                                >
                                    {/* Subtle Screen Gradient Glow */}
                                    <rect x="65" y="35" width="370" height="200" rx="4" fill="url(#screenGlow)" opacity="0.15" />

                                    {/* Terminal Flow Content */}
                                    <g transform="translate(85, 60)" className="font-mono text-[10px] fill-primary/80 uppercase tracking-widest leading-relaxed">
                                        <motion.text
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.2 }}
                                        >
                                            ingest →
                                        </motion.text>
                                        <motion.text
                                            x="80"
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.5 }}
                                        >
                                            process →
                                        </motion.text>
                                        <motion.text
                                            x="170"
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.8 }}
                                        >
                                            analyze →
                                        </motion.text>
                                        <motion.text
                                            x="260"
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 3.1 }}
                                            className="fill-white font-bold"
                                        >
                                            output
                                        </motion.text>

                                        {/* Subtle "IDE" grid lines */}
                                        <line x1="-20" y1="20" x2="350" y2="20" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                                        <line x1="-20" y1="40" x2="350" y2="40" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                                        <line x1="-20" y1="60" x2="350" y2="60" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                                    </g>
                                </motion.g>
                            </motion.g>

                            {/* Definitions for Gradients */}
                            <defs>
                                <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator (Simplified) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
