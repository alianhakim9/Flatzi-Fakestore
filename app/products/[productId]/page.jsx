import { Suspense } from "react";
import { getProduct } from "../../../actions/data";
import Header from "../../../components/header";
import Detail from "../../../components/product/details";
import ProductImage from "../../../components/product/image";
import ProductDetailSkeleton from "../../../components/skeletons/product-detail-skeleton";

export default async function Page({ params, searchParams }) {
  const product = await getProduct(params.productId);

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <div>
        <div className="md:p-10 p-5 flex flex-col gap-4 mt-16">
          <Header
            title="Details"
            backLink="/dashboard"
            className={"text-2xl"}
          />
          <ProductImage className="mt-5" product={product} />
        </div>
        <Detail product={product} />
      </div>
    </Suspense>
  );
}
