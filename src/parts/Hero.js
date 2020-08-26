import React from "react";

import Button from "elements/Button";

import ImageHero from "assets/images/hero-photo-img.jpg";

export default function Hero(props) {
  return (
    <section className="mb-40 px-20 h-120 grid grid-cols-12 bg-red-100 relative">
      <div className="pt-24 pb-32 col-span-6 tracking-wider">
        <div className="w-full">
          <span className="text-lg text-gray-600">COFFEE</span>
          <h1 className="mt-2 text-5xl font-medium">Es Kopi Susu Speciality</h1>
          <p className="mt-6 text-gray-600">
            Nikmati rasa dan karsa dari pilihan kopi berkualitas yang diracik
            dengan campuran susu terbaik
          </p>
        </div>
        <div className="mt-8">
          <Button className="btn btn-fill">SHOP NOW</Button>
        </div>
      </div>

      <div className="col-span-1">&nbsp;</div>

      <div className="pt-10 col-span-5">
        <img
          className="w-full justify-center h-135 object-cover"
          src={ImageHero}
          alt="hero-images"
        />
      </div>
    </section>
  );
}
