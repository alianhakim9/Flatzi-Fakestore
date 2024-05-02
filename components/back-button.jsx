"use client";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton({ backLink }) {
  const router = useRouter();
  const onBack = () => router.back();
  return (
    <button onClick={onBack}>
      <BsArrowLeft size={24} />
    </button>
  );
}
