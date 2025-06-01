import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card group bg-card border border-border rounded-lg overflow-hidden gradient-border-default transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Typography variant="h4" className="group-hover:text-primary transition-colors">
            {project.title}
          </Typography>

          <Typography variant="body" className="text-muted-foreground">
            {project.description}
          </Typography>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Live demo
            </Button>
          )}

          {project.githubUrl && (
            <Button variant="ghost" size="sm">
              <Image
                src="/github-fill 1.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
