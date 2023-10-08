import React from "react";

const Header = () => {
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">ShoeBrand</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
