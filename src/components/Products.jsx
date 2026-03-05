import products from "../data/products"

export default function Products({ category, addToCart }) {
  const filtered = category === "all" ? products : products.filter(p => p.category === category)

  return (
    <section id="products" className="bg-[#1a0f0a] py-12">
      
      <h2 className="reveal text-center text-[#d6b28e] text-[2rem] md:text-[2.5rem] font-bold mb-8">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto px-4 md:px-8">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="reveal bg-[#2b1a10] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-[#d6b28e] text-xl md:text-2xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="text-[#f5f5f5] text-sm mb-2">
                {product.description}
              </p>
              <p className="text-[#d6b28e] text-lg md:text-xl font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="w-full py-3 bg-[#d6b28e] text-[#1a0f0a] font-bold rounded-lg hover:bg-[#b89a7a] transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}