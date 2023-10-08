import Header from "./Header";
import CallToAction from "./CallToAction";
import VideoPlayer from "./VideoPlayer";
import Overview from "./Overview";

// Additional Styling: Rounded corners, shadows, and optimal padding for a card-like appearance.
const LandingPage = () => {
  const videoSrcURL = "https://www.examplevideourl.com";
  const overviewText = "This course...";

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-gray-200">
      <div className="flex flex-col md:flex-row md:items-start w-full max-w-3xl bg-white p-6 rounded-lg shadow-2xl">
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
          <Header />
        </div>
        <div className="md:w-1/2">
          <VideoPlayer videoSrcURL={videoSrcURL} />
        </div>
      </div>

      <CallToAction buttonText="Start Course" />

      <div className="w-full max-w-3xl">
        <Overview overviewText={overviewText} />
      </div>
    </div>
  );
};

export default LandingPage;
