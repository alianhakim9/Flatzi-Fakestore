import Header from "../../components/header";
import Categories from "../../components/home/categories";
import Filter from "../../components/home/filter";
import Products from "../../components/home/products";
import Search from "../../components/home/search";
import CategorySkeleton from "../../components/skeletons/category-skeleton";
import ProductSkeleton from "../../components/skeletons/product-skeleton";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const query = searchParams.query;
  const category = searchParams.category;
  const sort = searchParams.sort;

  return (
    <div className="flex flex-col">
      <div className="fixed bg-white z-50 w-full top-0 md:pr-20 pr-10 py-5 max-w-screen-sm">
        <div className="flex flex-col">
          <Header title="Discover" className={"text-3xl"}>
            <div className="flex gap-2 items-center mt-5">
              <Search />
              <Filter />
            </div>
          </Header>
        </div>
      </div>
      <div className="md:mt-[115px] mt-32 flex flex-col gap-5 mb-10 pb-10">
        <Suspense fallback={<CategorySkeleton />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<ProductSkeleton />}>
          <Products query={query} category={category} sort={sort} />
        </Suspense>
      </div>
    </div>
  );
}
