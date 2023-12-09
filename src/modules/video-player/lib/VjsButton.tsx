import videojs from "video.js";
import Button from "video.js/dist/types/button";
import Player from "video.js/dist/types/player";

const VjsButton = videojs.getComponent("Button") as unknown as {
  new (player: Player, options: Player["options"]): Button;
};

export default VjsButton;
