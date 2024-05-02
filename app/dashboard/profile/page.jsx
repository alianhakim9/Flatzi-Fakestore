import Link from "next/link";
import { FaRegAddressCard } from "react-icons/fa";
import { SiAuthy } from "react-icons/si";
import { getUserById } from "../../../actions/data";
import EmptyState from "../../../components/empty-state";
import Card from "../../../components/profile/card";
import Header from "../../../components/profile/header";
import LogoutBtn from "../../../components/profile/logout-btn";
import { CiBank } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountPinBoxLine } from "react-icons/ri";

export default async function Page() {
  const user = await getUserById();
  const menus = [
    {
      title: "Address List",
      subtitle: "Atur alamat pengiriman belanjaan",
      link: "",
      icon: <FaRegAddressCard size={20} />,
    },
    {
      title: "Rekening Bank",
      subtitle: "Tarik saldo Flatzi ke rekening tujuan",
      link: "",
      icon: <CiBank size={20} />,
    },
    {
      title: "Pembayaran Instan",
      subtitle: "E-wallet, kartu kredit, & debit instan terdaftar",
      link: "",
      icon: <MdPayment size={20} />,
    },
    {
      title: "Keamanan Akun",
      subtitle: "Kata sandi, PIN, & verifikasi data diri",
      link: "",
      icon: <GrSecure size={20} />,
    },
    {
      title: "Notifikasi",
      subtitle: "Atur segala jenis pesan notifikasi",
      link: "",
      icon: <IoMdNotificationsOutline size={20} />,
    },
    {
      title: "Privasi Akun",
      subtitle: "Atur penggunaan data",
      link: "",
      icon: <RiAccountPinBoxLine size={20} />,
    },
  ];
  return (
    <div className="mb-24">
      {user ? (
        <div className="flex flex-col gap-4">
          <Header user={user} />
          <div className="block z-50">
            <h1 className="text-1xl font-semibold">Account Settings</h1>
            <div className="flex flex-col gap-1 mt-5">
              {menus.map((menu, index) => (
                <Card
                  key={index}
                  title={menu.title}
                  subtitle={menu.subtitle}
                  icon={menu.icon}
                  className="gap-4"
                />
              ))}
            </div>
            <hr className="mt-5 w-1/2 mx-auto" />
            <LogoutBtn />
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex items-center justify-center flex-col">
          <EmptyState
            title="Unauthorized"
            subTitle="You must sign in to continue"
            icon={<SiAuthy size={100} />}
            className="mb-5"
          />
          <div className="flex gap-2 items-center justify-center">
            <Link
              href="/auth/sign-in"
              className="bg-black px-4 py-2 rounded-lg text-white text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="border border-black px-4 py-2 rounded-lg text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
