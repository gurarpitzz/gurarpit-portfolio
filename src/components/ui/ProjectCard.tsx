"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
    index: number;
}

export default function ProjectCard({ title, description, tags, link, github, image, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-colors duration-500 shadow-2xl hover:shadow-primary/20"
        >
            {/* Background Image/Pattern Overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a] z-0" />

            {/* Project Thumbnail with Grayscale to Color Transition */}
            {image ? (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                    {/* Visual Placeholder (Abstract Pattern) */}
                    <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-br from-primary/10 to-transparent -z-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                        <div className="text-9xl font-black text-white">{title[0]}</div>
                    </div>
                </>
            )}

            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end space-y-4">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{tags[0]}</p>
                    <h3 className="text-3xl font-black text-white tracking-tighter">{title}</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-[280px] line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <div className="flex gap-4">
                        {github && (
                            <a href={github} target="_blank" className="text-foreground/40 hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        <Link href={link} className="text-foreground/40 hover:text-primary transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                    </div>

                    <Link href={link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group/link">
                        Details
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
