import { ChevronRight } from 'lucide-react';
import { TextEffect } from './TextEffect';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from './Accordion';

function About() {
  return (
    <section id="about" className="flex-grow">
      <TextEffect className="text-80 mt-8" per="char" preset="fade" as="h1">
        Hi, I'm Frankie
      </TextEffect>
      <TextEffect className="text-22 text-lighter" per="word" preset="scale">
        I develop user interfaces and web applications
      </TextEffect>
      <Accordion className="mt-4 flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
        <AccordionItem value="getting-started">
          <AccordionTrigger className="flex items-center gap-2 py-0.5 text-left text-gold hover:text-gold/80">
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[expanded]:rotate-90" />
            <TextEffect className="font-dank text-14" per="word" preset="scale">
              Read more
            </TextEffect>
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-xl text-light">
              I am a web developer from the Upper Peninsula of Michigan. I
              specialize in building front end web applications with a focus on
              design, semantics, accessibility, and user experience. I have been
              working with TypeScript and modern web frameworks professionally
              for over 6 years. I particularly enjoy writing CSS and making
              things fun to interact with.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export { About };
