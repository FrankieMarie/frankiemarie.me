import { ScrollAnchor } from "src/components/ScrollAnchor";
import { SectionHeading } from "src/components/SectionHeading";
import { SectionWrapper } from "src/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "src/utils/motion";

export const Overview = SectionWrapper(() => {
  return (
    <section id="overview" className="mt-8 px-8 sm:mt-12">
      <ScrollAnchor id="overview" />
      <SectionHeading text="OVERVIEW" subText="a bit about me." />
      <motion.div className="mx-auto max-w-5xl" variants={textVariant()}>
        <motion.p variants={fadeIn("up", "", 0.1, 1)} className="mx-auto mt-4">
          I am a web developer from the Upper Peninsula of Michigan. I have over
          10 years experience working with HTML, CSS, and JavaScript, and over 6
          years professionally. I specialize in building front end applications
          with a focus on design, semantics, accessibility, and user experience.
        </motion.p>

        <p className="mx-auto mt-4">
          Outside of tech, I also enjoy the outdoor activities that the UP has
          to offer, such as kayaking, fishing, and riding my ATV. I also mess
          around with Photoshop, drawing, spray paint art, sculpting, and
          working on my house and truck.
        </p>
      </motion.div>
    </section>
  );
}, "overview");
