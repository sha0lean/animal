//=components/pages/Menus.jsx

import imgRegalezVous from "@assets/cocktails/cocktail4.webp"
import PageMenu1 from "@assets/menu/menu_1.webp"
import PageMenu2 from "@assets/menu/menu_2.webp"
import PageMenu3 from "@assets/menu/menu_3.webp"
import PageMenu4 from "@assets/menu/menu_4.webp"
import PageMenu5 from "@assets/menu/menu_5.webp"
import PageMenu6 from "@assets/menu/menu_6.webp"
import MenuCarousel from "@components/utils/MenuCarousel.jsx"
import { Parallax } from "react-parallax"

const Menus = () => {
  const menuImages = [PageMenu1, PageMenu2, PageMenu3, PageMenu4, PageMenu5, PageMenu6]

  return (
    <>
      <section id="MENU_INTRO" className="flex flex-col md:flex-row md:pt-10">
        <div className="md:min-w-40 flex  flex-col justify-center bg-opacity-50 p-8 text-white md:mx-auto md:w-2/3 md:px-20 lg:px-40">
          <h2 className="mb-4 pb-6 font-heading text-5xl font-bold xl:text-6xl ">régalez-vous !</h2>
          <p className="mb-4 text-justify font-body xl:text-xl">
            Découvrez l&apos;excellence du plaisir gustatif à l&apos;Animal Lodge Bar, un établissement idéal pour déguster des cocktails raffinés et savourer des tapas entre amis dans le cadre exotique de la Haute-Savoie. Nos menus de cocktails et
            de tapas évoluent au fil des saisons, s&apos;adaptant aux ingrédients frais disponibles localement pour vous garantir une expérience incomparable. Notre bar propose également une sélection raffinée de vins, de bières artisanales et de
            spiritueux, complétant ainsi notre offre pour satisfaire tous les palais et préférences.
          </p>
        </div>
        <div className="flex md:w-1/3">
          <img src={imgRegalezVous} alt="Animal Lodge Bar" className="fixed-image h-full w-full object-cover" />
          <Parallax bgImage={imgRegalezVous} bgImageAlt="Cocktail Chocolaté" strength={-100} className="parallax-image h-full w-full object-bottom">
            <div style={{ height: 400 }} />
          </Parallax>
        </div>
      </section>
      <section id="MENU_DETAILS" className="large-sec bg-secondary">
        <div className="limited-content">
          <div id="MENU_TEXTS" className="flex flex-col gap-10 pb-10 text-justify font-body text-secondary lg:flex-row lg:gap-20 lg:pb-20">
            <div id="MENU_TEXT_1" className="prose md:prose-xl text-bold lg:w-1/2">
              <p>
                L&apos;Aimal Lodge Bar se positionne comme le lieu incontournable pour savourer des cocktails et déguster des tapas, faisant de votre sortie une expérience mémorable. Plongez dans l&apos;atmosphère chaleureuse et accueillante
                d&apos;un bar à cocktails et tapas où la qualité des produits est notre priorité.
              </p>
            </div>
            <div id="MENU_TEXT_2" className=" md:prose-xl lg:w-1/2">
              <p>L&apos;Animal Lodge Bar incarne l&apos;essence d&apos;un bar d&apos;ambiance, où la qualité des boissons et des tapas se marie à une atmosphère décontractée, idéale pour partager des moments inoubliables entre amis.s</p>
            </div>
          </div>
          <div id="MENU_TITLE">
            <h2 className="text-center font-heading text-3xl text-neutral-600 group-hover:text-secondary md:text-5xl">découvrez notre carte</h2>
          </div>
        </div>
      </section>
      <section id="MENU_MENUS" className="px-6 py-12 md:px-12 md:py-14">
        <MenuCarousel menus={menuImages} />
      </section>
    </>
  )
}
export default Menus
