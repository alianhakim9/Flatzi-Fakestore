import toast from "react-hot-toast";

export function showToast(message) {
  toast.success(message);
  // toast.custom((t) => (
  //   <div
  //     className={`bg-black rounded-md px-4 py-2 text-white fixed z-50 bottom-20 ${
  //       t.visible ? "animate-enter" : "animate-leave"
  //     }`}
  //   >
  //     <p className="text-sm">{message}</p>
  //   </div>
  // ));
}
