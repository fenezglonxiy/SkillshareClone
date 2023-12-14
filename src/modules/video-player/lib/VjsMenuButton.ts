import videojs from "video.js";
import Player from "video.js/dist/types/player";
import MenuButton from "video.js/dist/types/menu/menu-button";

const VjsMenuButton = videojs.getComponent("MenuButton") as unknown as {
  new (player: Player, options: MenuButton["options_"]): MenuButton;
};

export default VjsMenuButton;
