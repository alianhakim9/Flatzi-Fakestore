export default function CategorySkeleton() {
  return (
    <div className="flex gap-1">
      <CategorySkeletonCard />
    </div>
  );
}

function CategorySkeletonCard() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(
      <div className="w-[100px] h-[30px] bg-gray-200 rounded-md"></div>
    );
  }
  return rows;
}
