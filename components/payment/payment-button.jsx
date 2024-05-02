"use client";
import { useDispatch } from "react-redux";

export default function PaymentButton({ isPay, onIsPay, tsToken }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setTransactionToken(tsToken));
        onIsPay();
      }}
      className="mt-3 rounded-xl"
      disabled={isPay}
    >
      Bayar sekarang
    </button>
  );
}
