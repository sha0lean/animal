//=components/hippo/Hippo.jsx

const Hippo = () => {
  return (
    <div
      id="hippo"
      className="relative h-[240px] w-full bg-[size:100%] bg-top bg-no-repeat sm:h-[360px] md:h-[510px] lg:h-[650px]"
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
    </div>
  )
}

export default Hippo
