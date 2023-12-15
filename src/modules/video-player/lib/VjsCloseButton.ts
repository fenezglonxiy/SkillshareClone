import videojs from "video.js";
import Player from "video.js/dist/types/player";
import CloseButton from "video.js/dist/types/close-button";

const VjsCloseButton = videojs.getComponent("CloseButton") as unknown as {
  new (player: Player, options: CloseButton["options_"]): CloseButton;
};

export default VjsCloseButton;
