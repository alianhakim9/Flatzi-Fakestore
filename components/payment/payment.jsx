"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaymentButton from "./payment-button";
import { Midtrans } from "./midtrans";

export default function PaymentPage({ tsToken }) {
  const carts = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [isPay, setIsPay] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <div>
        <Link href={"/cart"} className="text-sm mb-4 underline">
          Kembali ke halaman keranjang
        </Link>
        <h3 className="text-1xl md:text-2xl font-semibold">
          Rincian pembelian
        </h3>
        {carts.items.map((cart, index) => (
          <div key={index}>{console.log(cart)}</div>
        ))}
        <p className="font-semibold mt-2 text-sm">
          Total yang harus dibayar : {convertToRupiah(totalPrice)}
        </p>
        <PaymentButton
          isPay={isPay}
          onIsPay={() => setIsPay(true)}
          tsToken={tsToken}
        />
      </div>
      {isPay && <Midtrans tsToken={tsToken} />}
    </div>
  );
}
