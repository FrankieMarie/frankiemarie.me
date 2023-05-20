import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { styles } from '../../styles';
import { slideIn } from '../../utils/motion';
import { SectionWrapper } from '../SectionWrapper';
import { Form } from './Form';

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact = SectionWrapper(() => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: 'JavaScript Mastery',
    //       from_email: form.email,
    //       to_email: 'sujata@jsmastery.pro',
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert('Thank you. I will get back to you as soon as possible.');

    //       setForm({
    //         name: '',
    //         email: '',
    //         message: '',
    //       });
    //     },
    //     (error: Error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert('Ahh, something went wrong. Please try again.');
    //     }
    //   );
  };

  return (
    <div className={`xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='bg-black-100 flex-[0.75] rounded-2xl p-8'
      >
        <p className='pink-orange-text-gradient text-[14px] uppercase tracking-wider sm:text-[18px]'>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <Form
          form={form}
          loading={loading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </motion.div>
    </div>
  );
}, 'contact');
