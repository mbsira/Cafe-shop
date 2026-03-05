import { useState } from "react"

export default function Navbar({ totalItems, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center bg-black fixed w-full top-0 h-20 px-5 z-50">

      <div className="flex items-center gap-3 text-white text-xl">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/160/464/non_2x/line-art-coffee-logo-illustration-design-graphic-minimalist-creative-logo-concept-vector.jpg"
          alt="Cozy Cup Logo"
          className="w-14 h-14 rounded-full object-cover"
        />
        <span className="font-bold">Cozy Cup Café</span>
      </div>

      <ul className="hidden md:flex list-none gap-6">
        <li><a href="#about" className="text-white no-underline text-lg hover:text-[#d6b28e] transition-colors duration-300">About</a></li>
        <li><a href="#exterior" className="text-white no-underline text-lg hover:text-[#d6b28e] transition-colors duration-300">Experience</a></li>
        <li><a href="#products" className="text-white no-underline text-lg hover:text-[#d6b28e] transition-colors duration-300">Menu</a></li>
        <li><a href="#location-message" className="text-white no-underline text-lg hover:text-[#d6b28e] transition-colors duration-300">Location</a></li>
      </ul>

      <div className="flex items-center gap-4">

        <div className="relative text-white text-2xl cursor-pointer" onClick={onCartClick}>
          <i className="fas fa-shopping-cart"></i>
          <span className="absolute -top-2 -right-2 bg-[#d6b28e] text-[#1a0f0a] rounded-full px-2 py-0 text-xs font-bold">
            {totalItems}
          </span>
        </div>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

      </div>

      {menuOpen && (
        <ul className="md:hidden absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 list-none z-50">
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#d6b28e] transition-colors duration-300">About</a></li>
          <li><a href="#exterior" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#d6b28e] transition-colors duration-300">Experience</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#d6b28e] transition-colors duration-300">Menu</a></li>
          <li><a href="#location-message" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#d6b28e] transition-colors duration-300">Location</a></li>
        </ul>
      )}

    </nav>
  )
}