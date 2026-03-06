"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
    { value: "45+", label: "Masterpieces Built" },
    { value: "100%", label: "Safety Record" },
    { value: "12m", label: "Average Build Time" },
    { value: "50+", label: "Design Awards" },
];

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const stats = gsap.utils.toArray(".stat-item");

            stats.forEach((stat: any, i) => {
                gsap.fromTo(
                    stat,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                        }
                    }
                );
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-20 bg-gray-900 text-white relative flex justify-center border-y border-[var(--color-gold-700)]/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[var(--color-gold-700)]/20">
                    {statsData.map((stat, i) => (
                        <div key={i} className="stat-item flex flex-col justify-center items-center px-4">
                            <h4 className="text-4xl md:text-5xl font-serif text-[var(--color-gold-500)] mb-2 font-medium">
                                {stat.value}
                            </h4>
                            <p className="text-gray-400 font-sans tracking-widest text-xs uppercase font-semibold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
