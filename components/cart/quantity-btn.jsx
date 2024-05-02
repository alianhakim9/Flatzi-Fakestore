"use client";

import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../libs/redux-toolkit/features/cart/cart-slice";

export default function QuantityBtn({ quantity, product, className }) {
  const dispatch = useDispatch();

  const onDecrease = () => {
    if (quantity !== 1) {
      dispatch(
        updateQuantity({
          product: product,
          type: "decrease",
        })
      );
    }
  };

  const onIncrease = () => {
    dispatch(
      updateQuantity({
        product: product,
        type: "increase",
      })
    );
  };

  return (
    <div className={`flex gap-4 ${className} items-center`}>
      <button
        className="p-2 border border-gray-400 rounded-md"
        onClick={onDecrease}
      >
        <BiMinus />
      </button>
      <p>{quantity}</p>
      <button
        className="p-2 border border-gray-400 rounded-md"
        onClick={onIncrease}
      >
        <BiPlus />
      </button>
    </div>
  );
}
