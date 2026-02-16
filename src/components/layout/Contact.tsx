import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, GraduationCap, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);

        try {
            // Using Web3Forms as a default recommendation for static portfolios
            // Users just need to add their access key to the hidden input
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                // Reset after 3 seconds
                setTimeout(() => setStatus("idle"), 3000);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const contactLinks = [
        // ... (rest of the component remains same)
        { label: "Email", value: "gurarpit.sml@gmail.com", icon: Mail, href: "mailto:gurarpit.sml@gmail.com" },
        { label: "LinkedIn", value: "gurarpitsinghh", icon: Linkedin, href: "https://www.linkedin.com/in/gurarpitsinghh/" },
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
                        <form onSubmit={handleSubmit} className="space-y-4 pt-4 md:pt-0">
                            {/* CAUTION: User must replace this with their actual Web3Forms access key */}
                            <input type="hidden" name="access_key" value="462473e1-126a-4990-9d38-a5e96cb5c9b9" />
                            <input type="hidden" name="subject" value="New Portfolio Message" />
                            <input type="hidden" name="from_name" value="Portfolio Visitor" />

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono placeholder:text-white/10"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono placeholder:text-white/10"
                                />
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full bg-[#111111] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-xs font-mono resize-none placeholder:text-white/10"
                                />
                                <button
                                    disabled={status !== "idle"}
                                    type="submit"
                                    className="w-full py-4 bg-white/5 hover:bg-primary hover:text-black border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all relative overflow-hidden group"
                                >
                                    <AnimatePresence mode="wait">
                                        {status === "idle" && (
                                            <motion.div
                                                key="idle"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center justify-center gap-2"
                                            >
                                                Send Message <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.div>
                                        )}
                                        {status === "sending" && (
                                            <motion.div
                                                key="sending"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center justify-center gap-2"
                                            >
                                                Processing... <Loader2 className="w-3 h-3 animate-spin" />
                                            </motion.div>
                                        )}
                                        {status === "success" && (
                                            <motion.div
                                                key="success"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center justify-center gap-2 text-green-500"
                                            >
                                                Sent Successfully <CheckCircle2 className="w-3 h-3" />
                                            </motion.div>
                                        )}
                                        {status === "error" && (
                                            <motion.div
                                                key="error"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center justify-center gap-2 text-red-500"
                                            >
                                                Submission Failed
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Back to Top Morphing Button */}
            <div className="mt-32 flex justify-center">
                <motion.button
                    onClick={scrollToTop}
                    initial={{ borderRadius: "4px" }}
                    whileHover={{
                        borderRadius: "100%",
                        rotate: 360,
                        backgroundColor: "rgba(34, 211, 238, 0.1)"
                    }}
                    transition={{ duration: 0.6, ease: "anticipate" }}
                    className="w-16 h-16 flex items-center justify-center border border-white/10 text-white/20 hover:text-primary hover:border-primary/50 transition-colors group relative"
                >
                    {/* Inner Arrow */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </motion.div>

                    {/* Subtle Pulse Ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                </motion.button>
            </div>
        </section>
    );
}
