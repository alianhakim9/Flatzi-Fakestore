"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Spinner from "../spinner";

export default function CheckoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    setIsLoading(true);
    const data = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      total_price: "",
      userId: "",
    };
    await fetch("", {
      body: JSON.stringify(data),
      method: "POST",
    })
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      className="bg-black w-full rounded-lg text-white py-3 mt-4 flex items-center justify-center gap-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="text-sm flex gap-2 items-center justify-center">
          <p>Checkout</p>
          <FaArrowRight />
        </div>
      )}
    </button>
  );
}
