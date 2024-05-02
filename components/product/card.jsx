"use client";

import Link from "next/link";
import ProductImage from "./image";

export default function Card({ product, isSaved, isRemovable }) {
  return (
    <div>
      <ProductImage
        product={product}
        isSaved={isSaved}
        isRemovable={isRemovable}
      />
      <Link href={`/products/${product.id}`}>
        <p className="font-semibold line-clamp-1 my-2">{product.title}</p>
        <p className="text-gray-500 text-sm">$ {product.price}</p>
      </Link>
    </div>
  );
}
