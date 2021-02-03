import React from "react";

import LogoBca from "assets/images/logo/bca-logo.svg";
import LogoMandiri from "assets/images/logo/mandiri-logo.svg";

import { InputFile, InputText } from "elements/Form";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="px-20 container mb-6 grid grid-cols-12 border-b">
      <div className="col-span-6 border-r justify-center items-center">
        <div className="py-10">
          <p className="mb-4">Transfer Pembayaran : </p>
          <p>Tax : {tax}%</p>
          <p>Subtotal : {subTotal}</p>
          <p>Total : {grandTotal}</p>
          <div className="mt-4 flex">
            <div className="w-2/6 text-right">
              <img src={LogoBca} alt="bank-central-asia" className="w-48" />
            </div>
            <div className="pl-8 w-4/6">
              <dl>
                <dd className="text-xl font-medium">Bank Central Asia</dd>
                <dd className="text-red-600">2220 2139</dd>
                <dd className="text-lg">Warpindo</dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 flex">
            <div className="w-2/6 text-right">
              <img src={LogoMandiri} alt="bank-mandiri" className="w-48" />
            </div>
            <div className="pl-8 w-4/6">
              <dl>
                <dd className="text-xl font-medium">Bank Mandiri</dd>
                <dd className="text-red-600">73219 1237942</dd>
                <dd className="text-lg">Warpindo</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 pl-10 col-span-6">
        <label htmlFor="proofPayment">Upload bukti transfer</label>
        <InputFile
          accept="image/*"
          id="proofPayment"
          name="proofPayment"
          value={data.proofPayment}
          onChange={props.onChange}
        />

        <label htmlFor="bankName">Asal Bank</label>
        <InputText
          id="bankName"
          name="bankName"
          type="text"
          value={data.bankName}
          onChange={props.onChange}
        />

        <label htmlFor="bankHolder">Nama Pengirim</label>
        <InputText
          id="bankHolder"
          name="bankHolder"
          type="text"
          value={data.bankHolder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
