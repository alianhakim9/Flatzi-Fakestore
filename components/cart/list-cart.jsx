"use client";

import { useSelector } from "react-redux";
import EmptyState from "../empty-state";
import { BsCart } from "react-icons/bs";
import Card from "./card";

export default function ListCart() {
  const carts = useSelector((state) => state.cart);
  const subtotals = useSelector((state) => state.cart.subtotals);
  const total = useSelector((state) => state.cart.totalPrice);

  if (!carts || (carts && carts.items.length === 0)) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <EmptyState
          icon={<BsCart size={100} />}
          title="Cart Is Empty"
          subTitle="Your cart is empty"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mb-24 mt-16 ">
      {carts.items.map((item, index) => (
        <Card key={index} product={item} quantity={item.quantity} />
      ))}
      <p className="mt-5 text-black text-2xl justify-self-end">
        Total : <span className="font-bold">$ {total}</span>
      </p>
    </div>
  );
}
