"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
    index: number;
    variant?: "featured" | "secondary";
}

const CuriousArrow = () => (
    <motion.svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-12 -left-12 hidden lg:block"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
        <path
            d="M10 80C30 60 80 80 110 20"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
        />
        <path
            d="M105 30L110 20L100 22"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

export default function ProjectCard({ title, description, tags, link, github, image, index, variant = "secondary" }: ProjectCardProps) {
    if (variant === "featured") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                {/* Text Content */}
                <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 relative">
                    <CuriousArrow />
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest relative"
                        >
                            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                            Featured Project
                        </motion.div>
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            {title}
                        </h3>
                    </div>

                    <p className="text-lg text-foreground/60 leading-relaxed max-w-md">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono text-primary/60 uppercase tracking-widest border border-white/5 px-2 py-1 rounded bg-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href={link}
                            className="px-8 py-4 bg-primary text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0"
                        >
                            View Case Study
                        </Link>
                        {github && (
                            <a href={github} target="_blank" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                                <Github className="w-4 h-4" />
                                Source
                            </a>
                        )}
                    </div>
                </div>

                {/* Image/Mockup Area */}
                <div className="lg:col-span-7 relative order-1 lg:order-2">
                    <div className="relative aspect-[16/10] bg-white/5 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-700">
                        {image ? (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-9xl font-black text-white/5 uppercase tracking-tighter">{title[0]}</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                </div>
            </motion.div>
        );
    }

    // Default Secondary Layout (Vertical asymmetrical style)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group flex flex-col gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 ${index % 3 === 0 ? "lg:mt-0" : index % 3 === 1 ? "lg:mt-12" : "lg:mt-24"
                }`}
        >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-white/5">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-white/5">
                        {title[0]}
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] font-mono text-primary/40 uppercase tracking-widest">{tag}</span>
                        ))}
                    </div>
                </div>

                <p className="text-foreground/40 text-xs leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <Link
                        href={link}
                        className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors"
                    >
                        {"// View Details"}
                    </Link>
                    {github && (
                        <a href={github} target="_blank" className="text-white/20 hover:text-white transition-colors">
                            <Github className="w-3 h-3" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
