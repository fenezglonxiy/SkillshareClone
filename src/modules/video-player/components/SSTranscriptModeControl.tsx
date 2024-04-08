import videojs from "video.js";
import VjsMenuButton from "../lib/VjsMenuButton";
import Component from "video.js/dist/types/component";
import Player from "video.js/dist/types/player";
import Button from "video.js/dist/types/button";
import { controlBarClasses } from "./__styles__/getControlBarCss";
import { videoJsCommonClasses } from "./__styles__/getVjsSsSkinCss";
import MenuItem from "video.js/dist/types/menu/menu-item";

const TRANSCRIPTS = ["Captions Off", "English", "Português"];

class SSTranscriptModeControl extends VjsMenuButton {
  selectedIndex_: number = -1;

  constructor(player: Player, options: Button["options_"]) {
    super(player, {
      ...options,
      controlText_: "Transcript Mode",
    });

    this.addClass(controlBarClasses["transcript-mode-control"]);
    this.addTranscripts();
    this.addClickEventListenerForTranscripts();
    this.menu.children_[0].trigger("click");
    // player.ready(function () {
    //   player.addRemoteTextTrack({
    //     src: "https://kot-politiken.s3-eu-west-1.amazonaws.com/2019/114_en.vtt.txt",
    //     kind: "captions",
    //     srclang: "en",
    //     label: "English",
    //   });
    // });
  }

  addTranscripts() {
    for (let index = 0; index < TRANSCRIPTS.length; index++) {
      this.menu.addChild("SSMenuItem", {
        label: TRANSCRIPTS[index],
      });
    }

    // const test = this.menu.children_[1] as MenuItem;

    // test.on("click", () => {
    //   this.player_.textTracks().tracks_[0].mode = "showing";
    // });
  }

  addClickEventListenerForTranscripts(): void {
    const transcripts = this.menu.children_ as Array<MenuItem>;

    for (let index = 0; index < transcripts.length; index++) {
      const transcript = transcripts[index];

      transcript.on("click", () => {
        if (this.selectedIndex_ !== -1) {
          transcripts[this.selectedIndex_].selected(false);
        }

        transcript.selected(true);
        this.selectedIndex_ = index;

        if (this.selectedIndex_ > 0) {
          this.addClass(controlBarClasses["transcript-on"]);
        } else {
          this.removeClass(controlBarClasses["transcript-on"]);
        }

        this.menu.removeClass(videoJsCommonClasses.exposed);
      });
    }
  }
}

videojs.registerComponent(
  "SSTranscriptModeControl",
  SSTranscriptModeControl as unknown as typeof Component
);
