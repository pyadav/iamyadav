import { BioSection } from "~/components/bio-section";
import { BlogSection, ProjectsSection } from "~/components/home-sections";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white selection:bg-neutral-200 selection:text-neutral-900">
      <BioSection />
      <section className="flex w-full flex-col items-center bg-white">
        <ProjectsSection />
        <BlogSection />
      </section>
    </main>
  );
}
