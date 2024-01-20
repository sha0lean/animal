//= components/utils/MenuCarousel.jsx

import { useEffect, useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

//:: Composant
const MenuCarousel = ({ menus }) => {
  //:: Initialisation des états

  //: Utilisation du hook useFullScreenHandle pour gérer le mode plein écran
  const handle = useFullScreenHandle()

  //: Initialisation de l'état isFullScreen à false

  const [isFullScreen, setIsFullScreen] = useState(false)

  //: Initialisation de l'état hoveredImageIndex à null
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  //: Basculer le mode plein écran
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen) //: Inverse la valeur
    //: si pas fullscreen :  sinon : ↓ (si fullscreen)
    !isFullScreen ? handle.enter() : handle.exit()
  }

  //:: Hooks
  //: Hook pour Gérer le changement de la taille de l'écran pour ajuster isMobile
  useEffect(() => {
    //: Crée un objet mediaQuery pour vérifier la taille de l'écran
    const mediaQuery = window.matchMedia("(max-width: 1024px)")
    //: Met à jour l'état isMobile en fonction de la correspondance de la requête média
    setIsMobile(mediaQuery.matches)

    //: Gère le changement de la correspondance de la requête média
    const handleMediaChange = e => setIsMobile(e.matches)

    //: Ajoute un écouteur d'événement pour détecter les changements de la correspondance de la requête média
    mediaQuery.addEventListener("change", handleMediaChange)
    //: Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  //:: Paramètres du Slider
  const sliderSettings = {
    dots: true,
    infinite: !isFullScreen,
    speed: 500,
    slidesToShow: 3, //: Par défaut, affiche 3 images
    slidesToScroll: 3, //: Par défaut, défile de 3 en 3
    swipe: !isFullScreen,
    responsive: [
      {
        breakpoint: 1024, //: lg breakpoint
        settings: {
          slidesToShow: 2, //: Sur les écrans lg, affiche 2 images
          slidesToScroll: 2, //: Sur les écrans lg, défile de 2 en 2
        },
      },
      {
        breakpoint: 768, //: md breakpoint
        settings: {
          slidesToShow: 1, //: Sur les écrans md et plus petits, affiche 1 image
          slidesToScroll: 1, //: Sur les écrans md et plus petits, défile de 1 en 1
        },
      },
    ],
  }

  //:: Custom Styles
  const fullScreenStyles = {
    container: isFullScreen
      ? {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }
      : null,
    image: isFullScreen
      ? { maxWidth: "100%", maxHeight: "100vh", objectFit: "contain", margin: "auto" }
      : null,
  }

  //:: Rendu JSX
  return (
    <FullScreen handle={handle}>
      <Slider {...sliderSettings}>
        {menus.map((menu, index) => (
          <div
            key={index}
            className="relative p-4 focus:outline-none"
            //: Appliquer les styles en mode plein écran au conteneurd
            style={fullScreenStyles.container}
            //: Gestionnaire d'événements pour les appareils non mobiles
            {...(!isMobile && {
              onMouseEnter: () => setHoveredImageIndex(index),
              onMouseLeave: () => setHoveredImageIndex(null),
            })}
          >
            {hoveredImageIndex === index && !isMobile && (
              //: Style pour le cercle de survol
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(114, 96, 47, 0.272)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={e => e.stopPropagation()} //: Empêche la propagation de l'événement de clic
              >
                {/* Icône ou texte pour le plein écran */}
              </div>
            )}
            {/* Image avec gestionnaire de clic pour basculer le mode plein écran */}
            <img
              src={menu}
              alt={`Menu ${index + 1}`}
              //: Appliquer les styles en mode plein écran à l'image
              style={fullScreenStyles.image}
              className="h-auto w-full cursor-pointer"
              onClick={toggleFullScreen}
            />
          </div>
        ))}
      </Slider>
    </FullScreen>
  )
}

export default MenuCarousel
