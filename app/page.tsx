import CircularMaturity from "@/components/sections/CircularMaturity";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import WhyCircular from "@/components/sections/WhyCircular";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyCircular />
      <Features />
      <CircularMaturity/>
    </main>
  );
}
