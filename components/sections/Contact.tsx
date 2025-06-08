import React from "react";
import { Nunito_Sans } from "next/font/google";
import { Typography } from "../ui/typography";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="animate-section py-20 px-6 " id="contact">
      <div className="container mx-auto max-w-6xl md:px-14">
        <Typography
          variant="h1"
          className="mb-12 text-muted-foreground capitalize text-center tracking-wider"
        >
          You Have An Idea ?
        </Typography>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <div className="hero-content flex flex-col space-y-8">
            <Typography
              variant="h4"
              className="text-muted-foreground tracking-widest"
            >
              Reach Out
            </Typography>
            <a
              href="mailto:nnamaninwanne@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="h3"
                className={`font-bold tracking-wide ${nunito.className} hover:text-primary`}
              >
                hi@nwanne
              </Typography>
            </a>
          </div>

          <div className="hero-content flex flex-col space-y-8 pt-12">
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="h3"
                className={`font-bold tracking-wide ${nunito.className} hover:text-primary`}
              >
                My Resume
              </Typography>
            </a>

            <span
              onClick={() => scrollToSection("projects")}
              className={`font-semibold tracking-wide ${nunito.className} hover:text-primary text-2xl cursor-pointer`}
            >
              My Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
