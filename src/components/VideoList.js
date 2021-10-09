import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <>
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
        <hr className="my-1 mx-0" />
      </>
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
