import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
