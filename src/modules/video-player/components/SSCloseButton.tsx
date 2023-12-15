import videojs from "video.js";
import VjsCloseButton from "../lib/VjsCloseButton";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import CloseButton from "video.js/dist/types/close-button";
import { vjsSsSkinClasses } from "./__styles__/getVjsSsSkinCss";

class SSCloseButton extends VjsCloseButton {
  constructor(player: Player, options: CloseButton["options_"]) {
    super(player, options);
    this.removeAttribute("title");
    const el = this.el();
    el.removeChild(el.children[0]);
    el.removeChild(el.children[0]);
  }

  override handleClick(event: Event): void {
    this.player_.removeClass(vjsSsSkinClasses["pip-mode"]);
  }
}

videojs.registerComponent(
  "SSCloseButton",
  SSCloseButton as unknown as typeof Component
);
