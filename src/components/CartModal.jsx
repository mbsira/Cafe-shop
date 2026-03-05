export default function CartModal({ open, cart, onClose, onRemove, onCheckout }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 flex items-start justify-center pt-[5%] px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#2b1a10] rounded-xl p-5 md:p-6 w-full max-w-[600px] relative text-white max-h-[85vh] overflow-y-auto">
        
        <span
          onClick={onClose}
          className="absolute top-3 right-5 text-[2rem] text-[#d6b28e] cursor-pointer hover:scale-110 transition-transform"
        >
          &times;
        </span>

        <h2 className="text-[#d6b28e] text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center opacity-60 py-8">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 md:gap-4 mb-4 p-3 bg-[#1a0f0a] rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-[#d6b28e] font-bold mb-1 truncate">{item.name}</h4>
                <p className="text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="bg-[#d6b28e] text-[#1a0f0a] px-3 py-1 rounded font-bold hover:bg-[#b89a7a] transition-colors duration-300 flex-shrink-0 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className="text-right text-[#d6b28e] text-xl font-bold my-5">
          Total: ${total.toFixed(2)}
        </div>

        <button
          onClick={onCheckout}
          className="w-full py-3 bg-[#d6b28e] text-[#1a0f0a] font-bold rounded-lg hover:bg-[#b89a7a] transition-colors duration-300 cursor-pointer"
        >
          Checkout
        </button>

      </div>
    </div>
  )
}