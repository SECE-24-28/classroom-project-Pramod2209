import React from 'react'
import {products} from '../utils/api'
import { Link } from 'react-router-dom'

export default function Products({setcart,cart}) {

  const addTocart=(product)=>{
    const item={
      id:product.id,
      name:product.name,
      price:product.price,
      image:product.image
    };
    setcart(prevCart => [...prevCart,item]);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p=>(
          <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">${p.price}</p>
              <p className="text-gray-600 mb-4 line-clamp-2">{p.description}</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => addTocart(p)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md transform hover:scale-105"
                >
                  Add to Cart
                </button>
                <Link 
                  to={`/product/${p.id}`}
                  className="flex-1 bg-gray-100 text-gray-800 py-3 px-4 rounded-xl font-bold hover:bg-gray-200 transition-all text-center shadow-md transform hover:scale-105"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
