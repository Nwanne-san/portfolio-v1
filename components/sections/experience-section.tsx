"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experienceData } from "@/data/experience-data";

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section className="animate-section py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          className="mb-12 text-muted-foreground uppercase tracking-wider"
        >
          Experience
        </Typography>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <div className="space-y- ">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`p-4 roundedl cursor-pointer transition-all duration-300 ${
                  index === selectedExperience
                    ? "bg-muted border-l-2 border-primary"
                    : "hover:bg-muted/50 border-l-2 border-gray-300"
                }`}
                onClick={() => setSelectedExperience(index)}
                onMouseEnter={() => setSelectedExperience(index)}
              >
                <Typography
                  variant="body"
                  className={`font-medium transition-colors ${
                    index === selectedExperience
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {exp.company}
                </Typography>
              </div>
            ))}
          </div>

          <div className="min-h-[400px]">
            <ExperienceCard experience={experienceData[selectedExperience]} />
          </div>
        </div>
      </div>
    </section>
  );
}
