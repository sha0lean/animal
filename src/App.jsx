// src/App.jsx
import Layout from "@/Layout"
import Home from "@/pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
