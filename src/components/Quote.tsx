"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".quote-text", {
                opacity: 0,
                y: 40,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });

            gsap.from(".quote-author", {
                opacity: 0,
                x: -20,
                duration: 1,
                ease: "power2.out",
                delay: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 bg-[#FAFAFA] flex items-center justify-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-gold-500)]/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <svg
                    className="w-12 h-12 text-[var(--color-gold-500)] mx-auto mb-8 opacity-60"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="quote-text text-3xl md:text-5xl font-serif text-gray-800 leading-tight mb-8">
                    "Aura builds not just houses, but legacies. Their attention to detail and uncompromising quality set a new standard for luxury living."
                </p>

                <div className="quote-author flex items-center justify-center space-x-4">
                    <div className="w-12 h-0.5 bg-[var(--color-gold-500)]" />
                    <p className="font-sans uppercase tracking-[0.2em] text-sm text-gray-500 font-bold">
                        Architectural Digest
                    </p>
                    <div className="w-12 h-0.5 bg-[var(--color-gold-500)]" />
                </div>
            </div>
        </section>
    );
}
