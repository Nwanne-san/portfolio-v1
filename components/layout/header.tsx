"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/components/ui/link";

export function Header() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className=" top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md ">
      <div className="container mx-auto px-10 pt-10">
        <nav className="flex items-center justify-between">
          <Typography variant="h3" className="font-bold">
            NN.
          </Typography>

          <div className="flex items-center gap-8">
            <span

              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary cursor-pointer"
            >
              Projects
            </span>

            <Link
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              Resume
            </Link>

            <span
              
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary cursor-pointer"
            >
              Contact
            </span>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-primary"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
