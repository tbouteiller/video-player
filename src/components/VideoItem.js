import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="d-flex align-items-center"
    >
      <img
        style={{ maxWidth: 219 }}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      ></img>
      <div>
        <h5 className="ms-3" role="button">
          {video.snippet.title}
        </h5>
      </div>
    </div>
  );
};

export default VideoItem;
