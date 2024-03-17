import { SectionHeading } from "src/components/SectionHeading";
import { ProjectCard } from "src/components/ProjectCard";
import { PATHS } from "src/routes";

export const Projects = () => {
  return (
    <section id="projects" className="mt-16 px-8">
      <SectionHeading text="PROJECTS" subText="some things i built." />
      <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-3">
        <ProjectCard
          title="Subscription Portal"
          url={`https://frankiemarie.me${PATHS.comingSoon}`}
          text="Account portal app for users to manage their subscription plans for ecommerce services."
          tags={["REACT", "TS", "TAILWIND", "VITE"]}
        />
        <ProjectCard
          title="The Rusty Spoke"
          url="https://www.rustyspoke.org/"
          text="The first production website I built. Created for a non profit bike shop
        in downtown Phoenix."
          tags={["HTML", "CSS", "JS"]}
        />
        <ProjectCard
          title="JS Drum Kit"
          url="https://frankiemarie.github.io/JavaScript-Drum-Kit/"
          text="A site that allows you to play drums in your browser, a fun tutorial from Wes Bos."
          tags={["HTML", "CSS", "JS"]}
        />
      </div>
    </section>
  );
};
