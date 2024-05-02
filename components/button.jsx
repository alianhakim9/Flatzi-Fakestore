export default function Button({ title, onClick, icon }) {
  return (
    <button className="bg-black text-white p-3 rounded-lg">{title}</button>
  );
}
