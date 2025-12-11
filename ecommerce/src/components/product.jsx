import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {products} from "../utils/api"

export default function Product({ setcart }) {
  const {id} = useParams();
  const navigate = useNavigate();
  const p = products.find((item)=>item.id===parseInt(id, 10));

  if(!p) return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
    </div>
  )

  const handleBuyNow = () => {
    if (setcart) {
      const item = {
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image
      };
      setcart(prevCart => [...prevCart, item]);
    }
    navigate('/cart');
  };

  return (
    <div>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">Product Details</h2>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="overflow-hidden rounded-2xl">
            <img src={p.image} alt={p.name} className="w-full h-96 object-cover rounded-2xl transform hover:scale-110 transition-transform duration-500 shadow-lg"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">{p.name}</h3>
            <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">${p.price}</p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">{p.description}</p>
            <button 
              onClick={handleBuyNow}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white py-5 px-10 rounded-xl text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-xl transform hover:scale-105"
            >
              Buy Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
