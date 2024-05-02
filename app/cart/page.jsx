import { FaArrowRight } from "react-icons/fa";
import Footer from "../../components/footer";
import Header from "../../components/header";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import CartSkeleton from "../../components/skeletons/cart-skeleton";

const ListCart = dynamic(() => import("../../components/cart/list-cart"), {
  ssr: false,
});

const CheckoutButton = dynamic(
  () => import("../../components/cart/checkout-button"),
  {
    ssr: false,
  }
);

export default async function Page() {
  return (
    <div className="max-w-screen-sm">
      <div className="md:p-10 p-5 flex flex-col gap-4">
        <Header title="My Cart" backLink="/dashboard" className={"text-2xl"} />
        <Suspense fallback={<CartSkeleton />}>
          <ListCart />
        </Suspense>
      </div>
      <Footer>
        <CheckoutButton />
      </Footer>
    </div>
  );
}
