import React from "react";

const CallToAction = ({ title, description, buttonText }) => {
  return (
    <div className="bg-indigo-500 text-white p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-center mb-6">{description}</p>
      <button className="px-6 py-2 bg-white text-indigo-500 rounded-full hover:bg-gray-100">
        {buttonText}
      </button>
    </div>
  );
};

export default CallToAction;
