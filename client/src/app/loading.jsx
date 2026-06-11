export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 animate-pulse">

        {/* Header Skeleton */}
        <div className="text-center mb-6">
          <div className="mx-auto h-14 w-14 rounded-full bg-slate-800"></div>

          <div className="mt-4 h-6 w-40 bg-slate-800 rounded mx-auto"></div>

          <div className="mt-2 h-4 w-60 bg-slate-800 rounded mx-auto"></div>
        </div>

        {/* Form Skeleton */}
        <div className="space-y-4">

          <div className="h-10 w-full bg-slate-800 rounded-xl"></div>

          <div className="h-10 w-full bg-slate-800 rounded-xl"></div>

          <div className="h-20 w-full bg-slate-800 rounded-xl"></div>

          <div className="h-10 w-full bg-slate-800 rounded-xl"></div>

          {/* Button */}
          <div className="h-12 w-full bg-slate-700 rounded-xl mt-4"></div>
        </div>
      </div>

    </div>
  );
}