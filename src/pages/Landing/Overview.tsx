import Bridge from "src/assets/bridge.jpg";
import { ScrollAnchor } from "src/components/ScrollAnchor";
import { SectionHeading } from "src/components/SectionHeading";
import { Image } from "src/components/Image";

export const Overview = () => {
  return (
    <section id="overview" className="mt-8 px-8 sm:mt-12">
      <ScrollAnchor id="overview" />
      <SectionHeading text="OVERVIEW" subText="a bit about me." />
      <div className="mx-auto max-w-5xl">
        <p className="mx-auto mt-4">
          I am a web developer from the Upper Peninsula of Michigan. I have over
          10 years experience working with HTML, CSS, and JavaScript, and over 6
          years professionally. I specialize in building front end applications
          with a focus on design, semantics, accessibility, and user experience.
        </p>

        <p className="mx-auto mt-4">
          Outside of tech, I also enjoy the outdoor activities that the UP has
          to offer, such as kayaking, fishing, and riding my ATV. I also mess
          around with Photoshop, drawing, spray paint art, sculpting, and
          working on my house and truck.
        </p>
      </div>
    </section>
  );
};
