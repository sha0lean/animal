// Hero.jsx
import logoAnimal from "../../assets/logo/logo_animal_white.png"
import styles from "./hero.module.css"

const Hero = () => {
  return (
    <div
      className={
        styles.hero +
        " flex flex-col items-start justify-around bg-contain bg-right-top md:flex-row"
      }
    >
      <img
        src={logoAnimal}
        alt="Logo du Bar"
        className="w-2/3 items-center justify-center  p-20 sm:max-w-md md:max-w-md"
      />
      {/* <img
        // src={lionBanner}
        alt="Visage de Lion"
        className="w-1/4 md:max-w-md"
      /> */}
    </div>
  )
}

export default Hero
