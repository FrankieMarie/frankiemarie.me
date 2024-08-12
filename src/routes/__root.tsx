import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StarsCanvas } from '../components/Stars';

export const Route = createRootRoute({
  component: Root
});

function Root() {
  return (
    <main className="flex h-full flex-col bg-darkest text-lightest selection:bg-gold selection:text-darkest">
      <StarsCanvas />
      <Navbar />
      <div className="z-10 mx-auto h-full w-full max-w-screen-content flex-grow p-8">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
