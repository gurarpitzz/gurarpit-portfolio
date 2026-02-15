"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactLinks = [
        { label: "Email", value: "gurarpit.sml@gmail.com", icon: Mail, href: "mailto:gurarpit.sml@gmail.com" },
        { label: "LinkedIn", value: "gurarpitzz", icon: Linkedin, href: "https://linkedin.com/in/gurarpitzz" },
        { label: "GitHub", value: "gurarpitzz", icon: Github, href: "https://github.com/gurarpitzz" },
        { label: "Scholar", value: "Research Profile", icon: GraduationCap, href: "https://scholar.google.com/citations?user=VDbqG9cAAAAJ&hl=en" }
    ];

    return (
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Message */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] font-mono"
                            >
                                {"// contact"}
                            </motion.p>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                                Let&apos;s build <br /> <span className="text-primary">together.</span>
                            </h2>
                        </div>
                        <p className="text-foreground/40 text-sm leading-relaxed max-w-sm">
                            I am always open to discussing backend systems, data engineering, or research opportunities.
                        </p>
                    </div>

                    {/* Right: Links & Form */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact List */}
                        <div className="space-y-8">
                            {contactLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target={item.href.startsWith('mailto:') ? undefined : "_blank"}
                                    rel={item.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-center gap-6"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all border border-white/5">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">{item.label}</p>
                                        <p className="text-sm font-bold text-white/70 group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Minimal Form */}
                        <div className="space-y-4 pt-4 md:pt-0">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono"
                            />
                            <textarea
                                placeholder="Message"
                                rows={3}
                                className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono resize-none"
                            />
                            <button className="w-full py-3 bg-white/5 hover:bg-primary hover:text-black border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all">
                                Send Message
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Back to Top */}
            <div className="mt-32 flex justify-center">
                <button
                    onClick={scrollToTop}
                    className="flex flex-col items-center gap-4 text-white/20 hover:text-primary transition-all group"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-t from-primary/40 to-transparent group-hover:h-16 transition-all" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Top</span>
                </button>
            </div>
        </section>
    );
}
