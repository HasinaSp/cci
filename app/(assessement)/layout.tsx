export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-slate-950">
        {children}
      </body>
    </html>
  );
}
