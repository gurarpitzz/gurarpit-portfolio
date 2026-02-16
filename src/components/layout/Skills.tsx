"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Smartphone } from "lucide-react";

const skills = [
    {
        icon: Monitor,
        title: "Software",
        subtitle: "Development",
        description: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
        color: "text-pink-500"
    },
    {
        icon: Code,
        title: "Frontend Dev",
        subtitle: "React, NextJS",
        description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
        color: "text-blue-400"
    },
    {
        icon: Smartphone,
        title: "Flutter Dev",
        subtitle: "Android, iOS",
        description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
        color: "text-orange-500"
    }
];

export default function Skills() {
    return (
        <section id="expertise" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#0a0a0b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Header */}
                    <div className="lg:col-span-4 space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] font-mono"
                        >
                            {"// expertise"}
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
                            Technical <br /> Expertise.
                        </h2>
                    </div>

                    {/* Code-Styled Skills Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`
                                        relative p-8 bg-[#0d0d0e] 
                                        ${i !== skills.length - 1 ? 'border-r border-white/10' : ''}
                                        hover:bg-white/[0.02] transition-all group
                                    `}
                                >
                                    {/* Opening HTML Tag */}
                                    <div className="text-[10px] font-mono text-white/20 mb-4">
                                        &lt;h3&gt;
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-4">
                                        <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-xl font-black ${skill.color} mb-1`}>
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm font-bold text-white/60 mb-4">
                                        {skill.subtitle}
                                    </p>

                                    {/* Closing HTML Tag */}
                                    <div className="text-[10px] font-mono text-white/20 mb-4">
                                        &lt;/h3&gt;
                                    </div>

                                    {/* Description with HTML tags */}
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-mono text-white/20">
                                            &lt;p&gt;
                                        </div>
                                        <p className="text-xs text-white/40 leading-relaxed pl-4">
                                            {skill.description}
                                        </p>
                                        <div className="text-[10px] font-mono text-white/20">
                                            &lt;/p&gt;
                                        </div>
                                    </div>

                                    {/* Subtle grid pattern overlay */}
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                                            `,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Code backdrop effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-[0.02] pointer-events-none font-mono text-[10px] text-white/50 leading-relaxed overflow-hidden">
                <pre>{`
const expertise = {
  backend: ['Python', 'FastAPI', 'PostgreSQL'],
  frontend: ['React', 'Next.js', 'TypeScript'],
  mobile: ['Flutter', 'Dart', 'Firebase'],
  tools: ['Docker', 'Git', 'CI/CD']
};

// Always learning, always building
                `}</pre>
            </div>
        </section>
    );
}
