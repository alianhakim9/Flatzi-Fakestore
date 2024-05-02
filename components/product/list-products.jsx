"use client";

import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/product/card";

export default function ListProduct({ products }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
