//=src/Layout.jsx

import Footer from "@components/ui/Footer"
import Header from "@components/ui/Header"
import { useLocation } from "react-router-dom"

function Layout({ children }) {
  // Récupère la route actuelle via le hook useLocation
  const location = useLocation()

  // Vérification si la route est la racine '/'
  const isHomePage = location.pathname === "/"

  // Utilisation d'une opération ternaire pour définir 'layoutClass'
  // Si 'isHomePage' est vrai (homepage), 'layoutClass' sera 'home-background'
  // Sinon, 'layoutClass' sera une chaîne de caractères vide
  const layoutClass = isHomePage ? "home-background" : ""

  // Début du rendu du composant Layout
  return (
    // 'div' est le conteneur principal du Layout
    // Si 'isHomePage' est vrai, l'ID 'LionHome' est appliqué à la div
    // La classe 'layoutClass' est ajoutée à la liste de classes; elle sera 'home-background' ou '' selon l'URL
    <div id={isHomePage ? "LionHome" : ""} className={` ${layoutClass}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
