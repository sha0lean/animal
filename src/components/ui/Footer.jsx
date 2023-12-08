//=components/ui/Footer.jsx

function Footer() {
  return (
    <footer className="relative h-[350px] w-full sm:h-[580px] md:h-[760px] lg:h-[1080px]">
      <img
        src="/src/assets/artwork/zebraMane.webp"
        alt="Crinière de zèbre"
        className="absolute bottom-0 w-full "
      />
      <div id="FooterInfos" className="z-0 flex justify-around">
        <div className="flex w-1/2 flex-col pt-4 font-heading sm:pl-8 sm:pt-8 md:pl-16 md:pt-16 lg:pl-28 lg:pt-28 ">
          <p className="text-md pb-5 sm:text-2xl md:text-3xl">
            @animallodgebar <br />
            Notre Restaurant :<br /> Le Christina
          </p>
          <p className="text-md pb-5 font-special sm:text-2xl md:text-3xl">
            {" "}
            04 50 38 69 45
          </p>
          <p className="text-md font-special sm:text-2xl md:text-3xl">
            20 Rue des Esserts
            <br />
            74100 Ville-la-Grand
          </p>
        </div>
        <div
          id="CocktailArch"
          className="lg:-bottom-30 bottom-0 mt-10 flex h-auto w-2/5 overflow-hidden rounded-t-full"
        >
          <img
            src="/src/assets/cocktails/cocktails_arch.webp"
            alt="Cocktails Fruités Cosy"
            className=""
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
