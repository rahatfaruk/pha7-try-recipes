import { useState } from "react"
import { List, PersonCircle, Search } from "react-bootstrap-icons"

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav className="px-4 border-b">
      <div className="relative max-w-screen-lg mx-auto md:flex gap-6 py-4 items-center justify-between">
        {/* title & sm:toggler */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl">TryRecipes</h1>
          <button className="border md:hidden" onClick={() => setShowLinks(!showLinks)}>
            <List className="text-3xl" />
          </button>
        </div>

        {/* nav-links-container */}
        <div className={`${showLinks ? 'block' : 'hidden'} md:block mb-4 md:mb-0`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4  pt-4 md:pt-0">
            <li><a href="#" className="block px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Home</a></li>
            <li><a href="#" className="block px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Recipes</a></li>
            <li><a href="#" className="block px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">About</a></li>
            <li><a href="#" className="block px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Search</a></li>
          </ul>
        </div>

        {/* search bar & profile */}
        <div className="flex items-center gap-4">
          <form className={`${showLinks ? 'flex' : 'hidden'} md:flex items-center w-full border-2 px-3 bg-gray-200 rounded-3xl`}>
            <Search />
            <div className="flex-1">
              <input type="text" name="search" className="w-full px-2 py-1 bg-transparent" placeholder="Search" />
            </div>
          </form>
          <button className="absolute md:static top-4 right-12 p-2 rounded-full bg-green-400 hover:opacity-85">
            <PersonCircle />
          </button>
        </div>
      </div>

    </nav>
  )
}
