import React from "react";

import Button from "elements/Button";

import VinylPhoto from "assets/images/vinyl-menu.jpg";

export default function VinylMenu({ data }) {
  return (
    <section className="px-20 py-40 grid grid-cols-12 gap-8">
      <div className="col-span-6">
        <img src={VinylPhoto} alt="vinyl-menu-bg" />
      </div>
      <div className="col-span-6">
        <h3 className="text-2xl font-medium uppercase tracking-widest">
          Boring With The Song? Enjoy Listen Our Jazzy Vinyl Music
        </h3>
        <p className="pt-4 pb-6 text-gray-600 tracking-wider">
          Dengan musik jazz piringan kaset kami nikmati perpaduan antara kopi
          pilihan dan musik tersantuy yang kami sajikan, dijamin telinga anda
          akan dimanjakan dengan musik kami.
        </p>
        <div className="pb-8">
          <h4 className="mb-4 text-lg font-medium">
            List of the track from our vinyl
          </h4>
          {data.map((item, index) => {
            return (
              <div
                className={`pb-2 mb-2 vinyl-song-${index} flex items-center border-b border-gray-100`}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="play w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="pl-2 text-gray-600 tracking-wide">
                  <span>{item.name}</span>
                  <span> - </span>
                  <span>{item.song}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          type="link"
          className="btn btn-outline btn-outline-gray"
          href={`/properties/${data._id}`}
        >
          Check Now
        </Button>
      </div>
    </section>
  );
}
