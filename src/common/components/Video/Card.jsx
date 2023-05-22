import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { createRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ postId, creator, submission, isGridMode }) => {
  const [videoState, setVideoState] = useState({
    isPlay: false,
    progress: 0,
    duration: 0,
    showDescription: false,
  });

  const videoRef = createRef();

  useEffect(() => {
    // Pause the previous playing video
    if (postId !== window.location.href.split("#")[1]) {
      setVideoState({
        ...videoState,
        isPlay: false,
      });
    }
  }, [window.location.href]);

  const { name, pic } = creator;
  const { title, description, mediaUrl, thumbnail } = submission;

  return (
    <div id={postId} className="flex flex-col gap-2 group">
      <div>
        <div
          className={clsx(
            !isGridMode && "mt-10",
            "relative rounded-md !overflow-hidden -mb-2"
          )}
        >
          <div
            onClick={() => {
              if (!isGridMode) {
                window.location.replace(`#${postId}`);
              }

              setVideoState({
                ...videoState,
                isPlay: !videoState.isPlay,
              });
            }}
          >
            <ReactPlayer
              ref={videoRef}
              light={
                <img
                  className="w-full h-full object-fill"
                  src={thumbnail}
                  alt={`${title} Thumbnail`}
                />
              }
              url={mediaUrl}
              width="100%"
              height="100%"
              playing={videoState.isPlay}
              onReady={(e) =>
                setVideoState({
                  ...videoState,
                  duration: e.getDuration(),
                })
              }
              onProgress={(e) =>
                setVideoState({ ...videoState, progress: e.playedSeconds })
              }
            />
          </div>

          <div className="z-40 top-2 left-2 absolute hidden group-hover:block">
            {videoState.isPlay ? (
              <PauseIcon className="w-10 h-10" />
            ) : (
              <PlayIcon className="w-10 h-10" />
            )}
          </div>

          <div className="z-40 bottom-0 right-0 absolute hidden group-hover:flex flex-col items-end gap-2 p-2">
            <button
              onClick={(e) => {
                e.preventDefault();

                setVideoState({
                  ...videoState,
                  showDescription: !videoState.showDescription,
                });
              }}
              className="z-50 bg-gray-800 px-2 py-1 rounded-md font-medium"
            >
              {videoState.showDescription
                ? "Hide Description"
                : "Show Description"}
            </button>

            {videoState.showDescription && (
              <p className="bg-gray-800 rounded-md p-2">{description}</p>
            )}
          </div>
        </div>

        <progress
          value={videoState.progress}
          min={0}
          max={videoState.duration}
        />
      </div>

      <div className="flex gap-2 items-start">
        <img src={pic} className="w-10 h-10 rounded-full" />

        <div>
          <h4>{title}</h4>

          <p className="-mt-0.5 text-gray-400 cursor-pointer hover:underline">
            {name || "No name"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
