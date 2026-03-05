export default function Location() {
  return (
    <section id="location-message" className="bg-[#2b1a10] py-16 px-6 md:px-10">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-[1200px] mx-auto">
        
        <div className="reveal w-full md:flex-1">
          <h2 className="text-[1.8rem] md:text-[2rem] text-[#d6b28e] font-bold mb-4">Find Us</h2>
          <p className="text-sm md:text-base leading-relaxed mb-5 text-[#f5f5f5]">
            Visit our cozy café at 123 Coffee Street, Brewtown, CA 90210
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4a32b6e1b1!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            />
          </div>
        </div>

        <div className="reveal w-full md:flex-1">
          <h2 className="text-[1.8rem] md:text-[2rem] text-[#d6b28e] font-bold mb-4">Contact Us</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-[#d6b28e] rounded-lg bg-[#1a0f0a] text-white placeholder-[#ccc] text-base focus:outline-none focus:border-[#f8e9d0]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-[#d6b28e] rounded-lg bg-[#1a0f0a] text-white placeholder-[#ccc] text-base focus:outline-none focus:border-[#f8e9d0]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-[#d6b28e] rounded-lg bg-[#1a0f0a] text-white placeholder-[#ccc] text-base focus:outline-none focus:border-[#f8e9d0] resize-none"
            />
            <button
              type="button"
              className="w-full md:w-auto self-start px-8 py-3 bg-[#d6b28e] text-[#1a0f0a] font-bold rounded-lg hover:bg-transparent hover:text-[#d6b28e] border-2 border-[#d6b28e] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}