import "../globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="antialiased text-slate-900">
        <Header />
        {children}
      </div>
    </div>
  );
}
