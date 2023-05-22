import React from "react";

const VideoSkeletonContainer = () => (
  <>
    {[...Array(10)].map((_, i) => (
      <div key={i} className="grid gap-2">
        <div className=" h-[670px] bg-gray-300 rounded-sm" />

        <div className="w-full bg-gray-300 h-1 rounded-sm" />

        <div className="flex gap-2">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300" />

          <div className="w-full space-y-2">
            <div className="bg-gray-300 h-4 rounded-sm" />
            <div className="bg-gray-300 h-3 rounded-sm" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default VideoSkeletonContainer;
