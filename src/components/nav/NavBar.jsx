//=components/nav/NavBar.jsx

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"

const Navbar = () => {
  //= État pour gérer l'affichage mobile (inférieur à 480px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  //= Utilisation de useEffect pour écouter les changements de taille de la fenêtre
  useEffect(() => {
    const adjustNavbar = () => {
      setIsMobile(window.innerWidth < 768)
    }

    //= Ajout de l'écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", adjustNavbar)

    //= Nettoyage de l'écouteur d'événement
    return () => window.removeEventListener("resize", adjustNavbar)
  }, [])

  //= Fonction pour basculer l'affichage mobile
  const toggleMobileNav = () => {
    setIsMobile(!isMobile)
  }

  return (
    //= Structure de la barre de navigation
    <nav className="h-fit w-screen overflow-hidden bg-primary">
      <div className="m-auto flex h-16 items-center justify-between px-4 py-4 text-white lg:px-8">
        <FontAwesomeIcon
          icon={isMobile ? faTimes : faBars}
          className="cursor-pointer text-xl md:hidden"
          onClick={toggleMobileNav}
        />

        <ul
          id="navItems"
          className={`lg:gap- cursor-pointer items-center gap-6 text-lg uppercase tracking-wider
          ${isMobile ? "hidden" : "flex"} `}
        >
          <NavItem name="nos menus" link="/menus" />
          <NavItem name="événements" link="/events" />
          <NavItem name="l'équipe" link="/team" />
          <NavItem name="contact" link="/contact" />
        </ul>

        <h1 className="cursor-pointer text-xl font-bold uppercase tracking-wider lg:text-2xl">🦁</h1>

        <ul
          id="mobileNav"
          className={`
          fixed inset-0 top-16 flex h-full w-[40%] cursor-pointer flex-col gap-[2.75rem]
          bg-primary px-4 pt-16 text-xl uppercase duration-500 ease-in-out 
          ${isMobile ? "left-0" : "left-[-70%]"}`}
        >
          <NavItem name="nos menus" link="/menus" />
          <NavItem name="événements" link="/events" />
          <NavItem name="l'équipe" link="/team" />
          <NavItem name="contact" link="/contact" />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
