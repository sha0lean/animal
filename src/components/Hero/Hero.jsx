//=components/hero/Hero.jsx

import logoAnimal from "../../assets/logo/logo_animal_white.png"
import CallToAction from "../ui/CallToAction.jsx"
import styles from "./hero.module.css"

const Hero = () => {
  console.log(styles)
  return (
    <div
      className={
        styles.hero + " hero-section flex flex-col items-start justify-around bg-contain bg-right-top md:flex-row"
      }
    >
      <img
        src={logoAnimal}
        alt="Logo du Bar"
        className="w-2/3 items-center justify-center p-20 sm:max-w-md md:max-w-md"
      />
      <div>
        <CallToAction icon="/path/to/icon.png" link="https://example.com" />
        <CallToAction icon="/path/to/icon.png" link="https://example.com" />
      </div>
    </div>
  )
}

export default Hero
