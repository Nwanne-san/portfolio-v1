import { experienceData } from "@/data/experience-data";
import React from "react";
import { ExperienceCard } from "../ui/experience-card";
import { Typography } from "../ui/typography";

export default function Contact() {
  return (
    <section className="animate-section py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          className="mb-12 text-muted-foreground uppercase tracking-wider"
        >
          Experience
        </Typography>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <div className="space-y- "></div>

          <div className="min-h-[400px]">
            {/* <ExperienceCard /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
