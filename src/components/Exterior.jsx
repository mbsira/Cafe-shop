export default function Exterior() {
  return (
    <section id="exterior" className="bg-[#2b1a10] px-6 md:px-10 py-16">

      <div className="reveal max-w-[600px] mx-auto text-center md:text-left mb-10">
        <h2 className="text-[1.8rem] md:text-[2rem] text-[#d6b28e] mb-4 font-bold">
          Step Inside Cozy Cup
        </h2>
        <p className="text-sm md:text-base text-white leading-relaxed mb-5">
          From the aroma of freshly brewed coffee to the calm buzz of conversation,
          Cozy Cup is designed to make you feel at home. Every table tells a story,
          and every cup holds a moment worth savoring.
        </p>
        <button className="bg-transparent border-2 border-[#d6b28e] text-[#d6b28e] px-6 py-3 rounded-2xl font-bold hover:bg-[#d6b28e] hover:text-[#2b1a10] transition-all duration-300">
          Learn More
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-[1000px] mx-auto">
        <img
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
          alt="Cozy Café Front"
          className="reveal w-full md:w-1/2 h-[220px] md:h-[280px] object-cover shadow-lg rounded-lg hover:scale-[1.03] transition-transform duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1672305330859-71321689e159?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
          alt="Cozy Café Interior"
          className="reveal w-full md:w-1/2 h-[220px] md:h-[280px] object-cover shadow-lg rounded-lg hover:scale-[1.03] transition-transform duration-300"
        />
      </div>

    </section>
  )
}