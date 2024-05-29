import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const Route = createRootRoute({
  component: Root
});

function Root() {
  return (
    <main className="flex h-full flex-col bg-darkest text-lightest">
      <div className="flex gap-2 p-2">
        <Navbar />
      </div>
      <hr />
      <div className="mx-auto w-full max-w-screen-content flex-grow p-8">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
