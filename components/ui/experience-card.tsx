import { Typography } from "@/components/ui/typography"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <Typography variant="h3">{experience.position}</Typography>
          <Typography variant="body" className="text-primary">
            {experience.company} / {experience.location}
          </Typography>
        </div>
        <Typography variant="body" className="text-muted-foreground">
          {experience.period}
        </Typography>
      </div>

      <div className="space-y-3">
        {experience.responsibilities.map((responsibility, index) => (
          <Typography key={index} variant="body" className="text-muted-foreground">
            - {responsibility}
          </Typography>
        ))}
      </div>
    </div>
  )
}
