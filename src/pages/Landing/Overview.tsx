import { ScrollAnchor } from "src/components/ScrollAnchor";
import { SectionHeading } from "src/components/SectionHeading";
import { SectionWrapper } from "src/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "src/utils/motion";

export const Overview = SectionWrapper(() => {
  return (
    <section id="overview" className="px-8">
      <ScrollAnchor id="overview" />
      <SectionHeading text="OVERVIEW" subText="a bit about me." />
      <motion.div className="mx-auto max-w-5xl" variants={textVariant()}>
        <motion.p variants={fadeIn("up", "", 0.1, 1)} className="mx-auto mt-4">
          I am a web developer from the Upper Peninsula of Michigan. I specialize in building front end web applications with a focus on design, semantics, accessibility, and user experience. I have been working with TypeScript and modern web frameworks professionally for over 6 years. I particularly enjoy writing CSS and building user interfaces that people enjoy interacting with. If I'm not coding, and the weather is nice, I'm usually out on my kayak, fishing or exploring around. 
        </motion.p>
      </motion.div>
    </section>
  );
}, "overview");
