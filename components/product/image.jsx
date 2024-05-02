"use client";

import Image from "next/image";
import AddToSaved from "../../components/product/add-to-saved";

export default function ProductImage({
  product,
  isSaved,
  hideFav,
  isRemovable,
  className,
}) {
  return (
    <div className="p-5 rounded-md bg-white border border-gray-100">
      <div className={`relative w-full h-[174px]  flex ${className}`}>
        <div
          className="h-40 w-full rounded-lg"
          style={{
            position: "relative",
          }}
        >
          <Image
            alt={product.title}
            src={product.image}
            fill
            sizes="100vw"
            className="rounded-lg"
            objectFit="contain"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        {!hideFav && (
          <AddToSaved
            product={product}
            isSaved={isSaved}
            isRemovable={isRemovable}
          />
        )}
      </div>
    </div>
  );
}
