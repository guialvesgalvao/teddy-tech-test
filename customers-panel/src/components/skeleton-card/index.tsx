export function SkeletonCard() {
  return (
    <div className="animate-pulse bg-gray-200 rounded p-4 h-40">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
}
