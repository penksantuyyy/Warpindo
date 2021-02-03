import React from "react";

import { InputText } from "elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <div className="px-20 mb-6 grid grid-cols-12 border-b">
      <div className="col-span-6 justify-center items-center">
        <div className="py-10 pr-10 border-r">
          <div className="card">
            <figure className="img-wrapper">
              <img
                className="object-cover w-full"
                style={{ height: 480 }}
                src={ItemDetails.imageUrls[0].url}
                alt={ItemDetails.name}
              />
            </figure>
            <div className="mt-4 flex justify-between items-center">
              <div className="items-start">
                <div className="meta-wrapper">
                  <h5 className="text-2xl font-medium text-gray-900">
                    {ItemDetails.name}
                  </h5>
                  <span className="text-gray-600">{ItemDetails.name}</span>
                </div>
              </div>
              <div className="items-end">
                <span>
                  ${+checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-600"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 pl-10 col-span-6">
        <label className="pb-2" htmlFor="firstName">
          First Name
        </label>
        <InputText
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={props.onChange}
        />

        <label className="pb-2" htmlFor="lastName">
          Last Name
        </label>
        <InputText
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={props.onChange}
        />

        <label className="pb-2" htmlFor="email">
          Email Address
        </label>
        <InputText
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={props.onChange}
        />

        <label className="pb-2" htmlFor="phone">
          Phone Number
        </label>
        <InputText
          id="phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
