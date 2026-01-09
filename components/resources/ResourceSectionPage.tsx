type Props = {
  title: string;
  children: React.ReactNode;
};

export function ResourceSectionPage({ title, children }: Props) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
