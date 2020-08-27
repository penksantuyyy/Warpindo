import React from "react";

import Button from "elements/Button";

import { HeartOutlined, CoffeeOutlined } from "@ant-design/icons";

import FacebookIcon from "assets/images/icons/facebook-icons.svg";
import InstagramIcon from "assets/images/icons/instagram-icons.svg";
import TwitterIcon from "assets/images/icons/twitter-icons.svg";
import BrandFooter from "assets/images/logo/warpindo-small.svg";
import AlfamartLogo from "assets/images/logo/alfamart-logo.svg";
import BcaLogo from "assets/images/logo/bca-logo.svg";
import DanaLogo from "assets/images/logo/dana-logo.svg";
import GopayLogo from "assets/images/logo/gopay-logo.svg";
import IndomaretLogo from "assets/images/logo/indomaret-logo.svg";
import MandiriLogo from "assets/images/logo/mandiri-logo.svg";
import MastercardLogo from "assets/images/logo/mastercard-logo.svg";
import OvoLogo from "assets/images/logo/ovo-logo.svg";
import VisaLogo from "assets/images/logo/visa-logo.svg";

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="px-20 grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <div className="mb-2 flex items-center">
            <img
              className="mr-4 w-8 h-8"
              src={BrandFooter}
              alt="warpindo-logo"
            />
            <h4 className="font-medium text-xl text-gray-800 uppercase">
              Warpindo
            </h4>
          </div>

          <div className="py-2 flex">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="location-marker w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="ml-4 w-full text-gray-600">
              Jl. Panji Tilar Negara No.35, Kekalik Jaya, Kec. Sekarbela, Kota
              Mataram, Nusa Tenggara Bar. 83114
            </p>
          </div>

          <div className="py-2 flex">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="clock w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="ml-4 text-gray-600">10.00 AM - 11.00 PM</p>
          </div>

          <div className="py-2 flex">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="phone w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p className="ml-4 text-gray-600">+62877-2213-3888</p>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="mb-2 font-medium text-xl uppercase tracking-wider">
            SUPPORT
          </h3>
          <ul className=" text-gray-600">
            <li className="py-2">
              <Button className="nav-link" type="link" href="">
                Cara Pemesanan
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/coffee">
                Opsi Pembayaran
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/drinks">
                Syarat dan Ketentuan
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/bites">
                Privasi Kebijakan
              </Button>
            </li>
          </ul>
        </div>

        <div className="col-span-3">
          <h3 className="mb-2 font-medium text-xl uppercase tracking-wider">
            CUSTOMER CARE
          </h3>
          <ul className="text-gray-600">
            <li className="py-2">
              <Button className="nav-link" type="link" href="">
                Hubungi Kami
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/coffee">
                Konfirmasi Pembayaran
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/drinks">
                FAQ/Bantuan
              </Button>
            </li>
            <li className="py-2">
              <Button className="nav-link" type="link" href="/bites">
                Mengapa Kami
              </Button>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="mb-2 font-medium text-xl uppercase tracking-wider">
            SOSIAL MEDIA
          </h3>
          <ul className="text-gray-600">
            <li className="py-2 flex items-center">
              <img className="pr-4" src={FacebookIcon} alt="facebook-link" />
              <Button className="nav-link" type="link" href="/bites">
                Warpindo
              </Button>
            </li>
            <li className="py-2 flex items-center">
              <img className="pr-4" src={InstagramIcon} alt="instagram-link" />
              <Button className="nav-link" type="link" href="/bites">
                @warpindo
              </Button>
            </li>
            <li className="py-2 flex items-center">
              <img className="pr-4" src={TwitterIcon} alt="twitter-link" />
              <Button className="nav-link" type="link" href="/bites">
                @warpindo
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-20 py-16 flex justify-between items-center">
        <div>
          <h4 className="font-medium text-lg uppercase">Metode Pembayaran</h4>
        </div>
        <div className="flex items-center">
          <img className="px-2" src={BcaLogo} alt="bca-logo" />
          <img className="px-2" src={MandiriLogo} alt="mandiri-logo" />
          <img className="px-2" src={VisaLogo} alt="visa-logo" />
          <img className="px-2" src={MastercardLogo} alt="mastercard-logo" />
          <img className="px-2" src={GopayLogo} alt="gopay-logo" />
          <img className="px-2" src={OvoLogo} alt="ovo-logo" />
          <img className="px-2" src={DanaLogo} alt="dana-logo" />
          <img className="px-2" src={AlfamartLogo} alt="alfamart-logo" />
          <img className="px-2" src={IndomaretLogo} alt="indomaret-logo" />
        </div>
      </div>
      <div className="px-20 py-4 flex items-center justify-between bg-red-600">
        <p className="text-white">© Copyright 2020 by Warpindo</p>
        <div className="flex items-center text-white">
          <span>Made with</span>
          <HeartOutlined className="px-2" width={24} />
          <span>&</span>
          <CoffeeOutlined className="pl-2" width={24} />
        </div>
      </div>
    </footer>
  );
}
