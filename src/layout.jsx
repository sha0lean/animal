// src/Layout.jsx
import Footer from "./components/ui/Footer"
import Header from "./components/ui/Header"

function Layout({ children }) {
  return (
    <div className="border- max-w-full overflow-hidden border-indigo-500">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
