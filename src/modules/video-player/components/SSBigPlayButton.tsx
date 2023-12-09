import BigPlayButton from "video.js/dist/types/big-play-button";
import Component from "video.js/dist/types/component";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

const VjsBigPlayButton = videojs.getComponent("BigPlayButton") as unknown as {
  new (player: Player, options: Player["options"]): BigPlayButton;
};

class SSBigPlayButton extends VjsBigPlayButton {
  constructor(player: Player, options: Player["options"]) {
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
