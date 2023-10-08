import Header from "./Header";
import CallToAction from "./CallToAction";
import VideoPlayer from "./VideoPlayer";
import Overview from "./Overview";
import CourseOutline from "./CourseOutline";
import Testimonial from "./Testimonial";

const LandingPage = () => {
  const videoSrcURL =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const overviewText = "This course...";
  const testimonialText =
    "A transformative journey through the art and science of goal setting. An absolute must-watch!";
  const testimonialAuthor = "Jane Doe, CEO of TechCorp";

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <Header />
        <VideoPlayer videoSrcURL={videoSrcURL} />
        <CallToAction buttonText="Start Course" />
        <Overview overviewText={overviewText} />
        <Testimonial text={testimonialText} author={testimonialAuthor} />
        <CourseOutline />
      </div>
    </div>
  );
};

export default LandingPage;
