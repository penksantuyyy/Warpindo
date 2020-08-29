import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailsDescription({ data }) {
  return (
    <main className="px-20 grid grid-cols-12 gap-8 border-b">
      <div className="py-8 col-span-8 border-r">
        <h4 className="text-2xl uppercase font-medium">Description</h4>
        <p className="mt-4 pr-8 tracking-wider text-gray-600">
          {ReactHtmlParser(data.description)}
        </p>
      </div>
      <div className="py-8 col-span-4">
        <h4 className="text-2xl uppercase font-medium">Features</h4>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {data.features.map((feature, index) => {
            return (
              <div className="col-span-2">
                <div key={`feature-${index}`} className="">
                  <img
                    className="w-8 mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />
                  <div>
                    <span className="mt-2 mr-1">{feature.qty}</span>
                    <span className="text-gray-600 font-light">
                      {feature.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
