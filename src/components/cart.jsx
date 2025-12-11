import React from 'react'

export default function Cart({ cart, setcart }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-32 h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8 text-lg">Add some products to get started!</p>
        <a href="/products" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-110">
          Shop Now →
        </a>
      </div>
    )
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleRemove = (removeIndex) => {
    setcart(prevCart => prevCart.filter((_, index) => index !== removeIndex));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 border border-gray-100 hover:shadow-xl transition-all transform hover:scale-[1.01]">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl shadow-md" />
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">${item.price}</p>
            </div>
            <button 
              onClick={() => handleRemove(index)}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all shadow-md transform hover:scale-105"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-gray-800">Total:</span>
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-xl font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg transform hover:scale-105">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  )
}
