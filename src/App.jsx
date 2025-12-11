import About from "./components/About"
import {useState} from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/cart"
import Login from "./components/Login"
import Footer from "./components/Footer"
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import "./App.css"
import { useEffect } from "react"

function App() {

  const navigate = useNavigate();

  const [cart,setcart]=useState(()=>{
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  const handleLogout = () => {
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="transform hover:scale-105 transition-transform">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ShopHub</h1>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition-all font-medium flex items-center relative group">
                Cart <span className="ml-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-2.5 py-1 text-xs font-bold shadow-md transform group-hover:scale-110 transition-transform">{cart.length}</span>
              </Link>
              <button onClick={handleLogout} className="text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-md">Logout</button>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/About" element={<About/>}>About</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
          <Route path="/Products" element={<Products cart={cart} setcart={setcart}/>}>Products</Route>
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}>Cart</Route>
          <Route path="/product/:id" element={<Product setcart={setcart}/>}></Route>
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
