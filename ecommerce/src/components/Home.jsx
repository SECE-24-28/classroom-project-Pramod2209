import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-12 md:py-20 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-600 leading-snug">The center of your</h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-teal-500 leading-snug">helpful home.</h2>
            </div>
            <Link to="/products" className="inline-block border-2 border-gray-700 text-gray-700 px-10 py-3 rounded-full font-normal text-sm md:text-base hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all">
              Learn more
            </Link>
          </div>
          
          {/* Image - Right Side */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80" 
              alt="Shopping" 
              className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Fitbit Luxe */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-16 relative overflow-hidden min-h-[400px] hover:shadow-lg transition-all">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-3">The new Fitbit Luxe.</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">Style that moves with you.</p>
            <Link to="/products" className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2.5 rounded-full font-normal text-sm hover:bg-gray-800 hover:text-white transition-all">
              Learn more
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end justify-end">
            <img src="https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80" alt="Fitbit" className="w-full h-auto object-contain max-h-80" />
          </div>
        </div>

        {/* Pixel Phone */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 md:p-16 relative overflow-hidden min-h-[400px] hover:shadow-lg transition-all">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-3">Capture the details.</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">Capture your world.</p>
            <Link to="/products" className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2.5 rounded-full font-normal text-sm hover:bg-gray-800 hover:text-white transition-all">
              Learn more
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end justify-end">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80" alt="Pixel Phone" className="w-full h-auto object-contain max-h-80" />
          </div>
        </div>

        {/* Nest Audio - Full Width */}
        <div className="md:col-span-2 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 md:p-16 relative overflow-hidden min-h-[400px] hover:shadow-lg transition-all">
          <div className="relative z-10 max-w-md">
            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-3">Amazing sound.</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">At your command.</p>
            <Link to="/products" className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2.5 rounded-full font-normal text-sm hover:bg-gray-800 hover:text-white transition-all">
              Learn more
            </Link>
          </div>
          <div className="absolute bottom-0 right-10 md:right-32 h-full flex items-end justify-end">
            <img src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&q=80" alt="Nest Audio" className="h-4/5 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Browse All Products */}
      <div className="text-center mt-16 mb-12">
        <Link to="/products" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full font-medium text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105">
          Browse All Products →
        </Link>
      </div>
    </div>
  )
}
