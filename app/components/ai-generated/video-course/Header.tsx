import React from "react";

// Additional Styling: Increased size for title, varied font weights, and improved spacing.
const Header = () => {
  return (
    <div className="text-center py-12 space-y-2">
      <p className="text-xs text-gray-500 uppercase">Shopify Original</p>
      <h1 className="text-5xl text-green-600 font-extrabold">Goal Setting with Daymond John</h1>
      <p className="text-md text-gray-700 font-medium">52 mins • 14 lessons</p>
    </div>
  );
};


export default Header;
