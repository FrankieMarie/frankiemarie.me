import { CodeXml } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { Link } from '@tanstack/react-router';

function Projects() {
  return (
    <section id="projects" className="mt-24">
      <Link className="mb-8 block w-max" hash="projects">
        <h1 className="flex w-max items-center gap-2 font-dank text-24 text-gold hover:text-gold/80">
          <CodeXml /> Projects
        </h1>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <AnimatedBackground
          className="rounded-lg bg-darker"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6
          }}
          enableHover
        >
          {PROJECTS.map((project, index) => (
            <div key={index} data-id={`card-${index}`}>
              <div className="flex select-none flex-col space-y-1 p-4">
                <h3 className="text-base font-medium">{project.title}</h3>
                <p className="text-base text-light">{project.description}</p>
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  );
}

export { Projects };

const PROJECTS = [
  {
    id: 1,
    title: 'React Memory Game',
    description:
      'A simple memory game built with React and Vite, hosted with Azure Static Web Apps and automatic deployment with GitHub Actions.'
  },
  {
    id: 2,
    title: 'The Rusty Spoke',
    description:
      'The first website I built, for a non-profit bicycle repair shop in downtown Phoenix, AZ. Hosted on GitHub pages. Built with vanilla HTML.'
  },
  {
    id: 3,
    title: 'Paint River Rentals',
    description:
      'A website built for rental properties in my hometown. Hosted on GitHub Pages. Vanilla HTML and TypeScript with TailwindCSS.'
  },
  {
    id: 4,
    title: 'Fullstack Playground',
    description:
      'A fullstack React + Hono app where I experiment with tools I am interested in. Uses a SQLite DB with fullstack type safety.'
  },
  {
    id: 5,
    title: 'FM Web Dev',
    description:
      'My personal website. Built with React, Framer Motion, Three.js, and Tailwind. Constantly evolving, perpetually improving.'
  }
];
