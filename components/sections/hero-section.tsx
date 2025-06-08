import { Mail, Linkedin, ExternalLink, Github } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientText } from "@/components/ui/gradient-text";
import { personalData } from "@/data/personal-data";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-1">
      <div className="container mx-auto max-w-4xl">
        <div className="hero-content space-y-8">
          <div className="space-y-4">
            <Typography variant="body" className="text-muted-foreground">
              {personalData.greeting}
            </Typography>

            <GradientText
              as="h1"
              variant="display"
              className="font-bold leading-tight"
            >
              {personalData.name}
            </GradientText>

            <Typography
              variant="large"
              className="text-muted-foreground max-w-3xl leading-relaxed"
            >
              {personalData.bio}
            </Typography>
          </div>

          <div className="social-buttons flex flex-wrap w-full gap-4">
            <GradientButton
              variant="outline"
              size="lg"
              className="flex gap-2 items-center"
            >
              <Mail className="h-4 w-4" />
              <a href="mailto:nnamaninwanne@gmail.com">Send an email</a>
            </GradientButton>

            <GradientButton
              variant="outline"
              size="lg"
              className="!flex gap-2 items-center"
            >
              <Linkedin className="h-4 w-4" />
              <a href="https://www.linkedin.com/in/nwanne-nnamani-1b0a03273/">
                LinkedIn
              </a>
            </GradientButton>

            <GradientButton
              variant="outline"
              size="lg"
              className="flex gap-2 items-center"
            >
              <Github className="h-4 w-4" />
              <a href="https://www.github.com/Nwanne-san">Github</a>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
