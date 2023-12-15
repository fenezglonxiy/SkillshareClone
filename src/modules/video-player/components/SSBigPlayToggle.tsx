import Player from "video.js/dist/types/player";
import VjsPlayToggle from "../lib/VjsPlayToggle";
import PlayToggle from "video.js/dist/types/control-bar/play-toggle";
import videojs from "video.js";
import Component from "video.js/dist/types/component";
import { vjsSsSkinClasses } from "./__styles__/getVjsSsSkinCss";

class SSBigPlayToggle extends VjsPlayToggle {
  constructor(player: Player, options: PlayToggle["options_"]) {
    super(player, options);
    const el = this.el();
    el.removeChild(el.children[0]);
    el.removeChild(el.children[0]);
  }

  override buildCSSClass(): string {
    return `${super.buildCSSClass()} ${vjsSsSkinClasses["big-play-button"]}`;
  }
}

videojs.registerComponent(
  "SSBigPlayToggle",
  SSBigPlayToggle as unknown as typeof Component
);
