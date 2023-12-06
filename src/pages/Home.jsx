//=components/pages/Home.jsx

import Card from "../components/card/Card"
import Hero from "../components/hero/Hero"
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
        </div>
        <Breakpoints />
      </div>
    </div>
  )
}

export default Home
