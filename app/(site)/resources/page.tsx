import FinalCTA from "@/components/layout/FinalCTA";
import Footer from "@/components/layout/Footer";
import ContributeSection from "@/components/resources/ContributeSection";
import ResourceHero from "@/components/resources/ResourceHero";
import ResourceSection from "@/components/resources/ResourceSection";
import Partners from "@/components/sections/Partners";

export default  function ResourcesPage() {
  return (
    <main>
    <ResourceHero />
    <ResourceSection />
    <ContributeSection />
    <Partners />
    <FinalCTA />
    <Footer />
    </main>
    );
}