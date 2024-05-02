"use client";

// import Image from "next/image";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import QuantityBtn from "./quantity-btn";
import { removeItem } from "../../libs/redux-toolkit/features/cart/cart-slice";

export default function Card({ product, quantity }) {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem(product));
  };

  return (
    <div className="rounded-lg bg-white border border-gray-100 p-5 flex justify-between items-start gap-5">
      <div className="flex gap-2">
        {/* <div className="w-[100px] h-[100px] relative">
          <Image
            alt={product.title}
            src={product.image}
            sizes="100vw"
            fill
            objectFit="contain"
          />
        </div> */}
        <div className="flex flex-col">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
          <p className="font-bold text-1xl justify-self-end">
            $ {product.price}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end gap-5">
        <button onClick={removeCartItem}>
          <BiTrash color="red" size={24} />
        </button>
        <QuantityBtn
          quantity={quantity}
          product={product}
          className="mt-5 self-end"
        />
      </div>
    </div>
  );
}
