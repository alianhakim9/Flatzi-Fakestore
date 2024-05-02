import Footer from "../../components/footer";
import Header from "../../components/home/header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col justify-between overflow-y-hidden fixed h-screen">
      <Header />
      <div>
        <Image
          alt="auth-bg"
          src="/images/auth-bg.png"
          width={512}
          height={100}
          className="absolute -z-20 top-0 right-0"
        />
      </div>
      <Footer>
        <Link
          href="/auth/sign-up"
          className="bg-black p-4 rounded-lg text-white text-center text-sm w-full flex gap-2 items-center justify-center"
        >
          Get Started
          <FaArrowRight />
        </Link>
      </Footer>
    </div>
  );
}
