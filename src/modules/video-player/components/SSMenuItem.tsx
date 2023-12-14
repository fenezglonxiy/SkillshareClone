import videojs from "video.js";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import MenuItem from "video.js/dist/types/menu/menu-item";
import VjsMenuItem from "../lib/VjsMenuItem";

class SSMenuItem extends VjsMenuItem {
  constructor(player: Player, options: MenuItem["options_"]) {
    super(player, {
      ...options,
      selectable: true,
    });
  }
}

videojs.registerComponent(
  "SSMenuItem",
  SSMenuItem as unknown as typeof Component
);
