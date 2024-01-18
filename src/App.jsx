//= src/App.jsx

import Layout from "@/Layout"
import About from "@/pages/About"
import Home from "@/pages/Home"
import Menus from "@/pages/Menus"
import Team from "@/pages/Team"
import Breakpoints from "@components/utils/Breakpoints"
import { pdfjs } from "react-pdf"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString()

function App() {
  return (
    <Router>
      <Breakpoints />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
