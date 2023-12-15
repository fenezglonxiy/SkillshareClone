import { css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateVideoJSClassNames from "../../utils/generateVideoJSClassNames";
import { videoJsCommonClassNames } from "./getVjsSsSkinCss";
import {
  CHECKMARK_ICON_URL,
  FIFTEEN_SECOND_REWIND_ICON_URL,
  FULLSCREEN_ICON_URL,
  MUTE_ICON_URL,
  PAUSE_ICON_URL,
  PLAY_ICON_URL,
  QUALITY_LEVELS_ICON_URL,
  TRANSCRIPT_MODE_ICON_URL,
  VOLUME_MAX_ICON_URL,
  VOLUME_MEDIUM_ICON_URL,
} from "../../constants/iconUrl";
import {
  CONTROL_BAR_HEIGHT,
  PROGRESS_BAR_HEIGHT,
} from "../../constants/cssConstants";

const { classes, classNames } = generateVideoJSClassNames([
  "progress-control",
  "progress-holder",
  "load-progress",
  "play-progress",
  "time-tooltip",
  "mouse-display",
  "play-control",
  "playing",
  "paused",
  "playback-rate",
  "playback-rate-value",
  "fifteen-second-rewind-control",
  "current-time",
  "time-divider",
  "duration",
  "spacer",
  "volume-panel",
  "mute-control",
  "vol-0",
  "vol-1",
  "vol-2",
  "vol-3",
  "volume-control",
  "volume-bar",
  "volume-level",
  "transcript-mode-control",
  "quality-levels-control",
  "fullscreen-control",
]);

export const controlBarClasses = classes;

export const controlBarClassNames = classNames;

const getProgressControlStyles = (theme: Theme) => css`
  position: absolute;
  left: 0;
  bottom: ${CONTROL_BAR_HEIGHT}px;
  width: 100%;
  height: auto;

  & ${classNames["progress-holder"]} {
    margin: 0;
    height: ${PROGRESS_BAR_HEIGHT}px;
    background-color: ${theme.palette.navy};

    & ${classNames["load-progress"]} {
      background-color: ${theme.palette.charcoal};
    }

    & ${classNames["mouse-display"]} {
      background-color: ${theme.palette.navy};
    }

    & ${classNames["play-progress"]} {
      background-color: ${theme.palette.wanderGreen};

      &::before {
        content: unset;
      }
    }

    & ${classNames["mouse-display"]}, & ${classNames["play-progress"]} {
      & ${classNames["time-tooltip"]} {
        display: none !important;
      }
    }
  }
`;

const getPlayControlStyles = (theme: Theme) => css`
  &${classNames.playing} {
    background-image: url(${PAUSE_ICON_URL});
  }

  &${classNames.paused} {
    background-image: url(${PLAY_ICON_URL});
  }
`;

const getPlaybackRateStyles = (theme: Theme) => css`
  & ${classNames["playback-rate-value"]} {
    ${theme.typography.body1Medium};
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & ${videoJsCommonClassNames.menu} {
    width: 150px;
    left: -55px;

    & ${videoJsCommonClassNames["menu-item"]} {
      margin: 0;
    }
  }

  &:hover {
    & ${videoJsCommonClassNames.menu} {
      display: block !important;
    }
  }
`;

const getFifteenSecondControlStyles = () => css`
  background-image: url(${FIFTEEN_SECOND_REWIND_ICON_URL});
`;

const getCurrentTimeDurationStyles = (theme: Theme) => css`
  ${classNames["current-time"]},
  ${classNames["time-divider"]},
  ${classNames.duration} {
    padding-block: ${theme.spacing(13.5)};
    ${theme.typography.body1Bold};
  }

  ${classNames["current-time"]},
  ${classNames.duration} {
    padding-inline: ${theme.spacing(12)};
  }

  ${classNames["time-divider"]} {
    padding-inline: 0;
    min-width: auto;
  }
`;

const getVolumePanelStyles = (theme: Theme) => css`
  align-items: center;
  transition: none !important;

  & * {
    transition: none !important;
  }

  & ${classNames["mute-control"]} {
    &${classNames["vol-0"]} {
      background-image: url(${MUTE_ICON_URL});
    }

    &${classNames["vol-1"]} {
      background-image: url(${VOLUME_MEDIUM_ICON_URL});
    }

    &${classNames["vol-2"]}, &${classNames["vol-3"]} {
      background-image: url(${VOLUME_MAX_ICON_URL});
    }
  }

  & ${classNames["volume-control"]} {
    height: 100% !important;

    & ${classNames["volume-bar"]} {
      margin: ${theme.spacing(22.5, 0)};
      background-color: rgba(57, 70, 73, 0.8);

      & ${classNames["volume-level"]} {
        background-color: ${theme.palette.wanderGreen};

        &::before {
          content: unset;
        }
      }
    }
  }
`;

const getTranscriptModeControlStyles = () => css`
  & button {
    background-image: url(${TRANSCRIPT_MODE_ICON_URL});
  }
`;

const getQualityLevelsControlStyles = () => css`
  & button {
    background-image: url(${QUALITY_LEVELS_ICON_URL});
  }
`;

const getFullscreenControlStyles = () => css`
  background-image: url(${FULLSCREEN_ICON_URL});
`;

const getMenuStyles = (theme: Theme) => css`
  display: none !important;
  border-top-color: unset;
  width: 130px;
  left: -45px;
  bottom: 100%;
  margin-bottom: ${PROGRESS_BAR_HEIGHT}px;

  &${videoJsCommonClassNames.exposed} {
    display: block !important;
  }

  & ${videoJsCommonClassNames["menu-content"]} {
    max-height: 15em;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);

    & ${videoJsCommonClassNames["menu-item"]} {
      ${getMenuItemStyles(theme)};
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;

const getMenuItemStyles = (theme: Theme) => css`
  position: relative;
  display: block;
  padding: ${theme.spacing(9, 28)};
  margin: ${theme.spacing(4, 0)};
  text-transform: unset;
  text-align: left;
  ${theme.typography.caption};

  &::before {
    position: absolute;
    top: 50%;
    left: ${theme.spacing(8)};
    transform: translate(0, -50%);
  }

  &[aria-checked="true"] {
    background-color: unset;
    color: unset;

    &::before {
      content: url(${CHECKMARK_ICON_URL});
    }
  }
`;

const getControlBarCss = (theme: Theme) => css`
  height: ${CONTROL_BAR_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: transform 0.4s ease 0s !important;
  visibility: visible !important;
  opacity: 1 !important;

  & button${videoJsCommonClassNames.button} {
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      opacity: 0.8;
    }
  }

  & ${videoJsCommonClassNames.menu} {
    ${getMenuStyles(theme)};
  }

  & ${videoJsCommonClassNames["icon-placeholder"]} {
    &::before {
      content: unset !important;
    }
  }

  & ${classNames["progress-control"]} {
    ${getProgressControlStyles(theme)};
  }

  & ${classNames["play-control"]} {
    ${getPlayControlStyles(theme)};
    order: 0;
    margin-left: ${theme.spacing(12)};
  }

  & ${classNames["playback-rate"]} {
    ${getPlaybackRateStyles(theme)};
  }

  & ${classNames["fifteen-second-rewind-control"]} {
    ${getFifteenSecondControlStyles()};
  }

  ${getCurrentTimeDurationStyles(theme)};

  & ${classNames.spacer} {
    flex-basis: 100%;
  }

  & ${classNames["volume-panel"]} {
    ${getVolumePanelStyles(theme)};
  }

  & ${classNames["transcript-mode-control"]} {
    ${getTranscriptModeControlStyles()};
  }

  & ${classNames["quality-levels-control"]} {
    ${getQualityLevelsControlStyles()};
  }

  & ${classNames["fullscreen-control"]} {
    ${getFullscreenControlStyles()};
    margin-right: ${theme.spacing(12)};
  }
`;

export default getControlBarCss;
