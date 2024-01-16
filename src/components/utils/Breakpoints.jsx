//=components/utils/Breakpoints.jsx

import { useEffect, useState } from "react"

function Breakpoints() {
  // State pour stocker et suivre la largeur actuelle de la fenêtre
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // State pour déterminer si la bannière doit être sticky ou non
  const [isSticky, setIsSticky] = useState(false)

  // Fonction pour gérer l'événement de scroll
  const handleScroll = () => {
    // Récupération de la position actuelle du scroll
    const scrollPosition = window.scrollY
    // Hauteur de la fenêtre du navigateur
    const windowHeight = window.innerHeight
    // Hauteur totale du contenu de la page
    const totalHeight = document.documentElement.scrollHeight

    // Mise à jour de isSticky selon que l'utilisateur est en bas de la page ou non
    setIsSticky(totalHeight - (scrollPosition + windowHeight) <= 200)
  }

  // Hook useEffect pour ajouter l'écouteur d'événements de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // Nettoyage en retirant l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Hook useEffect pour gérer les changements de taille de la fenêtre
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Rendu du composant
  return (
    <div
      className={`${
        isSticky
          ? "sticky top-0 border-b border-slate-400"
          : "fixed bottom-0 border-t border-slate-400"
      } left-0 z-10 w-full bg-neutral-900 p-1 font-special 
      text-white shadow-xl backdrop-blur-lg 
      sm:bg-neutral-900 md:bg-neutral-800 lg:bg-neutral-700 xl:bg-neutral-600`}
    >
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <p className="sm:hidden">-</p>
          <p className="hidden sm:block md:hidden">480 px - 768 px</p>
          <p className="hidden md:block lg:hidden">768 px - 976 px</p>
          <p className="hidden lg:block xl:hidden">976 px - 1440 px</p>
          <p className="hidden xl:block">1440 px</p>
        </div>
        <div className="w-1/3 text-center font-bold">
          <p>{windowWidth}</p>
        </div>
        <div className="w-1/3 text-right">
          <p className="sm:hidden">-</p>
          <p className="hidden sm:block md:hidden">small</p>
          <p className="hidden md:block lg:hidden">medium</p>
          <p className="hidden lg:block xl:hidden">large</p>
          <p className="hidden xl:block">extra large</p>
        </div>
      </div>
    </div>
  )
}

export default Breakpoints
