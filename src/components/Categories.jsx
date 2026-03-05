const categories = ["all", "coffee", "pastries", "desserts"]

export default function Categories({ category, setCategory }) {
  return (
    <section id="categories" className="bg-[#2b1a10] py-12 px-6 md:px-10 text-center">
      
      <h2 className="reveal text-[#d6b28e] text-[2rem] md:text-[2.5rem] font-bold mb-8">
        Categories
      </h2>

      <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setCategory(cat)}
            className={`reveal px-5 md:px-8 py-3 md:py-5 rounded-xl cursor-pointer min-w-[120px] md:min-w-[150px] transition-all duration-300 font-bold text-base md:text-lg capitalize
              ${category === cat
                ? "bg-[#d6b28e] text-[#1a0f0a]"
                : "bg-[#1a0f0a] text-white hover:bg-[#d6b28e] hover:text-[#1a0f0a]"
              }`}
          >
            {cat}
          </div>
        ))}
      </div>

    </section>
  )
}