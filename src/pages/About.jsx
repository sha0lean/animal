//=components/pages/About.jsx

import amb01 from "@assets/ambiance/ambiance01.webp"
import amb02 from "@assets/ambiance/ambiance02.webp"
import amb03 from "@assets/ambiance/ambiance03.webp"
import amb04 from "@assets/ambiance/ambiance04.webp"
import amb05 from "@assets/ambiance/ambiance05.webp"
import amb06 from "@assets/ambiance/ambiance06.webp"
import amb07 from "@assets/ambiance/ambiance07.webp"
import amb08 from "@assets/ambiance/ambiance08.webp"
import amb09 from "@assets/ambiance/ambiance09.webp"
import amb10 from "@assets/ambiance/ambiance10.webp"
import amb11 from "@assets/ambiance/ambiance11.webp"
import amb12 from "@assets/ambiance/ambiance12.webp"
import amb13 from "@assets/ambiance/ambiance13.webp"
import imgLion from "@assets/artwork/standing_lion.webp"
import DescrCTA from "@components/section/DescrCTA.jsx"

const About = () => {
  return (
    <>
      <section id="ABOUT_HERO" className="relative flex items-end justify-end pt-8 md:grid md:grid-cols-2 md:items-center">
        <div id="ABOUT_HERO_IMAGE" className="absolute left-0 top-0 h-full w-3/5 overflow-hidden sm:h-[50vh] md:relative md:h-full md:w-full">
          <img src={imgLion} alt="Magnifique Lion Debout" className="h-full w-full object-cover object-right opacity-20 sm:w-4/5 sm:opacity-30 md:w-full md:opacity-80" />
        </div>
        <div id="ABOUT_HERO_TEXT" className="mxd:w-4/5 lxg:w-3/5 sm:pr- z-10 w-full p-4 text-center text-white">
          <h1 className="pb-10 pr-11 text-right font-heading text-4xl font-bold sm:text-5xl md:pl-14 md:text-left md:text-4xl lg:text-5xl">
            un lieu <br />
            unique et <br />
            dépaysant
          </h1>
          <p className="p-6 text-justify font-body text-xs sm:text-sm md:text-sm">
            Situé dans le cœur de Ville-la-Grand, l&apos;Animal Lodge Bar est bien plus qu&apos;un simple lieu de rencontre. C&apos;est un secret bien gardé, un lieu où l&apos;on se sent chez soi, entouré d&apos;amis et d&apos;une équipe dévouée.
            Notre engagement envers la satisfaction du client est au cœur de tout ce que nous faisons, créant une atmosphère où l&apos;excitation et la détente se marient harmonieusement.
          </p>
        </div>
      </section>
      <section id="ABOUT_MASONRY" className="bg-primary p-8 ">
        <img src={amb10} className="mt-2 aspect-auto w-full sm:mt-4" />
        <div className="mt-2 columns-2 gap-2 sm:mt-4 sm:gap-4 md:columns-3">
          <img src={amb01} className="aspect-auto w-full" />
          <img src={amb05} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb02} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb13} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb06} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb04} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb09} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb03} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb10} className="mt-2 aspect-square w-full sm:mt-4" />
          <img src={amb08} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb11} className="mt-2 aspect-auto w-full sm:mt-4" />
          <img src={amb12} className="mt-2 aspect-auto w-full sm:mt-4" />
        </div>
      </section>
      <DescrCTA />
      <section className="bg-secondary p-5 "></section>
    </>
  )
}

export default About
