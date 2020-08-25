import React from "react";

import Button from "elements/Button";

export default function ChooseMenu(props) {
  return (
    <section className="mt-64 mb-40 mx-20">
      <div className="grid grid-cols-12 gap-8 ">
        {props.data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className={`item col-span-4 text-center`}>
                <h3 className="text-2xl uppercase font-medium tracking-wider">
                  {item.name}
                </h3>
                <p className="pt-4 pb-6 text-gray-600 tracking-wide">
                  {item.desc}
                </p>
                <Button
                  className="btn btn-small btn-outline btn-outline-red"
                  type="link"
                  href={`/properties/${item._id}`}
                >
                  SHOP NOW
                </Button>

                <div className="mt-10">
                  <img
                    className="w-full h-full"
                    src={item.imageUrl}
                    alt="choose-menu-1"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className={`item col-span-4 text-center`}>
                <div className="mb-10">
                  <img
                    className="w-full h-full"
                    src={item.imageUrl}
                    alt="choose-menu-1"
                  />
                </div>
                <h3 className="text-2xl uppercase font-medium tracking-wider">
                  {item.name}
                </h3>
                <p className="pt-4 pb-6 text-gray-600 tracking-wide">
                  {item.desc}
                </p>
                <Button
                  className="btn btn-small btn-outline btn-outline-red"
                  type="link"
                  href={`/properties/${item._id}`}
                >
                  SHOP NOW
                </Button>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
