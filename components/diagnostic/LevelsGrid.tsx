const levels = [
  {
    title: "Basic Level",
    titleClass: "text-slate-900",
    img: "/diagnostic/card-1.png",
    duration: "~15 minutes",
    durationIcon: "clock-[#204C9C]",
    durationClass: "text-[#204C9C] bg-[#CADDFF]  rounded-full py-2 px-3 w-fit",
    predescription: "Get a first clear picture of your circular maturity.",
    description:
      "This level offers a quick and accessible overview of your current practices. It focuses on key topics such as resource use, waste management, and general awareness of circular economy principles. Ideal for getting started and identifying your first areas for improvement.",
    bestIcon: "medal-[#204C9C]",
    best: "Best for organizations beginning their circular journey or carrying out a first assessment.",
    bestClass: "text-[#204C9C]",
    cta: "Start Basic Level",
  },
  {
    title: "Intermediate Level",
    titleClass: "text-slate-900",
    img: "/diagnostic/card-2.png",
    duration: "~30 minutes",
    durationIcon: "clock-[#0B9AD7]",
    durationClass: "text-[#0B9AD7] bg-[#D0F1FF]  rounded-full py-2 px-3 w-fit",
    predescription: "Go deeper into your practices and structure your approach.",
    description:
      "This level explores how circularity is integrated into your operations, governance, energy use, procurement and internal processes. It helps you better understand what is already in place, identify gaps, and refine your strategy with structured and actionable insights.",
    bestIcon: "medal-[#0B9AD7]",
    best: "Best for organizations with initial initiatives and teams looking to strengthen their circular strategy.",
    bestClass: "text-[#0B9AD7]",
    cta: "Start Intermediate Level",
  },
  {
    title: "Advanced Level",
    titleClass: "text-slate-900",
    img: "/diagnostic/card-3.png",
    duration: "~60 minutes",
    durationIcon: "clock-[#44B574]",
    durationClass: "text-[#44B574] bg-[#C2FFDC]  rounded-full py-2 px-3 w-fit",
    predescription: "Conduct a full strategic analysis of your circular performance.",
    description:
      "This level provides a comprehensive and systemic assessment across your entire value chain. It integrates life-cycle thinking, advanced waste valorization, long-term governance, monitoring and performance indicators. Designed to support decision-making and long-term strategic planning.",
    bestIcon: "medal-[#44B574]",
    best: "Best for organizations already engaged in circularity and ready to manage their transition with data-driven insights.",
    bestClass: "text-[#44B574]",
    cta: "Start Advanced Level",
  },
];

export default function LevelsGrid() {
const renderIcon = (value: string, className = "h-4 w-4") => {
  // Exemple: "medal-[#204C9C]"
  const [name, color] = value.split("-[");

  const common = `${className} ${color ? `text-[${color.replace("]", "")}]` : ""}`;

  switch (name) {
    case "medal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Ribbon */}
          <path d="M7 2h4l1 4-3 2-3-2 1-4Z" />
          <path d="M13 2h4l1 4-3 2-3-2 1-4Z" />

          {/* Medal */}
          <circle cx="12" cy="14" r="5" />

          {/* Star */}
          <path d="M12 11.5l.95 1.93 2.13.31-1.54 1.5.36 2.12L12 16.3l-1.9 1.01.36-2.12-1.54-1.5 2.13-.31L12 11.5Z" />
        </svg>
      );

    case "clock":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
};


  return (
    <section className="bg-slate-50 pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {levels.map((level, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-md"
          >
            {/* Image */}
            <img
              src={level.img}
              alt=""
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 gap-2">
              <h3 className={`text-lg font-bold ${level.titleClass}`}>
                {level.title}
              </h3>

              <p className={`mt-2 text-sm flex items-center gap-2 ${level.durationClass}`}>
                <span className="inline-flex items-center">{renderIcon(level.durationIcon)}</span>
                <span className="font-medium">Estimated duration {level.duration}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {level.predescription}
              </p>

              <p className="mt-2 text-sm text-slate-600">
                {level.description}
              </p>

              <p className={`mt-2 text-sm flex items-center gap-2 ${level.bestClass}`}>
                <span className="inline-flex items-center">{renderIcon(level.bestIcon)}</span>
                <span className="font-medium">{level.best}</span>
              </p>

              <button className="m-4 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                {level.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
