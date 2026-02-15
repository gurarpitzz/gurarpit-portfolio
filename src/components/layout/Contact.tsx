"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MessageSquare, ArrowUp, GraduationCap } from "lucide-react";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactLinks = [
        { label: "Email", value: "gurarpit.sml@gmail.com", icon: Mail, sub: "Send a message", href: "mailto:gurarpit.sml@gmail.com" },
        { label: "Phone", value: "9805074750", icon: Phone, sub: "Let's talk", href: "tel:+919805074750" },
        { label: "Scholar", value: "Research Profile", icon: GraduationCap, sub: "Citations", href: "https://scholar.google.com/citations?user=VDbqG9cAAAAJ&hl=en" },
        { label: "LinkedIn", value: "Connect", icon: Linkedin, sub: "Network", href: "https://linkedin.com/in/gurarpitzz" },
        { label: "GitHub", value: "Follow", icon: Github, sub: "Code", href: "https://github.com/gurarpitzz" }
    ];

    return (
        <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-12">
                        <div className="space-y-4">
                            <p className="text-primary text-[10px] uppercase font-bold tracking-[0.4em]">Let&apos;s talk</p>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                                Have a project <br />
                                <span className="text-primary">in mind?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {contactLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? "_blank" : undefined}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-6 group hover:bg-white/[0.04] transition-all cursor-pointer border border-white/5 block"
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <item.icon className="w-5 h-5 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{item.label}</span>
                                    </div>
                                    <p className="text-lg font-bold group-hover:text-primary transition-colors">{item.value}</p>
                                </motion.a>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm" />
                                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm" />
                            </div>
                            <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm resize-none" />
                            <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-widest rounded-xl hover:brightness-110 transition-all shadow-[0_0_25px_rgba(14,165,255,0.2)]">
                                Ignite Discussion
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block h-[600px]">
                        {/* Visual Backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-[100px] -z-10 animate-pulse-slow" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-6 relative z-10">
                                <p className="text-4xl md:text-5xl font-black text-white/10 tracking-tighter leading-none">
                                    Let&apos;s build <br /> something <br /> <span className="text-white/30">together</span>
                                </p>

                                {/* Floating Icons Loop */}
                                <div className="absolute inset-0 -z-10 flex items-center justify-center scale-150">
                                    <Mail className="absolute top-0 right-0 w-12 h-12 text-white/5 -rotate-12" />
                                    <Github className="absolute bottom-10 left-0 w-16 h-16 text-white/5 rotate-12" />
                                    <Linkedin className="absolute top-20 left-10 w-14 h-14 text-white/5 -rotate-6" />
                                    <MessageSquare className="absolute bottom-32 right-10 w-12 h-12 text-white/5 rotate-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-[60] group"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>

        </section>
    );
}
