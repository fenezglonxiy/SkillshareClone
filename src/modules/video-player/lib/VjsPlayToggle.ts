import videojs from "video.js";
import Player from "video.js/dist/types/player";
import PlayToggle from "video.js/dist/types/control-bar/play-toggle";

const VjsPlayToggle = videojs.getComponent("PlayToggle") as unknown as {
  new (player: Player, options: PlayToggle["options_"]): PlayToggle;
};

export default VjsPlayToggle;
