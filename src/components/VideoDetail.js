import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <>
        <p className="p-4">No Current Results</p>
      </>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer" src={videoSrc} allowFullScreen></iframe>
      </div>
      <div className="alert alert-secondary">
        <h4>{video.snippet.title}</h4>
        <p className="text-muted">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
