import React from 'react';
import Header from './Header';
import CallToAction from './CallToAction';
import VideoPlayer from './VideoPlayer';
import Overview from './Overview';

const LandingPage = () => {
  // Example Data
  const videoSrcURL = "https://www.examplevideourl.com";
  const overviewText = "This course, led by Daymond John, dives deep into the methodology and practice of setting achievable goals in the professional space. Engage in 14 detailed lessons spanning 52 minutes to redefine your career trajectory and business milestones.";

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row md:items-start w-full md:max-w-2xl mt-8">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <Header />
        </div>
        <div className="md:w-1/2">
          <VideoPlayer videoSrcURL={videoSrcURL} />
        </div>
      </div>

      <CallToAction buttonText="Start Course" />

      <div className="w-full max-w-2xl">
        <Overview overviewText={overviewText} />
      </div>
    </div>
  );
};

export default LandingPage;
