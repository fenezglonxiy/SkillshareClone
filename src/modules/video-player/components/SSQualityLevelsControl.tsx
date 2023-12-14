import videojs from "video.js";
import "./SSMenuItem";
import VjsMenuButton from "../lib/VjsMenuButton";
import Player from "video.js/dist/types/player";
import MenuButton from "video.js/dist/types/menu/menu-button";
import Component from "video.js/dist/types/component";
import { controlBarClasses } from "./__styles__/getControlBarCss";
import { videoJsCommonClasses } from "./__styles__/getVjsSsSkinCss";
import MenuItem from "video.js/dist/types/menu/menu-item";

const QUALITY_LEVELS = ["1080p", "720p", "480p", "360p", "240p", "Auto"];

class SSQualityLevelsControl extends VjsMenuButton {
  selectedIndex_: number = QUALITY_LEVELS.length - 1;
  qualityLevelList_: any = null;

  constructor(player: Player, options: MenuButton["options_"]) {
    super(player, options);
    this.qualityLevelList_ = this.player_.qualityLevels();
    this.addClass(controlBarClasses["quality-levels-control"]);
    this.controlText("Quality Levels");
    this.addQualityLevels();
    this.addClickEventListenerForQualityLevelItems();
    this.menu.children_[this.selectedIndex_].selected(true);
  }

  addQualityLevels(): void {
    for (let index = 0; index < QUALITY_LEVELS.length; index++) {
      this.menu.addChild("SSMenuItem", {
        label: QUALITY_LEVELS[index],
      });
    }
  }

  addClickEventListenerForQualityLevelItems(): void {
    const qualityLevelItems = this.menu.children_ as Array<MenuItem>;

    for (let index = 0; index < qualityLevelItems.length; index++) {
      const levelItem = qualityLevelItems[index];

      levelItem.on("click", () => {
        if (this.selectedIndex_ !== -1) {
          qualityLevelItems[this.selectedIndex_].selected(false);
        }

        levelItem.selected(true);

        if (index === qualityLevelItems.length - 1) {
          this.enableQualityLevel(-1);
        } else {
          this.enableQualityLevel(qualityLevelItems.length - 1 - index);
        }

        this.selectedIndex_ = index;
        this.menu.removeClass(videoJsCommonClasses.exposed);
      });
    }
  }

  enableQualityLevel(index: number): void {
    for (let i = 0; i < this.qualityLevelList_.levels_.length; i++) {
      this.qualityLevelList_.levels_[i].enabled =
        i === index || index === -1 ? true : false;
    }

    this.qualityLevelList_.selectedIndex_ = index;
  }
}

videojs.registerComponent(
  "SSQualityLevelsControl",
  SSQualityLevelsControl as unknown as typeof Component
);
