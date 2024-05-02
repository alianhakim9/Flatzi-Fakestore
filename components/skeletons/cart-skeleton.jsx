export default function CartSkeleton() {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(<Card key={i} />);
  }
  return <div className="flex flex-col gap-2 mt-16">{rows}</div>;
}

function Card() {
  return <div className="bg-gray-100 rounded-lg w-full h-[100px]"></div>;
}
