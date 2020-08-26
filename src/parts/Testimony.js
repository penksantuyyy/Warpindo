import React from "react";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <section className="px-20 py-20 bg-red-100">
      <h3 className="text-2xl uppercase font-medium tracking-wider text-center">
        Testimony
      </h3>
      <div className="my-12 grid grid-cols-12 gap-8">
        {data.map((item) => {
          return (
            <div className="col-span-6 flex bg-white">
              <div className="w-64">
                <img
                  className="w-64 h-full object-cover"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="px-6 py-12 w-2/3 ">
                <span className="text-sm text-red-600 tracking-wide">
                  {item.tag}
                </span>
                <h5 className="pt-2 pb-4 font-medium text-xl text-gray-800 tracking-wider">
                  {item.name}
                </h5>
                <p className="h-20 leading-5 text-gray-700 tracking-wider">
                  {item.description}
                </p>
                <div className="pt-8 self-center">
                  <Star value={item.rate} width={24} height={25} spacing={0} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Button
          type="link"
          className="btn btn-outline btn-outline-gray"
          href={`/properties/${data._id}`}
        >
          Read Stories
        </Button>
      </div>
    </section>
  );
}
