import React from "react";

// Additional Styling: Added shadow, and hover/active state styling.
const CallToAction = ({ buttonText }) => {
  return (
    <div className="text-center my-12">
      <button className="px-10 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 active:bg-green-700 transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default CallToAction;
