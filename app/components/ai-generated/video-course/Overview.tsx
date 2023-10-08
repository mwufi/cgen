import React from "react";

// Additional Styling: Improved padding, font styling, and introduced a subtle background color.
const Overview = ({ overviewText }) => {
  return (
    <div className="px-8 py-12 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-semibold mb-6">Course Overview</h2>
      <p className="text-lg text-gray-700 leading-relaxed">{overviewText}</p>
    </div>
  );
};

export default Overview;
