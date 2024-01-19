//=components/utils/MenuCarousel.jsx

//=components/utils/MenuCarousel.jsx

import { useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const MenuCarousel = ({ menus }) => {
  const handle = useFullScreenHandle()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    isFullScreen ? handle.exit() : handle.enter()
  }

  const sliderSettings = {
    dots: true,
    infinite: !isFullScreen,
    speed: 500,
    slidesToShow: 3, // Par défaut, affiche 3 images
    slidesToScroll: 3, // Par défaut, défile de 3 en 3
    swipe: !isFullScreen,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2, // Sur les écrans lg, affiche 2 images
          slidesToScroll: 2, // Sur les écrans lg, défile de 2 en 2
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1, // Sur les écrans md et plus petits, affiche 1 image
          slidesToScroll: 1, // Sur les écrans md et plus petits, défile de 1 en 1
        },
      },
    ],
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
  }

  const imageStyle = isFullScreen ? "image-fullscreen" : ""

  const containerFullScreenStyle = isFullScreen
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }
    : null

  const imageFullScreenStyle = isFullScreen
    ? {
        maxWidth: "100%", // Limite la largeur maximale
        maxHeight: "100vh", // Limite la hauteur maximale
        objectFit: "contain",
        margin: "auto",
      }
    : null

  return (
    <FullScreen handle={handle}>
      <Slider {...sliderSettings}>
        {menus.map((menu, index) => (
          <div
            key={index}
            style={containerFullScreenStyle} // Applique le style au conteneur
            className="relative p-4 focus:outline-none"
            onMouseEnter={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(null)}
          >
            {hoveredImageIndex === index && (
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
                onClick={e => e.stopPropagation()} // Empêche la propagation de l'événement de clic
              >
                {/* Icône ou texte pour le plein écran */}
              </div>
            )}
            <img
              src={menu}
              alt={`Menu ${index + 1}`}
              style={imageFullScreenStyle} // Applique le style à l'image
              className={`h-auto w-full cursor-pointer ${imageStyle}`}
              onClick={isSliding ? null : toggleFullScreen} // Empêche le plein écran en cas de glissement
              onMouseDown={() => setIsSliding(false)}
            />
          </div>
        ))}
      </Slider>
    </FullScreen>
  )
}

export default MenuCarousel
