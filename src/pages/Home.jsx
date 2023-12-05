//=components/pages/Home.jsx

import Card from "../components/card/Card"
import Hero from "../components/hero/Hero"
import Breakpoints from "../components/utils/Breakpoints"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto mb-14 grid grid-cols-1 gap-14 px-4 sm:px-6 md:grid-cols-2 md:gap-10 lg:max-w-6xl lg:grid-cols-4 lg:px-8">
        <Card imageUrl="./src/assets/cards/card_lieu.webp" title="lieu" />
        <Card imageUrl="./src/assets/cards/card_cocktail.webp" title="cocktails" />
        <Card imageUrl="./src/assets/cards/card_vins.webp" title="vins & bières" />
        <Card imageUrl="./src/assets/cards/card_tapas.webp" title="tapas" />
      </div>
      <Breakpoints />
    </div>
  )
}

export default Home
