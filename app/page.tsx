import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { EngineeringHighlights } from "@/components/sections/engineering-highlights";
import { Skills } from "@/components/sections/skills";
import { GithubSection } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <EngineeringHighlights />
      <Skills />
      <GithubSection />
      <Contact />
    </>
  );
}
