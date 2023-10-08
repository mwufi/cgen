import React from "react";

const VideoPlayer = ({ videoSrcURL }) => {
  return (
    <div className="video-container my-8">
      <iframe
        src={videoSrcURL}
        title="Course Preview"
        frameborder="0"
        allow="autoplay; fullscreen"
        className="w-full h-64 md:h-96"
      />
    </div>
  );
};

export default VideoPlayer;
