import BigPlayButton from "video.js/dist/types/big-play-button";
import Component from "video.js/dist/types/component";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import VjsBigPlayButton from "../lib/VjsBigPlayButton";

class SSBigPlayButton extends VjsBigPlayButton {
  constructor(player: Player, options: BigPlayButton["options_"]) {
    super(player, options);
    this.cleanupDefault();
  }

  cleanupDefault() {
    this.removeAttribute("title");
    const el = this.el();
    el.removeChild(el.children[0]);
    el.removeChild(el.children[0]);
  }
}

videojs.registerComponent(
  "SSBigPlayButton",
  SSBigPlayButton as unknown as typeof Component
);
