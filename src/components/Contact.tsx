import { Link } from '@tanstack/react-router';
import { UserPen } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="mt-24">
      <Link className="mb-8 block w-max" hash="contact">
        <h1 className="flex w-max items-center gap-2 font-dank text-24 text-gold hover:text-gold/80">
          <UserPen /> Contact
        </h1>
      </Link>
      <p>Send me a message through email or LinkedIn.</p>
    </section>
  );
}

export { Contact };
