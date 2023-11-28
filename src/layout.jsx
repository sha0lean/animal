// src/Layout.jsx
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"

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
