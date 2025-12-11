import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 transform hover:scale-[1.02] transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start group">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-10 h-10 mr-4 transform group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Email</h3>
                  <p className="text-blue-600 font-semibold">support@shophub.com</p>
                </div>
              </div>
              <div className="flex items-start group">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" className="w-10 h-10 mr-4 transform group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                  <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start group">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Address" className="w-10 h-10 mr-4 transform group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Business Street<br/>City, State 12345<br/>United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Hours</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-bold">Monday - Friday:</span>
                <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-bold">Saturday:</span>
                <span className="text-blue-600 font-semibold">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-bold">Sunday:</span>
                <span className="text-red-600 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-[1.02] transition-all">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
