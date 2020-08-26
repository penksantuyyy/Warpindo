import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

import Button from "elements/Button";

export default function ListMenu({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="px-20">
        <h4
          className={`${
            index1 !== 0 ? "mt-40" : ""
          } text-center text-3xl font-medium tracking-wider uppercase`}
        >
          {category.name}
        </h4>
        <div className="py-12 grid grid-cols-12 gap-8">
          {category.items.length === 0 ? (
            <div className="col-span-3">Menu belum tersedia</div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="col-span-3 relative bg-white"
                  key={`category-${index1}-item-${index2}`}
                >
                  {item.isPopular && (
                    <div className="mt-3 mr-4 py-1 px-2 absolute right-0 inline-block tracking-wider text-xs text-white bg-red-600">
                      Terlaris
                    </div>
                  )}
                  <figure className="h-64">
                    <img
                      src={item.imageUrl}
                      className="object-cover"
                      alt={item.name}
                    />
                  </figure>
                  <div className="pt-4 text-center tracking-wider">
                    <span className="pb-2 text-gray-600 text-sm">
                      {item.tag}
                    </span>
                    <Button href={`/properties/${item._id}`} type="link">
                      <h3 className="px-4 h-10 font-medium text-gray-800">
                        {item.name}
                      </h3>
                    </Button>
                    <h4 className="pt-4 pb-6 text-sm font-normal tracking-wider text-red-700">
                      {item.price}
                    </h4>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="text-center">
          <Route>
            <Button
              className="btn btn-outline btn-outline-gray"
              type="link"
              href={`/properties/coffee`}
            >
              Shop Now
            </Button>
          </Route>
        </div>
      </section>
    );
  });
}
