import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Hatchling from './pages/Hatchling'
import WorkshopSeries from './pages/WorkshopSeries'
import Apply from './pages/Apply'
import Sponsorship from './pages/Sponsorship'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/hatchling" element={<Hatchling />} />
          <Route path="/workshop-series" element={<WorkshopSeries />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App 