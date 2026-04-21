import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { ProjectPage } from "./pages/ProjectPage.tsx";
import { Footer } from "./layout/Footer.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";

const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Wilbur Stanley - Software Engineer",
      "/projects": "Projects | Wilbur",
    };

    document.title = titles[location.pathname] ?? "Wilbur Stanley - Software Engineer";
  }, [location.pathname]);
};

const App = () => {
  useDocumentTitle();

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;