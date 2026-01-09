import AssessmentHero from "@/components/diagnostic/AssessementHero";
import BigCTA from "@/components/diagnostic/BigCTA";
import ChooseLevelIntro from "@/components/diagnostic/ChooseLevelIntro";
import LevelsGrid from "@/components/diagnostic/LevelsGrid";
import Footer from "@/components/layout/Footer";

export default  function DiagnosticPage() {
  return (
    <main>
      <AssessmentHero />
      <ChooseLevelIntro />
      <LevelsGrid />
      <BigCTA />
      <Footer />
    </main>
    );
}