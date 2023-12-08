//=components/ui/CallToAction.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

const CallToAction = ({ icon, altText, link, iconSize }) => {
  const iconSizeClass = `fa-${iconSize}`

  return (
    <div id="CalltoAction">
      <a
        href={link}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white "
      >
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
  iconSize: PropTypes.oneOf(["lg", "2x", "3x", "4x", "5x"]),
}

export default CallToAction
