import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";

/** Scrolls to the #hash target after navigation, or to the top for a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // The target may not be rendered yet right after a route change.
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (tries++ < 20) setTimeout(tick, 50);
    };
    tick();
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [query, setQuery] = useState("");

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollManager />
      <Navbar theme={theme} onToggleTheme={toggleTheme} query={query} onQuery={setQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Home query={query} />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
