import OptionButton from "./OptionButton";
import { Question } from "./questions";

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: {
  question: Question;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-2 text-sm">
        {question.category}
      </span>

      <h2 className="mb-6 text-2xl font-semibold">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((opt) => (
          <OptionButton
            key={opt.id}
            label={opt.label}
            value={opt.id}
            active={selected === opt.id}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
