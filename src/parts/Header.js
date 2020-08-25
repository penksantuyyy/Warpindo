import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "elements/Button";
import IconNav from "parts/IconNav";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <>
      <div className="px-20 py-3 text-base flex border-b justify-between items-center">
        <div className="w-12 h-12">
          <IconNav />
        </div>

        <div className="w-180 flex items-center relative">
          {/* <img className="px-6 absolute" src={IconSearch} alt="icon-search" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-6 absolute w-6 h-6 feather feather-search text-gray-800"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            className="py-3 px-16 w-full border border-gray-400"
            placeholder="Ketikkan pencarian disini"
          />
        </div>

        <div className="flex">
          {/* <img className="pr-2" src={IconCart} alt="icon-cart" /> */}
          <Router>
            <Button className="flex items-center" type="link" href="/akun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 feather feather-shopping-cart text-gray-800"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="ml-2">Keranjang</span>
            </Button>
          </Router>

          {/* <img src={IconCart} alt="shopping-bag" /> */}
          <Router>
            <Button
              className="ml-12 flex items-center"
              type="link"
              href="/akun"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 feather feather-user text-gray-800"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="ml-2">Akun</span>
            </Button>
          </Router>
        </div>
      </div>
      <div className="border-b py-3">
        <ul className="flex justify-center uppercase text-gray-800">
          <li className={`nav-item${getNavLinkClass("/")} px-12`}>
            <Button className="nav-link active" type="link" href="">
              Home
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/coffee")} px-12`}>
            <Button className="nav-link" type="link" href="/coffee">
              Coffee
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/drinks")} px-12`}>
            <Button className="nav-link" type="link" href="/drinks">
              Drinks
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/bites")} px-12`}>
            <Button className="nav-link" type="link" href="/bites">
              Bites
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/vinyl")} px-12`}>
            <Button className="nav-link" type="link" href="/vinyl">
              Vinyl
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/blog")} px-12`}>
            <Button className="nav-link" type="link" href="/blog">
              Blog
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/about")} px-12`}>
            <Button className="nav-link" type="link" href="/about">
              About
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
