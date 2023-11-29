// src/Layout.jsx
import Footer from "./components/ui/Footer"
import Header from "./components/ui/Header"

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
