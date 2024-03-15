import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Library } from "./pages/Library";
import { PATHS } from "./routes";
import { ComingSoon } from "./pages/ComingSoon";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path={PATHS.default} element={<Landing />} />
        <Route path={PATHS.library} element={<Library />} />
        <Route path={PATHS.comingSoon} element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};
