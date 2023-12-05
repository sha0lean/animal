//=components/hero/Hero.jsx

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import logoAnimal from "../../assets/logo/logo_ANIMAL_black.webp"
import CallToAction from "../ui/CallToAction.jsx"

const Hero = () => {
  return (
    <div className="">
      <img
        src={logoAnimal}
        alt="Logo du Bar"
        className="w-5/6 px-10 py-10 sm:w-3/5 sm:py-10 md:w-1/2 md:pb-40 md:pt-20 lg:w-5/12 lg:pl-32"
      />
      <div className="mb-8 flex  flex-row border-cyan-400">
        <div
          id="headlines"
          className="flex h-full w-3/4 flex-col justify-center space-y-4 border-purple-400 px-16"
        >
          <h1 className="font-heading text-5xl font-bold">Bar à Cocktails & Tapas</h1>
          <p className="max-w-md font-heading text-gray-300">
            À l&apos;origine de l&apos;Animal Lodge Bar, Nelly et Bruno, véritable
            globe-trotters passionnés du voyage et fervents défenseurs des animaux, ont
            créé un havre qui évoque un univers d&apos;aventures.
          </p>
        </div>
        <div id="CTA" className="flex w-1/4 flex-col items-end gap-5 px-16">
          <CallToAction
            icon={faPhone}
            altText="Commander un café"
            link="/order-coffee"
            iconSize="2x"
          />
          <CallToAction
            icon={faWhatsapp}
            altText="Commander un café"
            link="/order-coffee"
            iconSize="3x"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
