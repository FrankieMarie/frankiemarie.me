import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './components';
import Library from './components/Library';
import { PATHS } from './routes';

export const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path={PATHS.default} element={<Landing />} />
        <Route path={PATHS.library} element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
};
