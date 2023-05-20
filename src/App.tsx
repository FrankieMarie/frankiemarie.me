import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <div className='relative z-0'>
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
