import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTextSubmit = async (text) => {
    const response = await youtube.get("./search", {
      params: {
        q: text,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="container-fluid px-10">
      <SearchBar onFormSubmit={onTextSubmit} />
      <div className="row">
        <div className="col-lg-8 col-md-12 ">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="col-lg-4 col-md-12">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
