"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";

export default function BottomNav() {
  const pathname = usePathname();
  const menus = [
    {
      icon: <RiHome6Line size={20} />,
      title: "Home",
      url: "/dashboard",
    },
    {
      icon: <CiHeart size={20} />,
      title: "Saved",
      url: "/dashboard/saved",
    },
    {
      icon: <MdOutlineShoppingBag size={20} />,
      title: "Cart",
      url: "/cart",
    },
    {
      icon: <IoPersonCircleOutline size={20} />,
      title: "Profile",
      url: "/dashboard/profile",
    },
  ];
  return (
    <div className="bg-white w-full p-3 border border-gray-200 flex justify-evenly max-w-screen-sm">
      {menus.map((menu, index) => (
        <Link
          href={menu.url}
          className={`flex flex-col items-center ${
            pathname === menu.url ? "text-black" : "text-gray-400"
          }`}
          key={index}
        >
          {menu.icon}
          <p className="text-sm ">{menu.title}</p>
        </Link>
      ))}
    </div>
  );
}
