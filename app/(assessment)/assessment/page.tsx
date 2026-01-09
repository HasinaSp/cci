import AssessmentAdvanced from "@/components/assessement/AssessmentAdvanced";
import AssessmentBasic from "@/components/assessement/AssessmentBasic";
import AssessmentIntermediate from "@/components/assessement/AssessmentIntermediate";

export default function AssessmentPage() {
  return (
    <main>
      <AssessmentBasic />
      <AssessmentIntermediate />
      <AssessmentAdvanced />
    </main>
  );
}

