import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={image} alt={name} className="h-64 w-64 object-cover mb-2" />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default ProductCard;
