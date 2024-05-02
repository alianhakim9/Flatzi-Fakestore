import { IoClose } from "react-icons/io5";

export default function ClearCategoryBtn({ onClick }) {
  return (
    <button
      className="flex gap-1 items-center mt-2 hover:cursor-pointer"
      onClick={onClick}
    >
      <IoClose />
      <p className="text-sm">Clear selected category</p>
    </button>
  );
}
