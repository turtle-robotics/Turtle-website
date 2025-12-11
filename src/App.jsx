/**
 * Root App Component
 *
 * Main application entry point providing:
 * - Route definitions for all pages
 * - Theme context provider for dark/light mode
 * - Lazy-loaded pages to optimize bundle size
 * - Suspense fallback while pages load
 * - Global layout wrapper\n * Routing structure:
 * - /                  → Home page
 * - /about             → About page
 * - /projects          → Projects listing
 * - /projects/:id      → Project detail
 * - /hatchling         → Hatchling program info
 * - /workshop-series   → Workshop series info
 * - /showcase          → Annual showcase event
 * - /apply             → Application portal
 * - /sponsorship       → Sponsorship info
 * - /admin             → Admin dashboard (protected)\n * Lazy loading reduces initial bundle size by splitting routes into separate chunks.
 */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Lazy load pages to improve initial bundle size and time to interactive
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Hatchling = lazy(() => import("./pages/Hatchling"));
const WorkshopSeries = lazy(() => import("./pages/WorkshopSeries"));
const Apply = lazy(() => import("./pages/Apply"));
const Sponsorship = lazy(() => import("./pages/Sponsorship"));
const Showcase = lazy(() => import("./pages/Showcase"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

/**
 * PageLoader Component
 * Fallback UI shown while lazy-loaded pages are loading
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-xl font-light text-muted">Loading...</div>
  </div>
);

function App(Component, pageProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/hatchling" element={<Hatchling />} />
            <Route path="/workshop-series" element={<WorkshopSeries />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
