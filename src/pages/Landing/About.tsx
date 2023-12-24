import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../components/SectionWrapper";

export const About = SectionWrapper(() => {
  return (
    <div
      id="about"
      className="px-8 py-16 pb-0 text-center sm:px-16 sm:text-left"
    >
      <motion.div variants={textVariant()}>
        <p className="pink-orange-text-gradient text-[14px] font-semibold uppercase tracking-wider sm:text-[18px]">
          Introduction
        </p>
        <h2 className="text-[30px] font-black text-white sm:text-[60px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 max-w-3xl font-sourceCode text-base leading-[28px] text-white"
      >
        I'm a full-stack software developer with experience in
        TypeScript/JavaScript, and frameworks such as React, Node.js, and
        Three.js. I'm a quick and perpetual learner, creating efficient,
        scalable, and user-friendly solutions.
      </motion.p>
    </div>
  );
}, "about");
