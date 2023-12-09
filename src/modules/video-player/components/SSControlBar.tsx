import videojs from "video.js";
import Player from "video.js/dist/types/player";
import ControlBar from "video.js/dist/types/control-bar/control-bar";
import Component from "video.js/dist/types/component";
import "./SSFifteenSecondRewindButton";
import "./SSQualityLevelsButton";

const VjsControlBar = videojs.getComponent("ControlBar") as unknown as {
  new (player: Player, options: Player["options"]): ControlBar;
};

class SSControlBar extends VjsControlBar {
  constructor(player: Player, options: Player["options"]) {
    super(player, options);
    this.cleanupDefault();
    this.addChild("SSFifteenSecondRewindButton");
    this.addChild("SSQualityLevelsButton");
  }

  cleanupDefault() {
    this.removeChild(this.getChild("RemainingTimeDisplay") as Component);
  }
}

videojs.registerComponent(
  "SSControlBar",
  SSControlBar as unknown as typeof Component
);
