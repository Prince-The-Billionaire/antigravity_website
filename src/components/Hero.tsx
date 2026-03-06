"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadlineRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { delay: 0.2 } });

            gsap.fromTo(
                headlineRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
            );

            gsap.fromTo(
                subheadlineRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
            );
        },
        { scope: heroRef }
    );

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900"
        >
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full opacity-60"
                >
                    {/* Using a placeholder video URL */}
                    <source src="/luxury_home.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1
                    ref={headlineRef}
                    className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-medium tracking-tight mb-6"
                >
                    Elevate Your <span className="text-[var(--color-gold-500)] italic">Lifestyle</span>
                </h1>
                <p
                    ref={subheadlineRef}
                    className="text-lg md:text-2xl text-gray-200 font-sans max-w-2xl mx-auto font-light tracking-wide"
                >
                    Discover unparalleled luxury in our exclusive collection of masterfully crafted estates.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <span className="block w-6 h-10 border-2 border-white rounded-full relative">
                    <span className="block w-1 h-2 bg-[var(--color-gold-500)] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2" />
                </span>
            </div>
        </section>
    );
}
