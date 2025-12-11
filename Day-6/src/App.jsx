import React from "react";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">E-Commerce Store</h1>

      <ProductList products={products} />
    </div>
  );
}

export default App;
