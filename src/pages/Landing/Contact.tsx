import { FormEvent } from "react";
import { NAME, EMAIL, SUBJECT, MESSAGE } from "src/api/types";
import { useSubmitContact } from "src/api/useSubmitContact";
import { ContactForm } from "src/components/ContactForm";
import { ScrollAnchor } from "src/components/ScrollAnchor";
import { SectionHeading } from "src/components/SectionHeading";

export const Contact = () => {
  const { mutateAsync } = useSubmitContact();

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const data = new FormData(e?.target as HTMLFormElement);
  //   const payload = {
  //     [NAME]: data.get(NAME),
  //     [EMAIL]: data.get(EMAIL),
  //     [SUBJECT]: data.get(SUBJECT),
  //     [MESSAGE]: data.get(MESSAGE),
  //   };

  //   mutateAsync(payload);
  // };

  return (
    <section className="mt-12 px-8 sm:mt-24">
      <ScrollAnchor id="contact" />
      <SectionHeading text="CONTACT" subText="lets build stuff." />
      <p className="mt-8 text-center">hello@frankiemarie.me</p>
      {/* <ContactForm onSubmit={handleSubmit} /> */}
    </section>
  );
};
