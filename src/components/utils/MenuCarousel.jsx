import { useEffect, useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const MenuCarousel = ({ menus }) => {
  const handle = useFullScreenHandle()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Détection de la taille de l'écran pour ajuster isMobile
    const mediaQuery = window.matchMedia("(max-width: 1024px)")
    const handleMediaChange = e => setIsMobile(e.matches)
    mediaQuery.addEventListener("change", handleMediaChange)

    // Définition initiale de isMobile
    setIsMobile(mediaQuery.matches)

    return () => {
      // Nettoyage de l'écouteur d'événement
      mediaQuery.removeEventListener("change", handleMediaChange)
    }
  }, [])

  useEffect(() => {
    // Réinitialisation de l'état de dragging après le glissement
    const timerId = dragging ? setTimeout(() => setDragging(false), 300) : null
    return () => {
      if (timerId) clearTimeout(timerId)
    }
  }, [dragging])

  const toggleFullScreen = () => {
    // Basculer le mode plein écran
    setIsFullScreen(current => {
      const newState = !current
      newState ? handle.enter() : handle.exit()
      return newState
    })
  }

  const sliderSettings = {
    dots: true,
    infinite: !isFullScreen,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    beforeChange: () => setDragging(true),
    afterChange: () => setTimeout(() => setDragging(false), 300),
  }

  // Styles pour le mode plein écran
  const fullScreenStyles = isFullScreen
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "100%",
        maxHeight: "100vh",
        objectFit: "contain",
        margin: "auto",
      }
    : {}

  //:: Rendu JSX
  return (
    <FullScreen handle={handle}>
      <Slider {...sliderSettings}>
        {menus.map((menu, index) => (
          <div
            key={index}
            className="relative p-4 focus:outline-none"
            style={isFullScreen ? fullScreenStyles : {}}
            onMouseEnter={!isMobile ? () => setHoveredImageIndex(index) : undefined}
            onMouseLeave={!isMobile ? () => setHoveredImageIndex(null) : undefined}
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
                className="cursor-pointer"
                onMouseDown={() => setDragging(false)}
                onClick={event => {
                  // Empêche le mode plein écran si un glissement a été détecté
                  if (!dragging) {
                    toggleFullScreen(event)
                  }
                }}
              >
                {/* Icône ou texte pour le plein écran */}
              </div>
            )}
            {/* Image avec gestionnaire de clic pour basculer le mode plein écran */}
            <img
              src={menu}
              alt={`Menu ${index + 1}`}
              className="cursor-poiiiiinter h-auto w-full"
              style={fullScreenStyles}
              onClick={!dragging ? toggleFullScreen : undefined}
              // Suppression de onMouseDown inutile
            />
          </div>
        ))}
      </Slider>
    </FullScreen>
  )
}

export default MenuCarousel
