import FinalCTA from "@/components/layout/FinalCTA";
import Footer from "@/components/layout/Footer";
import { FuturLabHero } from "@/components/resources/FuturLabHero";
import { ResourceContent } from "@/components/resources/ResourceContent";
import { ResourceMeta } from "@/components/resources/ResourceMeta";
import { ResourceSidebar } from "@/components/resources/ResourceSidebar";
import Resources from "@/components/sections/Resources";


export default function ResourcePage() {
  return (
    <div className="bg-white text-slate-900">
      <FuturLabHero
        title=""
        image="/resources/background.png"
      />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <ResourceMeta
          category="Circular Economy"
          date="05 December 2025"
          type="Initiative"
          updatedAt="05/12/2025"
        />
      </div>

    <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main content */}
            <ResourceContent />

            {/* Sidebar */}
            <ResourceSidebar />
        </div>
    </div>
        <Resources />
        <FinalCTA />
        <Footer />
    </div>
  );
}
