"use client";

import { CgShoppingBag } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addItem } from "../../libs/redux-toolkit/features/cart/cart-slice";
import { showToast } from "../../utils/showToast";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    showToast("Product added to cart");
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };
  return (
    <button
      className="bg-black px-4 py-3 rounded-2xl text-white text-center text-sm flex items-center gap-2"
      onClick={handleClick}
    >
      <CgShoppingBag size={24} />
      Add to Cart
    </button>
  );
}
