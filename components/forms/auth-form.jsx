"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { handleLogin } from "../../actions/action";
import { useRouter } from "next/navigation";
import Spinner from "../spinner";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleLogin(username, password)
      .then(() => router.push("/dashboard"))
      .finally(() => setIsLoading(false));
  };

  return (
    <form className="mt-5 flex flex-col gap-4" onSubmit={onLogin}>
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          className=" bg-gray-100 px-2 py-3 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-black w-full rounded-lg text-white py-3 mt-4 flex items-center justify-center gap-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <p>Sign In</p>}
      </button>
      <p className="text-gray-400 text-center">Or</p>
      <button
        className="border border-gray-200 rounded-lg flex gap-3 items-center justify-center py-3"
        type="button"
      >
        <FaGoogle size={20} />
        Sign In With Google
      </button>
      <button
        className="bg-blue-600 text-white rounded-lg flex gap-3 items-center justify-center py-3"
        type="button"
      >
        <FaFacebook size={20} />
        Sign In With Facebook
      </button>
      <div className="flex items-center justify-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Link href="/auth/sign-up" className="text-black underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
