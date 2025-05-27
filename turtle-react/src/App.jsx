import { useState } from 'react';
import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from "./layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/hatchling' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/apply' element={<Home />} />
          <Route path="*" element={<h1>Not A Valid Path 404</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
