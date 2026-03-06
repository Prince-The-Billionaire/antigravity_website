"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const properties = [
    {
        id: 1,
        title: "The Belvedere Estate",
        location: "Beverly Hills, CA",
        price: "$24,500,000",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Oceanside Villa",
        location: "Malibu, CA",
        price: "$18,200,000",
        image: "https://images.unsplash.com/photo-1600607687931-cebfbc09315d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Alpine Modern",
        location: "Aspen, CO",
        price: "$32,000,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
];

export default function Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray(".property-card");

            cards.forEach((card: any, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            gsap.from(".showcase-header", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".showcase-header",
                    start: "top 80%"
                }
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="showcase-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        Exclusive <span className="text-[var(--color-gold-600)] italic">Collection</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                        Handpicked properties representing the pinnacle of architectural achievement and luxurious living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="property-card group cursor-pointer relative overflow-hidden rounded-sm">
                            <div className="relative h-[400px] w-full overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-[var(--color-gold-500)] text-sm font-semibold tracking-wider uppercase mb-1">{property.location}</p>
                                <h3 className="text-2xl font-serif mb-1">{property.title}</h3>
                                <p className="text-gray-300 font-sans">{property.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-transparent border border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 font-sans tracking-wide">
                        View All Properties
                    </button>
                </div>
            </div>
        </section>
    );
}
