import { createFileRoute } from '@tanstack/react-router';
import { About } from '../components/About';
import { Projects } from '../components/Projects';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className="flex h-full flex-col">
      <About />
      <Projects />
    </div>
  );
}
