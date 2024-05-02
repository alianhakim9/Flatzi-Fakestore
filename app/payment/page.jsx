import { cookies } from "next/headers";

const PaymentPage = dynamic(() => import("../../components/payment/payment"), {
  ssr: false,
});

export default function Page() {
  const tsToken = cookies().get("ts-token")?.value;
  return <PaymentPage tsToken={tsToken} />;
}
