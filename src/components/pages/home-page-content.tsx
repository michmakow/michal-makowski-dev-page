import { HomeHeroSection } from "@/components/pages/home/home-hero-section";
import { HomePageInteractiveSections } from "@/components/pages/home/home-page-interactive-sections";

const HomePageContent = () => (
  <main className="relative h-screen">
    <section className="relative architect-grid grid h-dvh w-full grid-cols-[33.333333%_12px_minmax(0,1fr)] grid-rows-[33.333333%_12px_minmax(0,1fr)]">
      <HomeHeroSection />
      <HomePageInteractiveSections />
    </section>
  </main>
);

export default HomePageContent;
