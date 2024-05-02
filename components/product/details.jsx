"use client";
import { LiaStarSolid } from "react-icons/lia";
import Footer from "../footer";
import AddToCart from "./add-to-cart";

export default function Detail({ product }) {
  return (
    <div>
      <div className="md:p-10 p-5 flex flex-col gap-2">
        <div>
          <h3 className="font-semibold text-1xl">{product.title}</h3>
          <div className="flex gap-1 text-sm items-center mt-2">
            <LiaStarSolid color="orange" size={16} />
            <p>
              {product.rating.rate}/5
              <span className="text-gray-400 ml-1">
                ({product.rating.count} reviews)
              </span>
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-2">{product.description}</p>
          <p className="text-sm mt-5 font-semibold">
            Category : {product.category}
          </p>
        </div>
      </div>
      <Footer>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Price</p>
          <h4 className="text-2xl font-black">$ {product.price}</h4>
        </div>
        <AddToCart product={product} />
      </Footer>
    </div>
  );
}
