import React from "react";

export default function Meta({ data, current }) {
  return (
    <div className="text-center mb-6">
      <h3 className="text-xl">{data[current] && data[current].title}</h3>
      <div className="text-lg text-gray-600">
        {data[current] && data[current].description}
      </div>
    </div>
  );
}
