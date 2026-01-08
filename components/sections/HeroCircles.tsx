const circles = [
  { src: "/figure_1.png", size: 72 },
  { src: "/figure_2.png", size: 96 },
  { src: "/figure_3.png", size: 128 },
  { src: "/videos/circle.webm", size: 176 }, // centre
  { src: "/figure_5.png", size: 128 },
  { src: "/figure_6.png", size: 96 },
  { src: "/figure_7.png", size: 72 },
];

export default function HeroCircles() {
  return (
    <div className="absolute bottom-[-86px] left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-[-40px]">
        {circles.map((circle, i) => (
          <div
            key={i}
            style={{
              width: circle.size,
              height: circle.size,
            }}
            className="shrink-0 overflow-hidden rounded-full bg-white p-[6px] shadow-md"
          >
            {circle.src.endsWith('.webm') ? (
              <video
                src={circle.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <img
                src={circle.src}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
