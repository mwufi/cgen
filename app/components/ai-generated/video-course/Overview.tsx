import React from "react";

const Overview = ({ overviewText }) => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
      <p>{overviewText}</p>
    </div>
  );
};

export default Overview;
