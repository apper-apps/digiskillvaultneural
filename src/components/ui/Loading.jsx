import React from "react";

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-6">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg w-3/4"></div>
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-1/2"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-full"></div>
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-4/6"></div>
        </div>
        
        {/* Card skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-elevated p-6 space-y-4">
              <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-full"></div>
                <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-2/3"></div>
              </div>
              <div className="h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;