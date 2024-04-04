import { SectionHeading } from "src/components/SectionHeading";
import { ProjectCard } from "src/components/ProjectCard";
import { PATHS } from "src/routes";
import { useNavigate } from "react-router-dom";
import { ScrollAnchor } from "src/components/ScrollAnchor";

export const Projects = () => {
  const nav = useNavigate();
  return (
    <section id="projects" className="mt-12 px-8 sm:mt-24">
      <ScrollAnchor id="projects" />
      <SectionHeading text="PROJECTS" subText="some things i built." />
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
        <ProjectCard
          title="Subscription Portal"
          onClick={() => nav(PATHS.comingSoon)}
          text="Account management app to support recurring subscriptions for ecommerce services."
          tags={["REACT", "VITE", "TS", "TAILWIND"]}
        />
        <ProjectCard
          title="The Rusty Spoke"
          onClick={() => window.open("https://www.rustyspoke.org/")}
          text="The first website I built, created for a non profit bike shop in downtown Phoenix."
          tags={["HTML", "CSS", "JS", "GH-PAGES"]}
        />
        <ProjectCard
          title="Crystal View"
          onClick={() => nav(PATHS.comingSoon)}
          text="A website for my hometown golf course and pub & grille with a google events calendar."
          tags={["NEXT", "TS", "TAILWIND", "VERCEL"]}
        />
        <ProjectCard
          title="DnD App"
          onClick={() => nav(PATHS.comingSoon)}
          text="A full stack app for managing and viewing Dungeons and Dragons characters."
          tags={["REACT", "TS", "CSS", "VERCEL"]}
        />
        <ProjectCard
          title="Component Library"
          onClick={() => nav(PATHS.comingSoon)}
          text="I decided to build my own custom component library for components I use often in React Apps."
          tags={["REACT", "ARIA", "TS", "TAILWIND"]}
        />
        <ProjectCard
          title="This Website"
          onClick={() =>
            window.open("https://github.com/FrankieMarie/frankiemarie.me")
          }
          text="My personal website portfolio. Constantly evolving, perpetually improving."
          tags={["REACT", "TS", "THREE", "TAILWIND"]}
        />
      </div>
    </section>
  );
};
