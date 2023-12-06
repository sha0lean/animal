//=components/pages/Home.jsx
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card/Card"
import Hero from "../components/hero/Hero"
import CallToAction from "../components/ui/CallToAction"
import Breakpoints from "../components/utils/Breakpoints"

const Home = () => {
  return (
    <div>
      <Hero />
      <Breakpoints />
      <div
        id="menu cards"
        className="container mx-auto mb-14 grid grid-cols-1 gap-14 px-4 sm:px-6 md:grid-cols-2 md:gap-10 lg:max-w-6xl lg:grid-cols-4 lg:px-8"
      >
        <Card imageUrl="./src/assets/cards/card_lieu.webp" title="lieu" />
        <Card imageUrl="./src/assets/cards/card_cocktail.webp" title="cocktails" />
        <Card imageUrl="./src/assets/cards/card_vins.webp" title="vins & bières" />
        <Card imageUrl="./src/assets/cards/card_tapas.webp" title="tapas" />
      </div>
      <div
        id="hippo"
        className="relative h-[30vh] w-full bg-[size:100%] bg-top bg-no-repeat sm:h-[46vh] md:bg-[length:100%]"
        style={{ backgroundImage: `url('/src/assets/artwork/hippo.webp')` }}
      >
        <div className="flex h-full items-start justify-end pr-10 font-heading">
          <div className="pt-8 text-right text-white md:p-16 md:pt-28">
            <p className="text-sm md:text-2xl">du Mardi au Samedi.</p>
            <p className="font-special text-sm font-bold md:text-3xl lg:text-4xl">
              17h30 - 01h
            </p>
            <p className="text-sm md:text-2xl lg:text-3xl">Ville-la-Grand</p>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col items-center justify-between border-4 border-amber-400 bg-secondary text-justify font-heading text-secondary md:flex-row md:gap-14">
        <div className="my-14 sm:mx-20 md:mx-5 md:w-1/2">
          <p>
            Plongez dans l'atmosphère vibrante de l'Animal Lodge Bar, où notre équipe
            dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients... Guidée par une passion commune pour
            l'hospitalité, chaque membre de notre équipe est déterminé à offrir un service
            attentionné, dans une ambiance chaleureuse et amicale qui fait de notre
            établissement un véritable bar d'ambiance...
          </p>
        </div>
        <div className="space-y-4 sm:mx-20 md:mx-5 md:w-1/2">
          <p>
            Plongez dans l'atmosphère vibrante de l'Animal Lodge Bar, où notre équipe
            dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients... Guidée par une passion commune pour
            l'hospitalité, chaque membre de notre équipe est déterminé à offrir un service
            attentionné, dans une ambiance chaleureuse et amicale qui fait de notre
            établissement un véritable bar d'ambiance...
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center border-2 border-amber-800 bg-secondary p-8 md:flex-row md:gap-14 md:p-16">
        <div className="flex justify-center space-x-4">
          <span className="block h-8 w-8 rounded-full bg-primary"></span>
          <span className="block h-8 w-8 rounded-full bg-primary"></span>
        </div>
        <div>
          <p className="pl-8 text-center font-heading text-secondary">à propos link</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center border-4 border-amber-300 bg-secondary p-8 md:flex-row md:gap-14 md:p-16">
        <div id="CTA" className="my-auto flex w-1/6 flex-col items-end gap-6">
          <CallToAction
            icon={faPhone}
            altText="Contact par téléphone"
            link="/Telephone"
            iconSize="2x"
          />
          <CallToAction
            icon={faWhatsapp}
            altText="Contact par Whatsapp"
            link="/Whatsapp"
            iconSize="3x"
          />
        </div>
      </div>
      <Breakpoints />
    </div>
  )
}

export default Home
