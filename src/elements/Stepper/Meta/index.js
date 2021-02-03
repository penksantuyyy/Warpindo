import React from "react";

export default function Meta({ data, current }) {
  return (
    <div className="text-center py-6 border-b">
      <h3 className="text-2xl tracking-wider text-gray-900 font-medium uppercase">
        {data[current] && data[current].title}
      </h3>
      <div className="text-base text-gray-600">
        {data[current] && data[current].description}
      </div>
    </div>
  );
}
