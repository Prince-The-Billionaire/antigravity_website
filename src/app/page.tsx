import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Showcase />
      <Stats />
      <Quote />
      <CTA />
    </main>
  );
}
