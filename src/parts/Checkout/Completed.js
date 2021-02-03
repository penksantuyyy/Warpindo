import React from "react";

import CompletedImg from "assets/images/success-order.jpg";

export default function Completed() {
  return (
    <div className="px-20 mt-10 mb-6">
      <div className="flex flex-col justify-center items-center text-center">
        <div style={{ width: 360 }}>
          <img src={CompletedImg} className="w-full" alt="completed-checkout" />
        </div>
        <p className="mt-8 text-gray-600" style={{ width: 480 }}>
          Kami akan menginformasikan via email, jika pesanan telah diterima.
          Jangan sungkan-sungkan untuk berbelanja lagi disini yahh
        </p>
      </div>
    </div>
  );
}
