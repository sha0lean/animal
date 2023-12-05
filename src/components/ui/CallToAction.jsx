//=components/ui/CallToAction.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

const CallToAction = ({ icon, altText, link, iconSize }) => {
  // Classe pour la taille de l'icône, par exemple `fa-2x`, `fa-3x`, etc.
  const iconSizeClass = `fa-${iconSize}`

  return (
    <div id="CTA" className="flex w-1/4 flex-col items-end px-16">
      <a
        href={link}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-4 text-black"
      >
        {/* Utilise iconSizeClass pour contrôler la taille de l'icône */}
        <FontAwesomeIcon icon={icon} className={`animate-pulse ${iconSizeClass}`} />
        {altText && <span className="sr-only">{altText}</span>}
      </a>
    </div>
  )
}

CallToAction.propTypes = {
  icon: PropTypes.object.isRequired,
  altText: PropTypes.string,
  link: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf(["lg", "2x", "3x", "4x", "5x"]), // Exemple de tailles FontAwesome
}

export default CallToAction
