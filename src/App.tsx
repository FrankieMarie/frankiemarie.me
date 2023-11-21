import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Tech, StarsCanvas } from './components';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative'>
        <Hero />
        <div className='mx-auto max-w-screen-content bg-background bg-opacity-50'>
          <About />
          <Tech />
        </div>
        <Footer />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
