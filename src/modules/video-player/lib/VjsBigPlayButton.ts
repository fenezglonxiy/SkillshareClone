import videojs from "video.js";
import BigPlayButton from "video.js/dist/types/big-play-button";
import Player from "video.js/dist/types/player";

const VjsBigPlayButton = videojs.getComponent("BigPlayButton") as unknown as {
  new (player: Player, options: BigPlayButton["options_"]): BigPlayButton;
};

export default VjsBigPlayButton;
