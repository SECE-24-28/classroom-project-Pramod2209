import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white border rounded-xl shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "350px", objectFit: "cover" }}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

      <p className="text-gray-600 text-sm">Brand: {product.brand}</p>
      <p className="text-gray-600 text-sm">Category: {product.category}</p>

      <p className="text-xl font-bold text-green-600 mt-2">
        ₹{product.price}
      <br />
      <hr />
      </p>
    </div>
  );
};

export default ProductCard;
