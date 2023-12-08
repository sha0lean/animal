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
        className="sm:pr-10sm:w-3/5 md:pb- w-5/6 px-10 py-0 pr-32 sm:py-10 md:w-1/2 md:pl-16 md:pt-20 lg:w-5/12 lg:pl-32"
      />
      <div className="mb-8 mt-10 flex  flex-row border-cyan-400">
        <div
          id="headlines"
          className="flex h-full w-5/6 flex-col justify-center space-y-4 border-purple-400 pl-4 sm:pl-16"
        >
          <h1 className="font-heading text-2xl font-bold sm:text-3xl md:text-5xl">
            Bar à<br />
            Cocktails
            <br />& Tapas
          </h1>

          <p className="max-w-md pr-10 font-heading text-sm text-gray-300 sm:text-lg">
            À l&apos;origine de l&apos;Animal Lodge Bar, Nelly et Bruno,
            <br /> véritable globe-trotters passionnés du voyage <br /> et fervents
            défenseurs des animaux, <br /> ont créé un havre qui évoque un univers
            d&apos;aventures.
          </p>
        </div>
        <div
          id="CTA"
          className="my-auto flex w-1/6 flex-col items-end gap-6 pr-6 sm:pr-10 md:pr-20"
        >
          <CallToAction
            icon={faPhone}
            altText="Contact par téléphone"
            link="/Telephone"
            iconSize="lg"
          />
          <CallToAction
            icon={faWhatsapp}
            altText="Contact par Whatsapp"
            link="/Whatsapp"
            iconSize="2x"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
