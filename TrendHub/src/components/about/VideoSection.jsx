import React, { useRef, useState } from "react";
import aboutVideo from "../../assets/about/aboutVideo.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex justify-center items-center py-10">
      <div className="relative flex justify-center w-[80%]">
        {/* Video */}
        <video
          ref={videoRef}
          width="100%"
          className="rounded-3xl overflow-hidden "
          controls
        >
          <source src={aboutVideo} />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        {/* Oynat/Durdur Butonu */}
        {!isPlaying && (
          <button
            className="absolute top-[50%] translate-y-[-50%] bg-customLightBlue md:w-24 md:h-24 h-12 w-12 rounded-full flex justify-center items-center shadow-md z-10"
            onClick={handlePlayPause}
          >
            <i className="fa-solid fa-play text-white md:text-4xl text-2xl"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
