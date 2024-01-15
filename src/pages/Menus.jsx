//=components/pages/Menus.jsx

import imgRegalezVous from "@assets/cocktails/cocktail4.webp"

const Menus = () => {
  return (
    <section className="flex flex-col  md:flex-row">
      <div className="b1 flex-1 bg-opacity-50 p-8 text-white">
        <h2 className="b2 mb-4 font-heading text-4xl font-bold">régalez-vous !</h2>
        <p className="mb-4 font-body">
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
      <div className="flex-1">
        <img
          src={imgRegalezVous}
          alt="Animal Lodge Bar"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
export default Menus
