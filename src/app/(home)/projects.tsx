import { cacheLife } from "next/cache";
import { getProjects } from "~/content/projects";
import { ProjectList } from "~/features/home/project-list";

export async function Projects() {
  "use cache";
  cacheLife("max");

  const projects = await getProjects();

  const projectData = projects.map((p) => ({
    slug: p.slug,
    href: p.href,
    title: p.metadata.title,
    summary: p.metadata.summary,
    externalUrl: p.metadata.externalUrl,
  }));

  return (
    <section id="projects" className="border-neutral-400/20">
      <div className="text-neutral-700 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-8 mb-6">
          Projects
        </h2>
        <ProjectList projects={projectData} />
      </div>
    </section>
  );
}
