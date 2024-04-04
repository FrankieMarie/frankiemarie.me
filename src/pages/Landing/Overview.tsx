import { ScrollAnchor } from "src/components/ScrollAnchor";
import { SectionHeading } from "src/components/SectionHeading";

export const Overview = () => {
  return (
    <section id="overview" className="mt-12 px-8 sm:mt-24">
      <ScrollAnchor id="overview" />
      <SectionHeading text="OVERVIEW" subText="a bit about me." />
      <div className="mx-auto max-w-4xl">
        <p className="mx-auto mt-4 max-w-5xl">
          I am a web developer from the Upper Peninsula of Michigan. I began
          teaching myself HTML, CSS, and JavaScript in my teens. In my early
          twenties, I took a software engineering bootcamp in Phoenix, AZ, and
          landed my first developer role in Tempe, AZ shortly after. I
          specialize in building full stack applications with a focus on front
          end design, semantics, accessibility, and user experience.
        </p>

        <p className="mx-auto mt-4 max-w-5xl">
          Outside of tech, I also enjoy the outdoor activities that the UP has
          to offer, such as kayaking, fishing, and riding my ATV. I also mess
          around with Photoshop, drawing, spray paint art, sculpting, and
          working on my house and truck.
        </p>
      </div>
    </section>
  );
};
