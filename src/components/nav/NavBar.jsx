//=components/nav/NavBar.jsx

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"

const Navbar = () => {
  //= initialise la variable d'état locale 'isMobile' à false si largeur desktop, true si largeur mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  //= initialise isMenuOpen à false
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //= useEffect pour écouter les changements de taille de la fenêtre
  useEffect(() => {
    const adjustNavbar = () => {
      setIsMobile(window.innerWidth < 768)
    }

    //= Ajout de l'écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", adjustNavbar)

    //= Nettoyage de l'écouteur d'événement
    return () => window.removeEventListener("resize", adjustNavbar)
  }, [])

  //= Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log("   isMobile:  ", isMobile, "\n isMenuOpen:  ", isMenuOpen)

  return (
    <nav className="h-fit w-screen">
      <container
        onClick={toggleMobileNav}
        className="relative z-10 m-auto flex h-16 items-center justify-start px-8 text-white"
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="cursor-pointer text-xl md:hidden"
        />
        <ul
          id="navItems group"
          className={`
          hidden cursor-pointer
          gap-16 font-heading
          text-3xl md:flex lg:gap-20
          ${isMobile && isMenuOpen ? "hidden" : "flex"} `}
        >
          <NavItem name="nos menus" link="/menus" />
          <NavItem name="événements" link="/events" />
          <NavItem name="l'équipe" link="/team" />
          <NavItem name="contact" link="/contact" />
        </ul>
        <ul
          id="mobileNav"
          className={`
            fixed left-0 top-0 z-0 ${isMobile && isMenuOpen ? "" : "left-[-100%]"}

            flex h-full w-[100%] 
            cursor-pointer flex-col
            gap-[2.75rem] bg-primary px-4 
            
            pt-16 font-heading
            text-4xl duration-500 ease-in-out
          `}
        >
          <NavItem name="nos menus" link="/menus" />
          <NavItem name="événements" link="/events" />
          <NavItem name="l'équipe" link="/team" />
          <NavItem name="contact" link="/contact" />
        </ul>
      </container>
    </nav>
  )
}

export default Navbar
