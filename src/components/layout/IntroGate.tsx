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

        // TEMPORARY: Reset intro for testing so user can see it on refresh
        // sessionStorage.removeItem("gs_intro_seen"); 

        const hasSeenIntro = sessionStorage.getItem("gs_intro_seen");

        if (hasSeenIntro === "true" || prefersReducedMotion) {
            setShouldShowIntro(false);
            setAnimationComplete(true);
        } else {
            setShouldShowIntro(true);
        }
    }, [prefersReducedMotion]);

    const handleAnimationComplete = () => {
        sessionStorage.setItem("gs_intro_seen", "true");
        setTimeout(() => {
            setAnimationComplete(true);
            setShouldShowIntro(false);
        }, 800);
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
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6"
                    >
                        <motion.div
                            key="intro-identity"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                opacity: { duration: 0.8 }
                            }}
                            onAnimationComplete={handleAnimationComplete}
                            className="relative flex flex-col items-center"
                        >
                            <span className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase selection:bg-transparent">
                                GS<span className="text-primary">.</span>
                            </span>
                            <div className="mt-4 h-px w-8 bg-primary/20" />
                        </motion.div>
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
