import { useEffect, useRef } from "react";
import Hls from "hls.js";

const VIDEO_SRC = "https://stream.mux.com/DQDjavadXX6PV6uVa4JbymMppVvryfPCpvKrSNu3Gf00.m3u8?redundant_streams=true";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster="/images/hero_bg.jpeg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};

export default HeroVideo;
