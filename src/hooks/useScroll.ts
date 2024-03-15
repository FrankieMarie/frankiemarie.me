import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "src/routes";

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled === false && location.hash !== "") {
      nav(PATHS.default);
    }
  }, [scrolled]);

  return { scrolled, activeHash: location.hash };
};
