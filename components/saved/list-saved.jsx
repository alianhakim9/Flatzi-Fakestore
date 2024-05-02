"use client";

import { BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import EmptyState from "../empty-state";
import Card from "../product/card";

export default function ListSaved() {
  const items = useSelector((state) => state.saved.items);

  if (!items || items.length === 0) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <EmptyState
          icon={<BsHeartFill size={100} />}
          title="Saved Product Is Empty"
          subTitle="You don't have saved product, add now"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-16">
      {items.map((product, index) => (
        <Card key={index} product={product} isSaved isRemovable={true} />
      ))}
    </div>
  );
}
