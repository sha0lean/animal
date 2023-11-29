//=components/nav/NavItem.jsx

const NavItem = ({ name, link }) => {
  return (
    <li>
      <a href={link} className="text-white no-underline">
        <span className="group">
          {name}
          <div className="h-0.5 w-0 bg-white duration-500 ease-in-out group-hover:w-full"></div>
        </span>
      </a>
    </li>
  )
}

export default NavItem
