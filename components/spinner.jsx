import { AiOutlineLoading } from "react-icons/ai";

export default function Spinner({ className }) {
  return <AiOutlineLoading size={24} className={`animate-spin ${className}`} />;
}
