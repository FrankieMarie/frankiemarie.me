import { SectionHeading } from "src/components/SectionHeading";

export const Overview = () => {
  return (
    <section id="overview" className="mx-auto mt-16 max-w-screen-content px-8">
      <SectionHeading text="OVERVIEW" subText="a bit about me." />
      <p className="mx-auto mt-4 max-w-5xl">
        I am a female in my 30's from the Upper Peninsula of Michigan. I am a
        front end focused developer with a full stack skillset. I began teaching
        myself HTML, CSS, and JS right out of high school. In my early twenties,
        I took a software engineering bootcamp in Phoenix, AZ, and landed my
        first developer role in Tempe, AZ shortly after. Recently, I have been
        developing my skills in linux systems, how networks work (and how they
        break), and cyber security.
      </p>

      <p className="mx-auto mt-4 max-w-5xl">
        Outside of tech, I also enjoy the outdoor activities that the UP has to
        offer, such as kayaking, fishing, and exploring trails on my ATV. I also
        mess around with Photoshop, drawing, spray paint art, sculpting, and
        working on my house and my truck.
      </p>
    </section>
  );
};
