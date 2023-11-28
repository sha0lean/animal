function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-900 from-10% via-transparent via-40% py-2 text-white">
      <nav>
        <ul className="flex list-none justify-around p-0">
          <h1 className="text-left text-3xl">
            <a href="/" className="text-white no-underline">
              Animal Lodge Bar <span className="text-3xl"> 🦁</span>
            </a>
          </h1>
          <li>
            <a
              href="/menus"
              className="align-middle text-white no-underline hover:align-top"
            >
              menus
            </a>
          </li>
          <li>
            <a href="/events" className="text-white no-underline">
              événements
            </a>
          </li>
          <li>
            <a href="/aboutus" className="text-white no-underline">
              à propos
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white no-underline">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
