import React from "react";
import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  const opts = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: false,
      loop: false,
      controls: true,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />

};

export default Video;

