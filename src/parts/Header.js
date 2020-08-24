import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "elements/Button";
import IconNav from "parts/IconNav";

import IconCart from "assets/images/icons/cart-outline.svg";
import IconPerson from "assets/images/icons/person-outline.svg";
import IconSearch from "assets/images/icons/search-outline.svg";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <>
      <div className="px-20 py-3 text-base flex border-b justify-between">
        <div className="w-12 h-12">
          <IconNav />
        </div>

        <div className="w-180 flex items-center relative">
          <img className="px-6 absolute" src={IconSearch} alt="icon-search" />
          <input
            className="py-3 pl-16 pr-64 w-full border border-gray-400"
            placeholder="Ketikkan pencarian disini"
          />
        </div>

        <div className="flex">
          <div className="flex items-center">
            <img className="pr-2" src={IconCart} alt="icon-cart" />
            <Router>
              <Button type="link" href="/akun">
                Keranjang
              </Button>
            </Router>
          </div>

          <div className="pl-12 flex items-center">
            <img className="pr-2" src={IconPerson} alt="icon-person" />
            <Router>
              <Button type="link" href="/akun">
                Akun
              </Button>
            </Router>
          </div>
        </div>
      </div>
      <div className="border-b py-3">
        <ul className="flex justify-center uppercase text-gray-800">
          <li className={`nav-item${getNavLinkClass("/")} px-12`}>
            <Button
              className="nav-link text-red-600 font-medium"
              type="link"
              href=""
            >
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
