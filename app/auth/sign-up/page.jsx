import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col p-5 text-sm">
      <h3 className="font-bold text-2xl">Create an account</h3>
      <p className="text-gray-400 ">Let&apos;s create your account</p>
      <form className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullname" className=" font-semibold">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-100 px-2 py-3 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className=" bg-gray-100 px-2 py-3 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className=" font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className=" bg-gray-100 px-2 py-3 rounded-md"
          />
        </div>
        <button
          className="bg-black w-full rounded-lg text-white py-3 mt-4"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-gray-400 text-center">Or</p>
        <button
          className="border border-gray-200 rounded-lg flex gap-3 items-center justify-center py-3"
          type="button"
        >
          <FaGoogle size={20} />
          Sign Up With Google
        </button>
        <button
          className="bg-blue-600 text-white rounded-lg flex gap-3 items-center justify-center py-3"
          type="button"
        >
          <FaFacebook size={20} />
          Sign Up With Facebook
        </button>
        <div className="flex items-center justify-center gap-2">
          <p>Already a member?</p>
          <Link href="/auth/sign-in" className="text-black underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
