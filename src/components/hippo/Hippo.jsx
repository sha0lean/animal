//=components/hippo/Hippo.jsx

import hippoImage from "@assets/artwork/hippo.webp"

const Hippo = () => {
  return (
    <div
      id="hippo"
      className="relative h-[240px] w-full bg-[size:100%] bg-top bg-no-repeat sm:h-[360px] md:h-[510px] lg:h-[650px] xl:h-[900px]"
      style={{ backgroundImage: `url(${hippoImage})` }}
    >
      <div className="flex h-full items-start justify-end pr-10 font-heading">
        <div className="pt-8 text-right text-white md:p-16 md:pt-28">
          <p className="text-sm md:text-2xl">du Mardi au Samedi.</p>
          <p className="font-body text-sm font-bold md:text-3xl lg:text-4xl">
            17h30 - 01h
          </p>
          <p className="text-sm md:text-2xl lg:text-3xl">Ville-la-Grand</p>
        </div>
      </div>
    </div>
  )
}

export default Hippo
