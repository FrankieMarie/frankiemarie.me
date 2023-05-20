import { ChangeEvent, FormEvent } from 'react';
import { FormState } from './Contact';

interface Props {
  form: FormState;
  loading: boolean;
  handleChange: (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (data: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ form, loading, handleChange, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
      <label className='flex flex-col'>
        <span className='mb-4 font-medium text-white'>Your Name</span>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          className='bg-tertiary rounded-lg border-none px-6 py-4 font-medium text-white outline-none'
        />
      </label>
      <label className='flex flex-col'>
        <span className='mb-4 font-medium text-white'>Your email</span>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          className='bg-tertiary rounded-lg border-none px-6 py-4 font-medium text-white outline-none'
        />
      </label>
      <label className='flex flex-col'>
        <span className='mb-4 font-medium text-white'>Your Message</span>
        <textarea
          rows={7}
          name='message'
          value={form.message}
          onChange={handleChange}
          className='bg-tertiary rounded-lg border-none px-6 py-4 font-medium text-white outline-none'
        />
      </label>

      <button
        type='submit'
        className='bg-tertiary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-[0_0_8px_rgb(250,95,85)] outline-none hover:text-secondary'
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};
