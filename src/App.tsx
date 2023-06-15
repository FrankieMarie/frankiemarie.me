import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <div className='relative min-h-screen'>
          <About />
          <Tech />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
