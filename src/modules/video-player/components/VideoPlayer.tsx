/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import React from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import getVjsSsSkinCss, {
  vjsSsSkinClasses,
} from "./__styles__/getVjsSsSkinCss";
import "./SSBigPlayToggle";
import "./SSCloseButton";
import "./SSControlBar";

const initialOptions = {
  autoplay: false,
  controls: true,
  textTrackSettings: false,
  responsive: true,
  breakpoints: {
    small: 300,
    medium: 550,
  },
  sources: [
    {
      src: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
      type: "application/dash+xml",
    },
  ],
  children: [
    "MediaLoader",
    "PosterImage",
    "TextTrackDisplay",
    "LoadingSpinner",
    "SSBigPlayToggle",
    "SSCloseButton",
    "LiveTracker",
    "SSControlBar",
    "ErrorDisplay",
    "TextTrackSettings",
    "ResizeManager",
  ],
  playbackRates: [2, 1.5, 1.25, 1],
  html5: {
    vhs: {
      overrideNative: true,
      limitRenditionByPlayerDimensions: false,
      smoothQualityChange: false,
      nativeCaptions: false,
      nativeAudioTracks: false,
      nativeVideoTracks: false,
    },
  },
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

  const theme = useTheme();
  const css = getVjsSsSkinCss(theme);

  const createVideoJSPlayer = (videoNode: HTMLElement) => {
    const player = videojs(videoNode, {
      ...initialOptions,
    });

    player.addClass(vjsSsSkinClasses["ss-skin"], vjsSsSkinClasses["pip-mode"]);

    playerRef.current = player;
  };

  return <div data-vjs-player ref={videoRef} css={css} />;
};

export default VideoPlayer;
