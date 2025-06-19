export const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg shadow-sm p-4 animate-pulse flex flex-col gap-4"
        >
          <div className="bg-gray-200 h-40 w-full rounded-md" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-300 rounded w-full" />
            <div className="h-3 bg-gray-300 rounded w-5/6" />
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="h-5 w-16 bg-gray-300 rounded" />
            <div className="h-8 w-24 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};
