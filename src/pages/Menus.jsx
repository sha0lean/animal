//=components/pages/Menus.jsx

import imgRegalezVous from "@assets/cocktails/cocktail4.webp"
import { Parallax } from "react-parallax"

const Menus = () => {
  return (
    <section className="flex flex-col  pb-96 md:flex-row md:pt-10">
      <div className="md:min-w-40 flex  flex-col justify-center bg-opacity-50 p-8 text-white md:mx-auto md:w-2/3 md:px-20 lg:px-40">
        <h2 className="mb-4 pb-6 font-heading text-5xl font-bold ">régalez-vous !</h2>
        <p className="mb-4 text-justify font-body xl:text-xl">
          Découvrez l&apos;excellence du plaisir gustatif à l&apos;Animal Lodge Bar, un
          établissement idéal pour déguster des cocktails raffinés et savourer des tapas
          entre amis dans le cadre exotique de la Haute-Savoie. Nos menus de cocktails et
          de tapas évoluent au fil des saisons, s&apos;adaptant aux ingrédients frais
          disponibles localement pour vous garantir une expérience incomparable. Notre bar
          propose également une sélection raffinée de vins, de bières artisanales et de
          spiritueux, complétant ainsi notre offre pour satisfaire tous les palais et
          préférences.
        </p>
      </div>
      <div className="flex md:w-1/3">
        <img
          src={imgRegalezVous}
          alt="Animal Lodge Bar"
          className="fixed-image h-full w-full object-cover"
        />
        <Parallax
          bgImage={imgRegalezVous}
          bgImageAlt="Cocktail Chocolaté"
          strength={-90}
          className="parallax-image h-full w-full object-bottom"
        >
          <div style={{ height: 400 }} />
        </Parallax>
      </div>
    </section>
  )
}
export default Menus
