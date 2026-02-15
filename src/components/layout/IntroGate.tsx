"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface IntroGateProps {
    children: React.ReactNode;
}

export default function IntroGate({ children }: IntroGateProps) {
    const [shouldShowIntro, setShouldShowIntro] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Safety check for SSR environment
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setIsMounted(true);
        const hasSeenIntro = sessionStorage.getItem("gs_intro_seen");

        // Skip if seen or if motion is reduced
        if (hasSeenIntro === "true" || prefersReducedMotion) {
            setShouldShowIntro(false);
            setAnimationComplete(true);
        } else {
            setShouldShowIntro(true);
        }
    }, [prefersReducedMotion]);

    const handleAnimationComplete = () => {
        sessionStorage.setItem("gs_intro_seen", "true");
        // Maintain a slight delay for the exit transition
        setTimeout(() => {
            setAnimationComplete(true);
            setShouldShowIntro(false);
        }, 500);
    };

    // On server and initial client render, render children to avoid 500/hydration issues
    if (!isMounted) {
        return <div className="opacity-0">{children}</div>;
    }

    // If intro is not needed (skipped), render children normally
    if (!shouldShowIntro && animationComplete) {
        return <>{children}</>;
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {shouldShowIntro && !animationComplete && (
                    <motion.div
                        key="intro-overlay"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
                    >
                        <div className="relative flex flex-col items-center">
                            {/* Phase 1 & 2: Signal -> Identity (SVG Morph) */}
                            <div className="h-32 flex items-center justify-center">
                                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        initial={{
                                            // Concentrated Dot Path (Structured for GS morph)
                                            d: "M 60 30 C 60 30 60 30 60 30 L 60 30 C 60 30 60 30 60 30 L 60 30 M 60 30 C 60 30 60 30 60 30 C 60 30 60 30 60 30 C 60 30 60 30 60 30",
                                            y: -200,
                                            opacity: 1
                                        }}
                                        animate={{
                                            y: 0,
                                            d: [
                                                "M 60 30 C 60 30 60 30 60 30 L 60 30 C 60 30 60 30 60 30 L 60 30 M 60 30 C 60 30 60 30 60 30 C 60 30 60 30 60 30 C 60 30 60 30 60 30", // Dot
                                                "M 35 15 C 35 5 55 5 55 15 L 55 25 C 55 35 35 35 35 30 L 35 25 M 75 10 C 85 10 95 10 95 20 C 95 30 75 30 75 40 C 75 50 85 50 95 50" // Stylized GS
                                            ]
                                        }}
                                        transition={{
                                            y: { duration: 0.6, ease: "linear" },
                                            d: { delay: 0.6, duration: 0.8, ease: "easeOut" }
                                        }}
                                        stroke="#22d3ee"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Phase 3: Name Resolution */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
                                onAnimationComplete={handleAnimationComplete}
                                className="text-center mt-6"
                            >
                                <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
                                    Gurarpit Singh
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main App Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: animationComplete ? 1 : 0,
                    scale: animationComplete ? [1, 1.01, 1] : 1
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </>
    );
}
