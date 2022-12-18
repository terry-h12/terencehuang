import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
