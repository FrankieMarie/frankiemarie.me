import { SectionHeading } from "src/components/SectionHeading";
import { ProjectCard } from "src/components/ProjectCard";
import { ScrollAnchor } from "src/components/ScrollAnchor";
import { Image } from "src/components/Image";
import bridge from "src/assets/bridge.jpg";

export const Projects = () => {
  return (
    <section id="projects" className="mt-8 px-8 sm:mt-12">
      <ScrollAnchor id="projects" />
      <SectionHeading text="PROJECTS" subText="some things i built." />
      <div className="mx-auto mb-24 mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
        <ProjectCard
          title="React Playground"
          onClick={() =>
            window.open("https://github.com/FrankieMarie/react-playground")
          }
          text="Full-stack app where I build things and play with tools I am interested in."
          tags={["REACT", "ELYSIA", "TAILWIND"]}
        />
        <ProjectCard
          title="The Rusty Spoke"
          onClick={() => window.open("https://www.rustyspoke.org/")}
          text="The first website I built, created for a non profit bike shop in downtown Phoenix."
          tags={["HTML", "CSS", "JS"]}
        />
        <ProjectCard
          title="This Website"
          onClick={() =>
            window.open("https://github.com/FrankieMarie/frankiemarie.me")
          }
          text="My personal website portfolio. Constantly evolving, perpetually improving."
          tags={["REACT", "THREE", "FRAMER"]}
        />
      </div>

      <div className="mx-auto max-w-5xl opacity-80">
        <Image src={bridge} fallback={bridge} />
      </div>
    </section>
  );
};
