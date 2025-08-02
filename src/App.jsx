import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Hatchling from './pages/Hatchling'
import Apply from './pages/Apply'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hatchling" element={<Hatchling />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App 