export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-5 px-6 md:px-5 text-sm">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 max-w-[1200px] mx-auto mb-5 gap-8">
        
        <div>
          <h3 className="text-[#d6b28e] mb-3 font-bold text-lg">Cozy Cup Café</h3>
          <p className="opacity-80">Brewed with passion, served with heart.</p>
        </div>

        <div>
          <h3 className="text-[#d6b28e] mb-3 font-bold text-lg">Quick Links</h3>
          <ul className="list-none p-0 space-y-2">
            <li><a href="#about" className="text-white no-underline hover:text-[#d6b28e] transition-colors duration-300">About</a></li>
            <li><a href="#products" className="text-white no-underline hover:text-[#d6b28e] transition-colors duration-300">Menu</a></li>
            <li><a href="#location-message" className="text-white no-underline hover:text-[#d6b28e] transition-colors duration-300">Location</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d6b28e] mb-3 font-bold text-lg">Contact</h3>
          <p className="opacity-80 mb-1">123 Coffee Street, Brewtown, CA 90210</p>
          <p className="opacity-80 mb-1">Phone: (555) 123-4567</p>
          <p className="opacity-80">Email: info@cozycupcafe.com</p>
        </div>

      </div>

      <p className="opacity-50 border-t border-white/10 pt-4">
        © 2026 Cozy Cup Café. All rights reserved.
      </p>

    </footer>
  )
}