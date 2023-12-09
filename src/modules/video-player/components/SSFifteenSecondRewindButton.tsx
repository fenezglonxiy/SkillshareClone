import videojs from "video.js";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import { videoJsClasses } from "./getVideoPlayerCss";
import VjsButton from "../lib/VjsButton";

class SSFifteenSecondRewindButton extends VjsButton {
  constructor(player: Player, options: Player["options"]) {
    super(player, options);
    this.addClass(videoJsClasses["fifteen-second-rewind-control"]);
    this.controlText("15-Second Rewind");
  }
}

videojs.registerComponent(
  "SSFifteenSecondRewindButton",
  SSFifteenSecondRewindButton as unknown as typeof Component
);
