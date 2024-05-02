export default function ProductDetailSkeleton() {
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="h-[250px] w-full bg-gray-100 rounded-lg"></div>
      <div className="h-[10px] w-full bg-gray-100"></div>
      <div className="h-[10px] w-1/2 bg-gray-100"></div>
      <DescriptionSkeleton />
    </div>
  );
}

function DescriptionSkeleton() {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push(<div className="h-[10px] w-full bg-gray-100" key={i}></div>);
  }
  return row;
}
