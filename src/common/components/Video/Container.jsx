import React, { useContext, useState } from "react";
import VideoCard from "./Card";
import { Squares2X2Icon, Square3Stack3DIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import VideoPagination from "./Pagination";
import VideoSkeletonContainer from "./SkeletonContainer";
import { AppContext } from "../../context";

const ContainerActionBtn = [
  {
    key: "grid-mode",
    Icon: Squares2X2Icon,
  },
  {
    key: "stack-mode",
    Icon: Square3Stack3DIcon,
  },
];

const VideoActionContainer = ({ setVideoContainerMode, className = "" }) => (
  <div className={className}>
    {ContainerActionBtn.map(({ key, Icon }) => (
      <button key={key}>
        <Icon onClick={() => setVideoContainerMode(key)} className="w-6 h-6" />
      </button>
    ))}
  </div>
);

const VideoContainer = () => {
  const { videos, isLoading } = useContext(AppContext);

  const [videoContainerMode, setVideoContainerMode] = useState(
    ContainerActionBtn[0].key
  );

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center">
        <h1>Videos</h1>

        <VideoActionContainer
          setVideoContainerMode={setVideoContainerMode}
          className="space-x-2"
        />
      </div>

      <div
        className={clsx(
          videoContainerMode === "stack-mode" &&
            "w-full flex flex-col items-center"
        )}
      >
        <div
          className={
            videoContainerMode === "grid-mode"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
              : "max-w-full w-[600px] grid gap-4"
          }
        >
          {isLoading ? (
            <VideoSkeletonContainer />
          ) : (
            videos.map((video) => (
              <VideoCard
                isGridMode={videoContainerMode === "grid-mode"}
                key={video.postId}
                {...video}
              />
            ))
          )}
        </div>
      </div>

      <VideoPagination />

      {videoContainerMode === "stack-mode" && (
        <VideoActionContainer
          setVideoContainerMode={setVideoContainerMode}
          className="fixed bottom-2 right-2 space-x-2"
        />
      )}
    </div>
  );
};

export default VideoContainer;
