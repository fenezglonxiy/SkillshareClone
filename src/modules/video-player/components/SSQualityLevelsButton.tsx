import videojs from "video.js";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import { videoJsClasses } from "./getVideoPlayerCss";
import VjsMenuButton from "../lib/VjsMenuButton";

class SSQualityLevelsButton extends VjsMenuButton {
  constructor(player: Player, options: Player["options"]) {
    super(player, options);
    this.addClass(videoJsClasses["quality-levels-control"]);
    this.controlText("Quality Levels");
  }
}

videojs.registerComponent(
  "SSQualityLevelsButton",
  SSQualityLevelsButton as unknown as typeof Component
);
