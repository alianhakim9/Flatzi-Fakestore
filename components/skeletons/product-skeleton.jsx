export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-1">
      <ProductSkeletonCard />
    </div>
  );
}

function ProductSkeletonCard() {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(<div className="w-full h-[150px] bg-gray-200 rounded-md"></div>);
  }
  return rows;
}
