import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Landing } from "./pages/Landing";
import { PATHS } from "./routes";
import { ComingSoon } from "./pages/ComingSoon";
import { ServiceProvider } from "./components/ServiceProvider";
import { configureServices } from "./services";

export const App = () => {
  const services = configureServices();

  return (
    <ServiceProvider services={services}>
      <QueryClientProvider client={services.queryClient}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path={PATHS.default} element={<Landing />} />
            <Route path={PATHS.comingSoon} element={<ComingSoon />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ServiceProvider>
  );
};
