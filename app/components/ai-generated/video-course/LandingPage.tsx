import React from "react";
import Header from "./Header";
import CallToAction from "./CallToAction";
import VideoPlayer from "./VideoPlayer";
import Overview from "./Overview";

const LandingPage = () => {
  // Example Data
  const videoSrcURL = "https://www.examplevideourl.com";
  const overviewText =
    "This course, led by Daymond John, dives deep into the methodology and practice of setting achievable goals in the professional space. Engage in 14 detailed lessons spanning 52 minutes to redefine your career trajectory and business milestones.";

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />

      <CallToAction buttonText="Start Course" />

      <VideoPlayer videoSrcURL={videoSrcURL} />

      <Overview overviewText={overviewText} />
    </div>
  );
};

export default LandingPage;
