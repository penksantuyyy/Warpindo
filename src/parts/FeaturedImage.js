import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <>
      <div className="col-span-6 border-b border-r">
        <div className="pr-10 pl-20 py-6 grid grid-cols-6">
          <div className="col-span-1">
            <div className="flex flex-col">
              {data.map((item, index) => {
                return (
                  <figure
                    key={`featured-img-${index}`}
                    className={`img-wrapper`}
                  >
                    <img
                      className={`mb-6 h-16 w-16 object-cover border-2 ${
                        index > 0 ? "border-gray-400" : "border-red-600"
                      }`}
                      src={item.url}
                      alt={item._id}
                    />
                  </figure>
                );
              })}
            </div>
          </div>
          <div className="col-span-5">
            <figure className="img-wrapper">
              <img
                className="object-cover"
                src={data[0].url}
                alt={data[0]._id}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
