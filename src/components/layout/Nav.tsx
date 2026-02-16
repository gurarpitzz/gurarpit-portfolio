"use client";

import { motion } from "framer-motion";
import { Github, Mail, GraduationCap, Linkedin } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "// home", href: "/" },
    { label: "// expertise", href: "#expertise" },
    { label: "// work", href: "#projects" },
    { label: "// experience", href: "#experience" },
    { label: "// contact", href: "#contact" },
];

export default function Nav() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                {/* Minimal Text Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-2">
                    GS<span className="text-primary">.</span>
                </Link>

                {/* Developer-style Navigation with indices */}
                <div className="hidden lg:flex items-center gap-12 text-[13px] font-medium text-white/50">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex flex-col items-center hover:text-primary transition-colors lowercase tracking-tight relative"
                        >
                            <span className="text-[9px] font-mono text-primary/40 group-hover:text-primary transition-colors mb-1">
                                {`0${index + 1}`}
                            </span>
                            <span className="text-white/60 group-hover:text-white transition-colors">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Social Icons & Resume */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 border-r border-white/10 pr-4 mr-2">
                        <a href="https://scholar.google.com/citations?user=VDbqG9cAAAAJ&hl=en" target="_blank" className="p-2 text-white/40 hover:text-primary transition-colors" title="Google Scholar">
                            <GraduationCap className="w-4 h-4" />
                        </a>
                        <a href="https://github.com/gurarpitzz" target="_blank" className="p-2 text-white/40 hover:text-primary transition-colors" title="GitHub">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://linkedin.com/in/gurarpitzz" target="_blank" className="p-2 text-white/40 hover:text-primary transition-colors" title="LinkedIn">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="p-2 text-white/40 hover:text-primary transition-colors" title="Contact">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1zPoU_TYWAA84uZKhkZo91gT70_AnCwlB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-white/5 hover:border-primary/50 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all bg-white/[0.03] backdrop-blur-sm"
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* Subtle Gradient Fade at the top */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </motion.nav>
    );
}
