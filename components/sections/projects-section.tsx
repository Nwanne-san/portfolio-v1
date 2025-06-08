import { Typography } from "@/components/ui/typography";
import { ProjectCard } from "@/components/ui/project-card";
import { featuredProjects } from "@/data/projects-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="animate-section py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          className="mb-12 text-muted-foreground uppercase tracking-wider"
        >
          Featured Projects
        </Typography>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
