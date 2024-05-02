"use client";

import { BsHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  saveProduct,
} from "../../libs/redux-toolkit/features/saved/saved-slice";
import { showToast } from "../../utils/showToast";

export default function AddToSaved({ product, isSaved, isRemovable }) {
  const dispatch = useDispatch();
  let message = "";
  const handleClick = () => {
    if (isRemovable) {
      message = "Product removed from saved list";
      dispatch(removeProduct(product));
    } else {
      message = "Product added to saved";
      dispatch(saveProduct(product));
    }
    showToast(message);
  };

  return (
    <button
      className="absolute z-30 right-2 top-2 place-self-start shadow-md p-2 bg-white rounded-lg"
      onClick={handleClick}
      type="button"
    >
      {isSaved ? (
        <BsHeartFill color="red" size={20} />
      ) : (
        <CiHeart color="black" size={24} />
      )}
    </button>
  );
}
