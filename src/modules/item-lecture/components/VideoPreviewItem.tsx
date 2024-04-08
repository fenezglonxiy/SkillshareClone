import { useEffect, useState } from "react";
import VideoPlayer from "../../video-player/components/VideoPlayer";
import Player from "video.js/dist/types/player";

const VideoPreviewItem = () => {
  const [videoPlayer, setVideoPlayer] = useState<Player | undefined>(undefined);
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);
  const [pipEnabled, setPiPEnabled] = useState<boolean>(false);

  useEffect(() => {
    const scrollContainer = getScrollContainer();

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    if (videoPlayer) {
      attachVideoPlayerListeners(videoPlayer);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }

      if (videoPlayer) {
        detachVideoPlayerListeners(videoPlayer);
      }
    };
  }, []);

  const handleScroll = () => {
    if (getIsMainPlayerHidden()) {
      setPiPEnabled(true);
    } else {
      setPiPEnabled(false);
    }
  };

  const getScrollContainer = () => {
    return window;
  };

  const getIsMainPlayerHidden = () => {
    if (isVideoEnded) {
      return false;
    }

    const scrollContainer = getScrollContainer();
    const scrollOffset = scrollContainer ? scrollContainer.scrollY : 0;
    return scrollOffset >= 200;
  };

  const handleTimeUpdate = () => {
    if (videoPlayer) {
      if (videoPlayer.player_.ended()) {
        if (!isVideoEnded) {
          setIsVideoEnded(true);
        }
      } else if (isVideoEnded) {
        setIsVideoEnded(false);
      }
    }
  };

  const attachVideoPlayerListeners = (videoPlayer: Player) => {
    if (videoPlayer) {
      videoPlayer.on("timeupdate", handleTimeUpdate);
    }
  };

  const detachVideoPlayerListeners = (videoPlayer: Player) => {
    if (videoPlayer) {
      videoPlayer.off("timeupdate", handleTimeUpdate);
    }
  };

  return (
    <VideoPlayer setVideoPlayer={setVideoPlayer} pipEnabled={pipEnabled} />
  );
};

export default VideoPreviewItem;
