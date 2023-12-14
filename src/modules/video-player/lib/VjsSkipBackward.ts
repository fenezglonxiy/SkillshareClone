import videojs from "video.js";
import SkipBackward from "video.js/dist/types/control-bar/skip-buttons/skip-backward";
import Player from "video.js/dist/types/player";

const VjsSkipBackward = videojs.getComponent("SkipBackward") as unknown as {
  new (player: Player, options: SkipBackward["options_"]): SkipBackward;
};

export default VjsSkipBackward;
