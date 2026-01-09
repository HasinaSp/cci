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
      "To what extent are circular economy principles embedded into key internal policies and procedures?",
    image: "/diagnostic/intermediate/question-1.png",
    options: [
      { id: "A", label: "None" },
      { id: "B", label: "Draft / Informal" },
      { id: "C", label: "Formal but limited" },
      { id: "D", label: "Approved & Organisation-wide" },
    ],
  },
  {
    id: 2,
    category: "Governance",
    question: "DoIs circular economy integrated into your strategy?es your organisation have formal mechanisms to oversee CE implementation?",
    image: "/diagnostic/intermediate/question-2.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 3,
    category: "CE Framework Alignment",
    question: "To what extent is your circular economy approach aligned with recognised frameworks?",
    image: "/diagnostic/intermediate/question-3.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 4,
    category: "Business Model & Value Chain",
    question: "To what extent do you manage your circular initiatives as a structured portfolio?",
    image: "/diagnostic/intermediate/question-4.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 5,
    category: "Business Model & Value Chain",
    question: "Have you adapted cost and revenue structures to reflect circular business models?",
    image: "/diagnostic/intermediate/question-5.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 6,
    category: "Business Model & Value Chain",
    question: "Are contractual terms and conditions adapted to support circular practices?",
    image: "/diagnostic/intermediate/question-6.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 7,
    category: "Business Model & Value Chain",
    question: "Has your organisation implemented a structured reverse logistics system?",
    image: "/diagnostic/intermediate/question-7.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 8,
    category: "Business Model & Value Chain",
    question: "To what extent are product-service systems (e.g. leasing, pay-per-use, performance-based contracts) systematically considered when designing new circular business initiatives?",
    image: "/diagnostic/intermediate/question-8.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 9,
    category: "Resources",
    question: "To what extent is life-cycle thinking considered in design and development?",
    image: "/diagnostic/intermediate/question-9.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 10,
    category: "Resources",
    question: "To what extent have solutions been implemented to close material loops?",
    image: "/diagnostic/intermediate/question-10.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 11,
    category: "Resources",
    question: "Does your organisation have a specific strategy for circular packaging?",
    image: "/diagnostic/intermediate/question-11.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 12,
    category: "Resources",
    question: "For the main product(s) covered by this initiative, what percentage of total material outflow (by mass) is effectively reused as products/components (not just recycled as material)?",
    image: "/diagnostic/intermediate/question-12.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 13,
    category: "Resources",
    question: "What percentage of total material outflow (by mass) is recycled into secondary raw materials, excluding energy recovery?",
    image: "/diagnostic/intermediate/question-13.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 14,
    category: "Resources",
    question: "To what extent does your organisation measure and ensure that water discharge quality meets standards for reuse by others (cascaded use)?",
    image: "/diagnostic/intermediate/question-14.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 15,
    category: "Measurement & Data",
    question: "To what extent does your indicator set reflect ISO 59020 logic?",
    image: "/diagnostic/intermediate/question-15.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 16,
    category: "Measurement & Data",
    question: "How regularly are circularity indicators reviewed at management level?",
    image: "/diagnostic/intermediate/question-16.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 17,
    category: "Measurement & Data",
    question: "Which core circularity indicator areas are measured?",
    image: "/diagnostic/intermediate/question-17.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 18,
    category: "Measurement & Data",
    question: "To what extent are temporal boundaries (measurement periods, frequency of updates) formally defined for your circularity assessments?",
    image: "/diagnostic/intermediate/question-18.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 19,
    category: "Measurement & Data",
    question: "To what extent does your organisation use the core circularity indicators from ISO 59020 Annex A as a reference list when defining its internal indicator set?",
    image: "/diagnostic/intermediate/question-19.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 20,
    category: "Territorial Ecosystems & Regeneration",
    question: "To what extent are stakeholders involved in co-design/co-creation of circular solutions?",
    image: "/diagnostic/intermediate/question-20.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 21,
    category: "Territorial Ecosystems & Regeneration",
    question: "How systematically do you collect and integrate stakeholder feedback?",
    image: "/diagnostic/intermediate/question-21.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
    {
    id: 22,
    category: "Territorial Ecosystems & Regeneration",
    question: "To what extent does your circular initiative explicitly aim to regenerate local ecosystems (e.g. soil, water bodies, biodiversity) beyond compliance?",
    image: "/diagnostic/intermediate/question-22.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 23,
    category: "Organisational & Digital Enablers",
    question: "Does your organisation have a formal plan for developing CE skills?",
    image: "/diagnostic/intermediate/question-23.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 24,
    category: "Organisational & Digital Enablers",
    question: "To what extent are cross-functional teams used for CE?",
    image: "/diagnostic/intermediate/question-24.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 25,
    category: "Organisational & Digital Enablers",
    question: "To what extent do you use systems for traceability along the value chain?",
    image: "/diagnostic/intermediate/question-25.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 26,
    category: "Finance & Value Creation",
    question: "To what extent are circular initiatives integrated into your business/industrial plan?",
    image: "/diagnostic/intermediate/question-26.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 27,
    category: "Finance & Value Creation",
    question: "Do you maintain dialogue with banks regarding financing for CE?",
    image: "/diagnostic/intermediate/question-27.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 28,
    category: "Finance & Value Creation",
    question: "Which financial instruments have you used for CE?",
    image: "/diagnostic/intermediate/question-28.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 29,
    category: "Finance & Value Creation",
    question: "To what extent do you use explicit criteria to prioritise circular projects?",
    image: "/diagnostic/intermediate/question-29.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 30,
    category: "Finance & Value Creation",
    question: "To what extent are circularity indicators (e.g. share of secondary input, lifetime extension, reuse/recycling rates) integrated into business cases and investment appraisals for CE projects?",
    image: "/diagnostic/intermediate/question-30.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 31,
    category: "Overall Vision & Readiness",
    question: "To what extent are CE aspects integrated into enterprise risk-management?",
    image: "/diagnostic/intermediate/question-31.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
      {
    id: 32,
    category: "Overall Vision & Readiness",
    question: "To what extent are CE aspects integrated into enterprise risk-management?",
    image: "/diagnostic/intermediate/question-32.png",
    options: [
      { id: "A", label: "Not at all" },
      { id: "B", label: "Partially" },
      { id: "C", label: "Fully" },
    ],
  },
];
