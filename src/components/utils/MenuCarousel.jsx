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
  const [showHoverCircle, setShowHoverCircle] = useState(false)

  const handleMouseMove = (event, index) => {
    //: Obtenir les coordonnées du centre de l'image actuelle
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    //: Calculer la distance entre la souris et le centre de l'image
    const distance = Math.sqrt(
      Math.pow(centerX - event.clientX, 2) + Math.pow(centerY - event.clientY, 2)
    )
    //: Afficher le cercle de survol si la distance est <= 200px
    if (distance <= 100) {
      setShowHoverCircle(true)
      setHoveredImageIndex(index)
    } else {
      setShowHoverCircle(false)
      setHoveredImageIndex(null)
    }
  }

  //:: Gestion "isMobile"
  useEffect(() => {
    //: Détection de la taille de l'écran pour ajuster isMobile
    const mediaQuery = window.matchMedia("(max-width: 1024px)")
    const handleMediaChange = e => setIsMobile(e.matches)
    mediaQuery.addEventListener("change", handleMediaChange)

    //: Définition initiale de isMobile
    setIsMobile(mediaQuery.matches)

    return () => {
      //: Nettoyage de l'écouteur d'événement
      mediaQuery.removeEventListener("change", handleMediaChange)
    }
  }, [])

  //:: Fonction Contrôle du glissement
  useEffect(() => {
    const timerId = dragging && setTimeout(() => setDragging(false), 300)
    return () => clearTimeout(timerId)
  }, [dragging])

  //:: Fullscreen Toggle
  const toggleFullScreen = () => {
    setIsFullScreen(current => {
      const newState = !current
      newState ? handle.enter() : handle.exit()
      return newState
    })
  }

  //:: Fullscreen Exit handle `Esc` key
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow = document.fullscreenElement != null
      setIsFullScreen(isFullScreenNow)
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [])

  //:: Fullscreen Exit
  const exitFullScreen = () => {
    handle.exit() //: Appelle la méthode exit du handle
    setIsFullScreen(false) //: Met à jour l'état isFullScreen
  }

  //:: Close button styles
  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    cursor: "pointer",
    zIndex: 1000,
    //: Style de l'icône (à personnaliser selon tes besoins)
  }

  //:: Réglages du slick-slider
  const sliderSettings = {
    dots: true,
    infinite: !isFullScreen,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
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

  //:: Fullscreen styles
  //: Styles pour le mode plein écran
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
      {isFullScreen && (
        <div style={closeButtonStyle} onClick={exitFullScreen}>
          ✖
        </div>
      )}
      <Slider {...sliderSettings}>
        {menus.map((menu, index) => (
          <div
            id="PAGE_CONTAINER"
            key={index}
            className="relative focus:outline-none sm:p-4"
            style={isFullScreen ? fullScreenStyles : {}}
            onMouseLeave={() => setHoveredImageIndex(null)}
            onMouseMove={event => !isMobile && handleMouseMove(event, index)}
          >
            {hoveredImageIndex === index && !isMobile && showHoverCircle && (
              //: Style pour le cercle de survol
              <div
                id="FULLSCREEN_BUTTON"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(114, 96, 47, 0.166)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="cursor-pointer"
                onMouseDown={() => setDragging(false)}
                onClick={event => {
                  //: Empêche le mode plein écran si un glissement a été détecté
                  if (!dragging) {
                    toggleFullScreen(event)
                  }
                }}
              ></div>
            )}
            <img
              src={menu}
              alt={`Menu ${index + 1}`}
              className="h-auto w-full"
              style={fullScreenStyles}
              onClick={!dragging}
            />
          </div>
        ))}
      </Slider>
    </FullScreen>
  )
}

export default MenuCarousel
