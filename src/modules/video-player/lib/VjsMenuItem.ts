import videojs from "video.js";
import MenuItem from "video.js/dist/types/menu/menu-item";
import Player from "video.js/dist/types/player";

const VjsMenuItem = videojs.getComponent("MenuItem") as unknown as {
  new (player: Player, options: MenuItem["options_"]): MenuItem;
};

export default VjsMenuItem;
