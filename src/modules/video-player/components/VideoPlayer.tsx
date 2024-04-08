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
import initialOptions from "../constants/initialOptions";

type Props = {
  setVideoPlayer: (player: Player) => void;
  pipEnabled?: boolean;
};

const VideoPlayer = (props: Props) => {
  const videoPlaceholderRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<Player | null>(null);
  const { setVideoPlayer, pipEnabled } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      if (!videoPlaceholderRef.current) {
        return;
      }

      const videoNode = document.createElement("video-js");
      videoNode.classList.add("vjs-big-play-centered");
      videoPlaceholderRef.current.appendChild(videoNode);
      createVideoJSPlayer(videoNode);

      if (playerRef.current) {
        setVideoPlayer(playerRef.current);
      }
    } else {
      const player = playerRef.current;
      player.autoplay(initialOptions.autoplay);
      player.src(initialOptions.sources);
    }

    return () => {
      const player = playerRef.current;

      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  // React.useEffect(() => {
  //   const player = playerRef.current;

  //   return () => {
  //     if (player && !player.isDisposed()) {
  //       player.dispose();
  //       playerRef.current = null;
  //     }
  //   };
  // }, [playerRef]);

  React.useEffect(() => {
    if (pipEnabled) {
      playerRef.current?.addClass(vjsSsSkinClasses["pip-mode"]);
    } else {
      playerRef.current?.removeClass(vjsSsSkinClasses["pip-mode"]);
    }
  }, [pipEnabled]);

  const theme = useTheme();
  const css = getVjsSsSkinCss(theme);

  const createVideoJSPlayer = (videoNode: HTMLElement) => {
    const player = videojs(videoNode, {
      ...initialOptions,
      id: "test",
    });

    player.addClass(vjsSsSkinClasses["ss-skin"]);

    playerRef.current = player;
  };

  return <div data-vjs-player ref={videoPlaceholderRef} css={css} />;
};

export default VideoPlayer;
