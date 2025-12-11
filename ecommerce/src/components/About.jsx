import React from 'react'

export default function About() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">About Us</h1>
      
      {/* Company Story */}
      <div className="bg-white rounded-2xl shadow-xl p-10 mb-8 border border-gray-100 transform hover:scale-[1.01] transition-all">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <p className="text-xl text-gray-700 mb-4 leading-relaxed">
          Welcome to ShopHub, your premier destination for quality products and exceptional service.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We are dedicated to providing you with the best shopping experience possible. Our team works tirelessly to curate a selection of products that meet your needs and exceed your expectations.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Thank you for choosing us as your trusted online retailer.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10 border-2 border-blue-200 transform hover:-translate-y-2 transition-all">
          <img src="https://cdn-icons-png.flaticon.com/512/2920/2920230.png" alt="Mission" className="w-20 h-20 mb-6 transform hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide customers with a seamless online shopping experience, offering quality products at competitive prices with exceptional customer service.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-10 border-2 border-green-200 transform hover:-translate-y-2 transition-all">
          <img src="https://cdn-icons-png.flaticon.com/512/3588/3588592.png" alt="Values" className="w-20 h-20 mb-6 transform hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Quality, integrity, and customer satisfaction are at the heart of everything we do. We believe in building lasting relationships with our customers.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center transform hover:scale-110 transition-transform">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="John Doe" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover bg-gradient-to-br from-blue-100 to-blue-200 p-5 shadow-lg" />
            <h4 className="font-bold text-xl text-gray-800">John Doe</h4>
            <p className="text-blue-600 font-semibold">CEO & Founder</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Jane Smith" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover bg-gradient-to-br from-purple-100 to-purple-200 p-5 shadow-lg" />
            <h4 className="font-bold text-xl text-gray-800">Jane Smith</h4>
            <p className="text-purple-600 font-semibold">Head of Operations</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Mike Johnson" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover bg-gradient-to-br from-green-100 to-green-200 p-5 shadow-lg" />
            <h4 className="font-bold text-xl text-gray-800">Mike Johnson</h4>
            <p className="text-green-600 font-semibold">Customer Support Lead</p>
          </div>
        </div>
      </div>
    </div>
  )
}
