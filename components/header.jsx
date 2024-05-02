import Link from "next/link";
import { RiNotification2Line } from "react-icons/ri";
import BackButton from "./back-button";

export default function Header({ backLink, title, children, className }) {
  return (
    <div className="flex flex-col w-full fixed top-0 bg-white max-w-screen-sm z-50 mx-auto right-0 left-0 p-5">
      <div className="flex justify-between items-center">
        {backLink && <BackButton backLink={backLink} />}
        <h1 className={`font-bold ${className}`}>{title}</h1>
        <div>
          <Link href="/notification">
            <RiNotification2Line size={24} />
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
