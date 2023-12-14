import videojs from "video.js";
import Player from "video.js/dist/types/player";
import ControlBar from "video.js/dist/types/control-bar/control-bar";
import Component from "video.js/dist/types/component";
import "./SSFifteenSecondRewindButton";
import "./SSQualityLevelsControl";
import "./SSTranscriptModeControl";
import "./SSPlaybackRate";
import Menu from "video.js/dist/types/menu/menu";
import MenuButton from "video.js/dist/types/menu/menu-button";
import { videoJsCommonClasses } from "./__styles__/getVjsSsSkinCss";

const VjsControlBar = videojs.getComponent("ControlBar") as unknown as {
  new (player: Player, options: ControlBar["options_"]): ControlBar;
};

class SSControlBar extends VjsControlBar {
  currentShowedMenu_: Menu | null = null;

  constructor(player: Player, options: ControlBar["options_"]) {
    super(player, {
      ...options,
      children: [
        "PlayToggle",
        "ProgressControl",
        "SSPlaybackRate",
        "SSFifteenSecondRewindButton",
        "CurrentTimeDisplay",
        "TimeDivider",
        "DurationDisplay",
        "Spacer",
        "VolumePanel",
        "SSTranscriptModeControl",
        "SSQualityLevelsControl",
        "FullscreenToggle",
      ],
    });

    const transcriptModeControl = this.getChild(
      "SSTranscriptModeControl"
    ) as unknown as MenuButton;
    const qualityLevelsControl = this.getChild(
      "SSQualityLevelsControl"
    ) as unknown as MenuButton;
    this.addClickEventListenerForMenuButton(transcriptModeControl);
    this.addClickEventListenerForMenuButton(qualityLevelsControl);
  }

  addClickEventListenerForMenuButton(menuButton: MenuButton): void {
    menuButton.on("click", () => this.toggleMenu(menuButton.menu));

    menuButton.on("tap", () => this.toggleMenu(menuButton.menu));
  }

  toggleMenu(menu: Menu): void {
    if (this.currentShowedMenu_ !== menu && this.currentShowedMenu_ !== null) {
      this.currentShowedMenu_.removeClass(videoJsCommonClasses.exposed);
    }

    menu.toggleClass(videoJsCommonClasses.exposed, null);

    if (menu.hasClass(videoJsCommonClasses.exposed)) {
      this.currentShowedMenu_ = menu;
    } else {
      this.currentShowedMenu_ = null;
    }
  }
}

videojs.registerComponent(
  "SSControlBar",
  SSControlBar as unknown as typeof Component
);
