import { motion } from "framer-motion";
import { BallCanvas } from "../../components/Canvas";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../components/SectionWrapper";
import { fadeIn, textVariant } from "src/utils/motion";

const Tech = () => {
  return (
    <div className="px-8 pb-40 pt-16 sm:px-16">
      <motion.div className="text-center sm:text-left" variants={textVariant()}>
        <p className="pink-orange-text-gradient text-[14px] font-semibold uppercase tracking-wider sm:text-[18px]">
          Technologies
        </p>
        <h2 className="text-[30px] font-black text-white sm:text-[60px]">
          Tools Used.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-center font-sourceCode text-base leading-[28px] text-white sm:text-left"
      >
        These are some of the packages I used to build this site, yet my
        skillset expands into a variety of programming languages and libraries.
      </motion.p>

      <div className="mt-8 flex flex-row flex-wrap justify-center gap-10 sm:justify-start">
        {technologies.map((x) => (
          <div className="h-28 w-28 text-center" key={x.name}>
            <h3 className="pink-orange-text-gradient text-[14px] font-semibold uppercase tracking-wider">
              {x.name}
            </h3>
            <BallCanvas icon={x.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
