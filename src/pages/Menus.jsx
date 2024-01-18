//=components/pages/Menus.jsx

import imgRegalezVous from "@assets/cocktails/cocktail4.webp"
import PDFViewer from "@components/utils/PDFViewer"
import { Parallax } from "react-parallax"

const Menus = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:pt-10">
        <div className="md:min-w-40 flex  flex-col justify-center bg-opacity-50 p-8 text-white md:mx-auto md:w-2/3 md:px-20 lg:px-40">
          <h2 className="mb-4 pb-6 font-heading text-5xl font-bold xl:text-6xl ">
            régalez-vous !
          </h2>
          <p className="mb-4 text-justify font-body xl:text-xl">
            Découvrez l&apos;excellence du plaisir gustatif à l&apos;Animal Lodge Bar, un
            établissement idéal pour déguster des cocktails raffinés et savourer des tapas
            entre amis dans le cadre exotique de la Haute-Savoie. Nos menus de cocktails
            et de tapas évoluent au fil des saisons, s&apos;adaptant aux ingrédients frais
            disponibles localement pour vous garantir une expérience incomparable. Notre
            bar propose également une sélection raffinée de vins, de bières artisanales et
            de spiritueux, complétant ainsi notre offre pour satisfaire tous les palais et
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
            strength={-100}
            className="parallax-image h-full w-full object-bottom"
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </div>
      </section>
      <section
        id="MenuDetails"
        className="bg-secondary px-12 py-10 md:px-40 md:pb-28 md:pt-32"
      >
        <div
          id="MenuTexts"
          className="flex flex-col gap-10 pb-10 text-justify font-body text-secondary lg:flex-row lg:gap-20 lg:pb-20"
        >
          <div className="prose md:prose-xl text-bold lg:w-1/2">
            <p id="MenuText1">
              L&apos;Aimal Lodge Bar se positionne comme le lieu incontournable pour
              savourer des cocktails et déguster des tapas, faisant de votre sortie une
              expérience mémorable. Plongez dans l&apos;atmosphère chaleureuse et
              accueillante d&apos;un bar à cocktails et tapas où la qualité des produits
              est notre priorité.
            </p>
          </div>
          <div className=" md:prose-xl lg:w-1/2">
            <p id="MenuText2">
              L&apos;Animal Lodge Bar incarne l&apos;essence d&apos;un bar
              d&apos;ambiance, où la qualité des boissons et des tapas se marie à une
              atmosphère décontractée, idéale pour partager des moments inoubliables entre
              amis.s
            </p>
          </div>
        </div>
        <div id="MenuTitle">
          <h2 className="text-center font-heading text-3xl text-neutral-600 group-hover:text-secondary md:text-5xl">
            découvrez notre carte
          </h2>
        </div>
      </section>
      <section>
        <PDFViewer />
      </section>
    </>
  )
}
export default Menus
