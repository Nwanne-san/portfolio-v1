"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisScrollProvider } from "@/components/providers/lenis-scroll-provider";
import Contact from "@/components/sections/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LenisScrollProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <Contact />
          </main>
        </div>
      </LenisScrollProvider>
    </ThemeProvider>
  );
}
