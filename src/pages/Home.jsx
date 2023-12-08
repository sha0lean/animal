//=components/pages/Home.jsx

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card/Card"
import Hero from "../components/hero/Hero"
import Hippo from "../components/hippo/Hippo"
import CallToAction from "../components/ui/CallToAction"

const Home = () => {
  return (
    <div>
      <Hero />
      <div
        id="Cards"
        className="container mx-auto mb-14 grid grid-cols-1 gap-14 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-10 lg:max-w-6xl lg:grid-cols-4 lg:px-8"
      >
        <Card imageUrl="./src/assets/cards/card_lieu.webp" title="lieu" />
        <Card imageUrl="./src/assets/cards/card_cocktail.webp" title="cocktails" />
        <Card imageUrl="./src/assets/cards/card_vins.webp" title="vins & bières" />
        <Card imageUrl="./src/assets/cards/card_tapas.webp" title="tapas" />
      </div>
      <Hippo />
      <div
        id="description"
        className="flex flex-col gap-10 bg-secondary p-8 text-justify font-heading text-secondary sm:p-20 md:flex-row md:gap-20"
      >
        <div className="prose md:prose-xl text-bold md:w-1/2">
          <p id="text1">
            Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
            équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients... Guidée par une passion commune pour
            l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un
            service attentionné, dans une ambiance chaleureuse et amicale qui fait de
            notre établissement un véritable bar d&apos;ambiance...
          </p>
        </div>
        <div className=" md:prose-xl md:w-1/2">
          <p id="text2">
            Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
            équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients... Guidée par une passion commune pour
            l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un
            service attentionné, dans une ambiance chaleureuse et amicale qui fait de
            notre établissement un véritable bar d&apos;ambiance...
          </p>
        </div>
      </div>
      <div
        id="CTAs"
        className="flex flex-row items-center justify-center bg-secondary pb-8 sm:pb-12 md:flex-row"
      >
        <div className="flex justify-center gap-6">
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
        <div id="AboutLink" className="pl-8 ">
          <a href="" className="text-white no-underline ">
            <span className="group">
              <p className="text-center font-heading text-2xl text-neutral-600 group-hover:text-secondary">
                à propos
              </p>
              <div className="h-px w-0 bg-black duration-200 ease-in-out group-hover:w-full"></div>
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center bg-secondary"></div>
    </div>
  )
}

export default Home
