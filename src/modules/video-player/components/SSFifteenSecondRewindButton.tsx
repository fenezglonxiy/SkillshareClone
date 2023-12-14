import videojs from "video.js";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import { controlBarClasses } from "./__styles__/getControlBarCss";
import VjsSkipBackward from "../lib/VjsSkipBackward";
import SkipBackward from "video.js/dist/types/control-bar/skip-buttons/skip-backward";

class SSFifteenSecondRewindButton extends VjsSkipBackward {
  constructor(player: Player, options: SkipBackward["options_"]) {
    super(player, {
      ...options,
      playerOptions: {
        controlBar: {
          skipButtons: {
            backward: 15,
          },
        },
      },
    });
    this.addClass(controlBarClasses["fifteen-second-rewind-control"]);
    this.validOptions = [15];
    this.skipTime = this.getSkipBackwardTime();
    this.show();
    this.controlText("15-Second Rewind");
  }
}

videojs.registerComponent(
  "SSFifteenSecondRewindButton",
  SSFifteenSecondRewindButton as unknown as typeof Component
);
