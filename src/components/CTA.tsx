"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".cta-content", {
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".cta-heading span", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white flex justify-center">
            <div className="cta-content max-w-5xl w-full bg-gray-900 text-white rounded-sm p-12 md:p-24 text-center relative overflow-hidden">
                {/* Abstract Gold Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-70" />

                <h2 className="cta-heading text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    <span className="inline-block">Begin</span> <span className="inline-block">Your</span>{" "}
                    <span className="inline-block italic text-[var(--color-gold-500)]">Legacy</span>
                </h2>

                <p className="text-gray-300 font-sans max-w-xl mx-auto mb-10 text-lg">
                    Schedule a private viewing of our exclusive properties and experience the epitome of modern luxury.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="w-full sm:w-auto px-10 py-4 bg-[var(--color-gold-600)] hover:bg-[var(--color-gold-700)] text-white font-sans font-semibold tracking-wide transition-colors duration-300">
                        Request an Invitation
                    </button>
                    <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[var(--color-gold-600)]/50 text-white hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-500)] font-sans font-semibold tracking-wide transition-colors duration-300">
                        View Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}
