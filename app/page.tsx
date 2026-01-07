import CircularMaturity from "@/components/sections/CircularMaturity";
import Features from "@/components/sections/Features";
import FreeAssessment from "@/components/sections/FreeAssessment";
import Hero from "@/components/sections/Hero";
import Resources from "@/components/sections/Resources";
import WhyCircular from "@/components/sections/WhyCircular";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyCircular />
      <Features />
      <CircularMaturity/>
      <Resources />
      <FreeAssessment />
    </main>
  );
}
