import { HomeHeroSection } from "@/components/pages/home/home-hero-section";
import { HomePageInteractiveSections } from "@/components/pages/home/home-page-interactive-sections";

const HomePageContent = () => (
  <main className="relative min-h-screen lg:h-screen">
    <section className="relative architect-grid grid min-h-dvh w-full grid-cols-1 lg:h-dvh lg:grid-cols-[33.333333%_12px_minmax(0,1fr)] lg:grid-rows-[33.333333%_12px_minmax(0,1fr)]">
      <HomeHeroSection />
      <HomePageInteractiveSections />
    </section>
  </main>
);

export default HomePageContent;
