// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

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
