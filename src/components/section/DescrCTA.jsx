//=components/sections/DescrCTA.jsx

import CallToAction from "@components/ui/CallToAction"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const DescrCTA = () => {
  return (
    <section className="bg-secondary p-6 font-body text-secondary sm:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
        <div className="grid text-justify lg:col-span-4 lg:grid lg:grid-cols-2 lg:gap-10">
          <div id="text1" className="order-1 text-xs md:text-sm lg:relative lg:col-span-1">
            <p>
              À l&apos;origine de l&apos;Animal Lodge Bar, Nelly et Bruno, véritables globe-trotters passionnés du voyage et fervents défenseurs des animaux, ont créé un havre qui évoque un univers d&apos;aventures. Le bar lui-même est métamorphosé
              en une escapade visuelle avec sa décoration soigneusement, transportant les convives dans une ambiance d&apos;exploration et de découverte.
            </p>
            <p className="mt-10">
              Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre équipe dévouée et passionnée œuvre inlassablement pour créer une expérience exceptionnelle pour nos clients. Guidée par une passion commune pour
              l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un service attentionné, dans une ambiance chaleureuse et amicale qui fait de notre établissement un véritable bar d&apos;ambiance. Que ce soit pour une soirée
              décontractée entre amis ou une soirée en amoureux, notre équipe est là pour vous accueillir avec un sourire et une énergie contagieuse. Nous sommes fiers de créer un environnement convivial, où chaque visite se transforme en une
              expérience mémorable, mettant en avant notre engagement envers le confort et le plaisir de nos clients.
            </p>
          </div>
          <div className="order-2 lg:order-2 lg:col-span-1">
            <p id="text3" className="order-1 mt-10 text-xs md:text-sm lg:relative lg:top-10 lg:mt-0">
              Situé aux alentours d&apos;Annemasse et de Ville-la-Grand, l&apos;Animal Lodge Bar se présente comme le lieu idéal pour partager des moments intimes tout en profitant d&apos;une ambiance exotique et divertissante. Notre équipe dévouée
              veille à ce que chaque soirée soit unique, avec un programme régulier de soirées animées par des DJ talentueux. Venez vous joindre à nous pour une aventure sensorielle où la passion de notre équipe se traduit par une ambiance
              électrisante et une expérience inoubliable.
            </p>
            <h3 id="heading_bookup" className="order-last mt-10 font-heading text-3xl md:text-5xl lg:relative lg:top-20 lg:order-2 lg:mt-20 xl:text-6xl">
              découvrez <br />
              notre équipe !
            </h3>
          </div>
        </div>
        <div id="CTAs" className="mx-auto my-16 flex flex-row justify-center gap-8 md:col-span-1 lg:my-auto lg:flex-col lg:gap-10">
          <CallToAction icon={faPhone} altText="Contact par téléphone" link="/Telephone" iconSize="2x" />
          <CallToAction icon={faWhatsapp} altText="Contact par Whatsapp" link="/Whatsapp" iconSize="3x" />
        </div>
      </div>
    </section>
  )
}

export default DescrCTA
