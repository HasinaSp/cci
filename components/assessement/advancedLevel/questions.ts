export type Question = {
  id: number;
  category: string;
  question: string;
  image: string;
  options: {
    id: string;
    label: string;
  }[];
};

export const questions: Question[] = [
  {
    id: 1,
    category: "Governance",
    question:
    "Which circular economy principles from ISO 59004 are explicitly referenced in your strategies?",
    image: "/diagnostic/advanced/question-1.png",
    options: [
      { id: "A", label: "Systems thinking" },
      { id: "B", label: "Value creation" },
      { id: "C", label: "Value sharing" },
      { id: "D", label: "Resource stewardship" },
      { id: "E", label: "Resource traceability" },
      { id: "F", label: "Ecosystem resilience" },
      { id: "G", label: "Other" },
    ],
  },
  {
    id: 2,
    category: "Governance",
    question: "To what extent does your organisation use a risk and opportunity management approach for CE?",
    image: "/diagnostic/advanced/question-2.png",
    options: [
      { id: "A", label: "No risk assessment" },
      { id: "B", label: "Reactive" },
      { id: "C", label: "Periodic qualitative" },
      { id: "D", label: "Integrated ERM" },
    ],
  },
    {
    id: 3,
    category: "CE Framework Alignment",
    question: "To what extent does your organisation integrate circular economy risks and opportunities into its enterprise-wide risk management and internal control systems?",
    image: "/diagnostic/advanced/question-3.png",
    options: [
      { id: "A", label: "Not integrated" },
      { id: "B", label: "Ad-hoc risk assessment" },
      { id: "C", label: "Integrated into risk register" },
      { id: "D", label: "Fully embedded in enterprise risk management (ERM)" },
    ],
  },
    {
    id: 4,
    category: "Business Model & Value Chain",
    question: "Approximately what percentage of your organisation's total revenue comes from circular business models?",
    image: "/diagnostic/advanced/question-4.png",
    options: [
      { id: "A", label: "0 - 0% (no contribution yet)" },
      { id: "B", label: "1 - >0% and <10%" },
      { id: "C", label: "2 - ≥10% and <33%" },
      { id: "D", label: "3 - ≥33% and <50%" },
      { id: "E", label: "4 - ≥50% and <75%" },
      { id: "F", label: "5 - ≥75%" },
    ],
  },
    {
    id: 5,
    category: "To what extent are cascading and high-value loops prioritised over recycling?",
    question: "Is circular economy integrated into your strategy?",
    image: "/diagnostic/advanced/question-5.png",
    options: [
      { id: "A", label: "No" },
      { id: "B", label: "Occasional" },
      { id: "C", label: "Structured hierarchy (some)" },
      { id: "D", label: "Explicit hierarchy" },
    ],
  },
    {
    id: 6,
    category: "Business Model & Value Chain",
    question: "Approximately what share of your circular revenues comes from higher-value loops (reuse, repair, refurbish, remanufacturing, product-as-a-service) rather than recycling-only models?",
    image: "/diagnostic/advanced/question-6.png",
    options: [
      { id: "A", label: "0%" },
      { id: "B", label: ">0-10%" },
      { id: "C", label: "≥10-33%" },
      { id: "D", label: "≥33-50%" },
      { id: "E", label: "≥50-75%" },
      { id: "F", label: "≥75%" },
    ],
  },
    {
    id: 7,
    category: "Resources",
    question: "To what extent are material and energy loops optimised at system level?",
    image: "/diagnostic/advanced/question-7.png",
    options: [
      { id: "A", label: "No" },
      { id: "B", label: "Single sites" },
      { id: "C", label: "Multi-site" },
      { id: "D", label: "Territorial/System-level" },
    ],
  },
    {
    id: 8,
    category: "Resources",
    question: "Does your organisation apply internal design standards making circularity mandatory?",
    image: "/diagnostic/advanced/question-8.png",
    options: [
      { id: "A", label: "No" },
      { id: "B", label: "Draft" },
      { id: "C", label: "Applied to some lines" },
      { id: "D", label: "Systematic standards" },

    ],
  },
    {
    id: 9,
    category: "Resources",
    question: "To what extent are circularity strategies for energy and water (e.g. heat recovery, cascading use, water reuse loops) designed and monitored with specific quantitative indicators?",
    image: "/diagnostic/advanced/question-9.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 10,
    category: "Resources",
    question: "What percentage of total water consumed in your operations is reused or recycled water (e.g. on-site circulation, greywater, rainwater harvesting)?",
    image: "/diagnostic/advanced/question-10.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 11,
    category: "Measurement & Data",
    question: "To what extent do you use advanced circularity indicators?",
    image: "/diagnostic/advanced/question-11.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 12,
    category: "Measurement & Data",
    question: "Are circularity-related data subject to external assurance/verification?",
    image: "/diagnostic/advanced/question-12.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 13,
    category: "Measurement & Data",
    question: "To what extent are circularity indicators integrated into broader sustainability dashboards, combining resource flows with environmental, social and economic impact metrics?",
    image: "/diagnostic/advanced/question-13.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 14,
    category: "Measurement & Data",
    question: "Please describe one or two concrete decisions (e.g. design changes, investment choices, partnership adjustments) that were directly informed by your circularity measurement results.",
    image: "/diagnostic/advanced/question-14.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 15,
    category: "Territorial Ecosystems & Regeneration",
    question: "To what extent does your initiative align with territorial/regional strategies for CE?",
    image: "/diagnostic/advanced/question-15.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 16,
    category: "Organisational & Digital Enablers",
    question: "To what extent does your initiative explicitly aim to strengthen ecosystem resilience?",
    image: "/diagnostic/advanced/question-16.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 17,
    category: "Territorial Ecosystems & Regeneration",
    question: "Which types of territorial partnerships support your circular initiative?",
    image: "/diagnostic/advanced/question-17.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 18,
    category: "Organisational & Digital Enablers",
    question: "What is the maturity level of your data traceability for CE information?",
    image: "/diagnostic/advanced/question-18.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 19,
    category: "Organisational & Digital Enablers",
    question: "To what extent are employees trained to understand and use circularity data and indicators in their daily decisions (e.g. design, procurement, operations, sales)?",
    image: "/diagnostic/advanced/question-19.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 20,
    category: "Finance & Value Creation",
    question: "To what extent is circular economy integrated into your investment thesis?",
    image: "/diagnostic/advanced/question-20.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 21,
    category: "Finance & Value Creation",
    question: "To what extent do you measure economic indicators linking circularity and value?",
    image: "/diagnostic/advanced/question-21.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 22,
    category: "Finance & Value Creation",
    question: "To what extent does your organisation use external circularity performance information (ratings, certifications, taxonomy alignment) to access preferential financing or investment terms?",
    image: "/diagnostic/advanced/question-22.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 23,
    category: "Finance & Value Creation",
    question: "Please describe one example where circularity performance has materially influenced financing conditions, investor perception, or risk assessment.",
    image: "/diagnostic/advanced/question-23.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 24,
    category: "Overall Vision & Readiness",
    question: "To what extent is circular economy considered a lever for strategic resilience?",
    image: "/diagnostic/advanced/question-24.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 25,
    category: "Overall Vision & Readiness",
    question: "How ready is your organisation to use advanced decision-support tools for circularity?",
    image: "/diagnostic/advanced/question-25.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 26,
    category: "Overall Vision & Readiness",
    question: "How ready is your organisation to report its circular economy strategy, actions and performance in an integrated way across financial, sustainability and regulatory disclosures?",
    image: "/diagnostic/advanced/question-26.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
];
