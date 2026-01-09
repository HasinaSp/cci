import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export function FuturLabHero({ title, image }: Props) {
  return (
    <section className="relative h-[320px]">
      <Image
        src={image}
        alt={title}
        fill
        className="w-full flex justify-center items-centerobject-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 text-white">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
