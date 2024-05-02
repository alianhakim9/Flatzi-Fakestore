"use client";
import { useRouter } from "next/navigation";
import { handleLogout } from "../../actions/action";
import Card from "./card";
import { HiOutlineLogout } from "react-icons/hi";

export default function LogoutBtn() {
  const router = useRouter();
  const onLogout = () => {
    handleLogout();
    router.replace("/auth/sign-in");
  };
  return (
    <button onClick={onLogout} className="w-full">
      <Card
        icon={<HiOutlineLogout size={20} />}
        title="Logout"
        className="mt-5 hover:cursor-pointer"
      />
    </button>
  );
}
