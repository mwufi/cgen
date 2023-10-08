import React from "react";

const CallToAction = ({ buttonText }) => {
  return (
    <div className="text-center my-8">
      <button className="px-8 py-2 bg-green-600 text-white rounded hover:bg-green-500">
        {buttonText}
      </button>
    </div>
  );
};

export default CallToAction;
