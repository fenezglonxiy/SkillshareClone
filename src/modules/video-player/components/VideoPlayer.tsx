/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import React from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import getVideoPlayerCss from "./getVideoPlayerCss";
import "./SSBigPlayButton";
import "./SSControlBar";

const initialOptions = {
  autoplay: false,
  controls: true,
  fill: true,
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
  children: [
    "mediaLoader",
    "posterImage",
    "textTrackDisplay",
    "loadingSpinner",
    "SSBigPlayButton",
    "liveTracker",
    "SSControlBar",
    "errorDisplay",
    "textTrackSettings",
    "resizeManager",
  ],
};

const VideoPlayer = () => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<Player | null>(null);

  React.useEffect(() => {
    if (!playerRef.current) {
      if (!videoRef.current) {
        return;
      }

      const videoNode = document.createElement("video-js");
      videoNode.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoNode);
      createVideoJSPlayer(videoNode);
    } else {
      const player = playerRef.current;
      player.autoplay(initialOptions.autoplay);
      player.src(initialOptions.sources);
    }
  }, []);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const createVideoJSPlayer = (videoNode: HTMLElement) => {
    const player = videojs(videoNode, {
      ...initialOptions,
    });

    playerRef.current = player;
  };

  const theme = useTheme();
  const css = getVideoPlayerCss(theme);

  return <div data-vjs-player ref={videoRef} css={css} />;
};

export default VideoPlayer;
