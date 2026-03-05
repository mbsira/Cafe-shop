export default function Hero() {
  return (
    <section id="about" className="h-[100svh] md:h-[750px] w-full relative overflow-hidden mt-20">
      
      <img
        src="https://images.unsplash.com/photo-1742492522850-5ce980d9d137?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
        alt="Coffee Image"
        className="absolute w-full h-full object-cover brightness-[60%] blur-sm z-0"
      />

      <div className="reveal relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-6">
        <h1 className="text-[2rem] md:text-[3.5rem] mb-4 text-[#f8e9d0] font-bold leading-tight">
          Brewed with Passion, Served with Heart
        </h1>
        <p className="text-sm md:text-base leading-relaxed max-w-[600px] text-[#f5f5f5]">
          Indulge in artisan breads, mouthwatering pastries, and handcrafted treats made daily with love.
          Cozy Cup brings warmth to every sip and comfort to every corner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <button className="px-9 py-4 rounded-3xl font-bold border-2 border-[#d6b28e] text-[#d6b28e] bg-transparent hover:bg-[#d6b28e] hover:text-[#1a0f0a] transition-all duration-300">
            Order Now
          </button>
          <button className="px-9 py-4 rounded-3xl font-bold border-2 border-[#d6b28e] bg-[#d6b28e] text-[#1a0f0a] hover:bg-transparent hover:text-[#d6b28e] transition-all duration-300">
            Find Us
          </button>
        </div>
      </div>

    </section>
  )
}