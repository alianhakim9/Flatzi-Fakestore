export default function Footer({ children }) {
  return (
    <div className="fixed bg-white max-w-screen-sm w-full p-4 flex items-center justify-between bottom-0 border-t border-gray-100">
      {children}
    </div>
  );
}
