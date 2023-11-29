//=componentsnts/ui/CallToAction.jsx

function CallToAction({ icon, link }) {
  return (
    <a
      href={link} // URL de redirection
      className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-secondary"
      // bg-blue-500 : couleur de fond
      // flex : active Flexbox pour aligner les éléments
      // h-24 w-24 : hauteur et largeur fixées pour un cercle parfait
      // items-center justify-center : centre l'élément (icône) dans le Flex container
      // rounded-full : rend les coins complètement arrondis pour un cercle parfait
    >
      <img
        src={icon} // Chemin de l'icône
        alt="CTA" // Texte alternatif pour l'icône
        className="h-6 w-6" // Taille de l'icône
        // h-6 w-6 : hauteur et largeur de l'icône
      />
    </a>
  )
}

export default CallToAction
