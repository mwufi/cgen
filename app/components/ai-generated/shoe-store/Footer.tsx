import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2023 ShoeBrand</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-indigo-300">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-indigo-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
