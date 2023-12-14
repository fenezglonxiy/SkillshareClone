import videojs from "video.js";
import Player from "video.js/dist/types/player";
import PlaybackRateMenuButton from "video.js/dist/types/control-bar/playback-rate-menu/playback-rate-menu-button";

const VjsPlaybackRateMenuButton = videojs.getComponent(
  "PlaybackRateMenuButton"
) as unknown as {
  new (
    player: Player,
    options: PlaybackRateMenuButton["options_"]
  ): PlaybackRateMenuButton;
};

export default VjsPlaybackRateMenuButton;
