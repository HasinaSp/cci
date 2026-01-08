import Image from "next/image";
import ActionCard from "./ActionCard";


const cards = [
  {
    image: "/resources/card-1.png",
    title: "News",
    description: "Suggest a news item on a circular economy topic.",
    details:
      "Publish an article or an event (conference, webinar, call for projects...).",
    icon: "/resources/edit.png",
    ctaLabel: "Submit an article",
    href: "/resources/news",
  },
  {
    image: "/resources/card-2.png",
    title: "Initiatives",
    description:
      "Present an initiative related to a current circular economy project.",
    details:
      "Share an ongoing project, pilot, experiment, or case study.",
    icon: "/resources/direct-inbox.png",
    ctaLabel: "Submit an Initiative",
    href: "/resources/initiatives",
  },
  {
    image: "/resources/card-3.png",
    title: "Resources",
    description:
      "Propose a resource to share your study or findings.",
    details:
      "Submit a study, report, guide, analytical document, or educational material.",
    icon: "/resources/direct-inbox.png",
    ctaLabel: "Submit a Resource",
    href: "/resources/resources",
  },
];

export default function ActionCardGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <ActionCard key={card.title} {...card} />
      ))}
    </div>
  );
}
