import { FormEvent } from "react";
import { NAME, EMAIL, SUBJECT, MESSAGE } from "src/api/types";

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const ContactForm = (props: Props) => {
  const { onSubmit } = props;

  return (
    <form
      className="mx-auto mt-8 flex w-full max-w-4xl flex-col gap-8"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
        <input
          className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white focus:outline-none"
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          name={NAME}
        />
      </div>
      <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
        <input
          className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white focus:outline-none"
          type="text"
          placeholder="Your Email"
          aria-label="Your Email"
          name={EMAIL}
        />
      </div>
      <div className="flex flex-col items-center border-b border-tertiary py-2 text-white transition-all placeholder:text-slate-400 focus-within:border-b-primary">
        <input
          className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white placeholder:text-slate-400 focus:outline-none"
          type="text"
          placeholder="Subject"
          aria-label="Subject"
          name={SUBJECT}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="px-2 text-slate-400">Message</label>
        <div className="flex border border-tertiary pt-2 text-white transition-all focus-within:border-primary">
          <textarea
            className="h-full w-full appearance-none border-none bg-transparent px-2 py-1 text-white focus:outline-none"
            aria-label="Message"
            rows={4}
            name={MESSAGE}
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex h-8 items-center self-start bg-secondary px-4 pt-[1px] font-bold leading-4 text-background transition-all hover:bg-primary"
      >
        Submit
      </button>
    </form>
  );
};
