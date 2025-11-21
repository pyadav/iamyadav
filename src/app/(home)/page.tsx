import { Bio } from "~/features/home/bio";
import { Projects } from "./projects";
import { cacheLife } from "next/cache";

export default async function Home() {
  "use cache";
  cacheLife("max");

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <div className="mx-auto w-full max-w-3xl min-h-screen border-x border-neutral-400/20 flex flex-col justify-center gap-8">
        <Bio />
        <Projects />
      </div>
    </main>
  );
}
