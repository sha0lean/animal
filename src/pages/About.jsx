//=components/pages/About.jsx

import imgLion from "@assets/artwork/standing_lion.webp"

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
      <section className="bg-secondary p-80 "></section>
    </>
  )
}

export default About
