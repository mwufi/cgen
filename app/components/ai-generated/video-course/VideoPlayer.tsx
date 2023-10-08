import React from "react";

// Additional Styling: Added aspect ratio utility to maintain video proportions and shadow for a lifted appearance.
const VideoPlayer = ({ videoSrcURL }) => {
  return (
    <div className="video-container my-8 rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
      <iframe
        src={videoSrcURL}
        title="Course Preview"
        allow="autoplay; fullscreen"
        className="w-full h-full min-h-[300px]"
      />
    </div>
  );
};

export default VideoPlayer;
