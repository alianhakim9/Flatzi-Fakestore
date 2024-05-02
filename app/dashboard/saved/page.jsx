import { Suspense } from "react";
import Header from "../../../components/header";
import ProductSkeleton from "../../../components/skeletons/product-skeleton";

import dynamic from "next/dynamic";

const ListSaved = dynamic(
  () => import("../../../components/saved/list-saved"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header title="Saved" className={"text-3xl"} />
      <Suspense fallback={<ProductSkeleton />}>
        <ListSaved />
      </Suspense>
    </div>
  );
}
