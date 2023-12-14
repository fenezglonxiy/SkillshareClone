import videojs from "video.js";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import VjsPlaybackRateMenuButton from "../lib/VjsPlaybackRateMenuButton";
import PlaybackRateMenuButton from "video.js/dist/types/control-bar/playback-rate-menu/playback-rate-menu-button";

class SSPlaybackRate extends VjsPlaybackRateMenuButton {
  constructor(player: Player, options: PlaybackRateMenuButton["options_"]) {
    super(player, {
      ...options,
    });

    this.menuButton_.removeAttribute("title");
  }
}

videojs.registerComponent(
  "SSPlaybackRate",
  SSPlaybackRate as unknown as typeof Component
);
