"use client";

import { motion } from "framer-motion";
import { Github, Mail, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Nav() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3">
                <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-black rounded-lg transform group-hover:rotate-12 transition-transform">G</div>
                    <span>Gurarpit<span className="text-primary">.</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/60">
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://scholar.google.com/citations?user=VDbqG9cAAAAJ&hl=en" target="_blank" className="p-2 hover:bg-white/5 rounded-lg transition-colors" title="Google Scholar">
                        <GraduationCap className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/gurarpitzz" target="_blank" className="p-2 hover:bg-white/5 rounded-lg transition-colors" title="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:contact@gurarpit.com" className="p-2 hover:bg-white/5 rounded-lg transition-colors" title="Email">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1zPoU_TYWAA84uZKhkZo91gT70_AnCwlB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block ml-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
