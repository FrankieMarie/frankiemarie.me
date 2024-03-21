import { SectionHeading } from "src/components/SectionHeading";

export const Contact = () => {
  return (
    <section id="contact" className="mt-24 px-8">
      <SectionHeading text="CONTACT" subText="frankie@frankiemarie.me" />

      <form className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-8">
        <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
          <input
            className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white focus:outline-none"
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
          />
        </div>
        <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
          <input
            className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white focus:outline-none"
            type="text"
            placeholder="Your Email"
            aria-label="Your Email"
          />
        </div>
        <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
          <input
            className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white placeholder:text-slate-400 focus:outline-none"
            type="text"
            placeholder="Subject"
            aria-label="Subject"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="px-2 text-slate-400">Message</label>
          <div className="flex border border-tertiary pt-2 text-white transition-all focus-within:border-primary">
            <textarea
              className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 text-white focus:outline-none"
              aria-label="Message"
              rows={4}
            />
          </div>
        </div>
        <button className="flex h-8 items-center self-start bg-secondary px-4 pt-[1px] font-bold leading-4 text-background transition-all hover:bg-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
