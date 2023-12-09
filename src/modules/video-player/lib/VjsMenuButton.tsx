import videojs from "video.js";
import MenuButton from "video.js/dist/types/menu/menu-button";
import Player from "video.js/dist/types/player";

const VjsMenuButton = videojs.getComponent("MenuButton") as unknown as {
  new (player: Player, options: MenuButton["options"]): MenuButton;
};

export default VjsMenuButton;
