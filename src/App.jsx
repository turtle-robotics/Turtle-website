import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import DevelopmentPrograms from "./pages/DevelopmentPrograms";
import Hatchling from "./pages/Hatchling";
import WorkshopSeries from "./pages/WorkshopSeries";
import Apply from "./pages/Apply";
import Sponsorship from "./pages/Sponsorship";
import Showcase from "./pages/Showcase";

function App(Component, pageProps) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/development-programs" element={<DevelopmentPrograms />} />
        <Route path="/hatchling" element={<Hatchling />} />
        <Route path="/workshop-series" element={<WorkshopSeries />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
