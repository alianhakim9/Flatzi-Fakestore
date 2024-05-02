import Image from "next/image";
import Link from "next/link";
import { TbPencil } from "react-icons/tb";

export default function Header({ user }) {
  return (
    <div className="min-h-[200px] bg-gradient-to-r from-black to-gray-700 text-white p-10 rounded-2xl">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">Akun Saya</h2>
        <div className="flex mt-5 justify-between">
          <div className="flex gap-4">
            <Image
              width={80}
              height={80}
              alt="profile"
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-semibold">
                {user.name.firstname} {user.name.lastname}
              </p>
              <p className="font-light text-sm">{user.phone}</p>
              <p className="font-light text-sm">{user.email}</p>
            </div>
          </div>
          <Link href="/edit-profile">
            <TbPencil size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
