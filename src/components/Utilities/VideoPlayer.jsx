"use client";
import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "300",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary px-3 mb-1 rounded"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try again")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="text-color-dark bg-color-primary w-32 fixed bottom-4 right-4 rounded hover:text-color-accent transition-all shadow-xl"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
