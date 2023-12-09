import { Theme, css } from "@mui/material";
import generateVideoJSClassNames from "../utils/generateVideoJSClassNames";
import ICON_URL from "../constants/iconUrl";

const { classes, classNames } = generateVideoJSClassNames([
  "has-started",
  "big-play-button",
  "progress-control",
  "progress-holder",
  "load-progress",
  "play-progress",
  "time-tooltip",
  "mouse-display",
  "control-bar",
  "play-control",
  "playing",
  "paused",
  "fifteen-second-rewind-control",
  "volume-panel",
  "mute-control",
  "vol-0",
  "vol-1",
  "vol-2",
  "vol-3",
  "volume-control",
  "volume-bar",
  "volume-level",
  "quality-levels-control",
  "fullscreen-control",
  "button",
  "icon-placeholder",
  "control-text",
]);

export const videoJsClasses = classes;

const getCenterBigPlayButtonStyles = (theme: Theme) => css`
  margin-top: 0;
  margin-left: 0;
  border: none;
  transition: none;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6) !important;

  &::before {
    font-family: "ssicon";
    content: "";
    display: block;
    position: absolute;
    font-size: 40px;
    top: 50%;
    left: 58%;
    transform: translate(-58%, -50%);
  }

  &:hover,
  &:focus {
    background-color: ${theme.palette.navy} !important;
  }

  &:focus {
    &::before {
      color: ${theme.palette.wanderGreen};
    }
  }
`;

const getControlBarStyles = (theme: Theme) => css`
  height: 48px;
  background-color: rgba(0, 0, 0, 0.8);

  & ${classNames["progress-control"]} {
    ${getProgressControlStyles(theme)};
  }

  & ${classNames["play-control"]} {
    ${getPlayControlStyles(theme)};
  }

  & ${classNames["fifteen-second-rewind-control"]} {
    ${getFifteenSecondControlStyles()};
  }

  & ${classNames["volume-panel"]} {
    ${getVolumePanelStyles(theme)};
  }

  & ${classNames["quality-levels-control"]} {
    ${getQualityLevelsControlStyles()};
  }

  & ${classNames["fullscreen-control"]} {
    ${getFullscreenControlStyles()};
  }

  & ${classNames.button} {
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      opacity: 0.8;
    }
  }

  & ${classNames["icon-placeholder"]} {
    &::before {
      content: unset !important;
    }
  }
`;

const getProgressControlStyles = (theme: Theme) => css`
  width: 100%;
  height: auto;

  & ${classNames["progress-holder"]} {
    margin: 0;
    height: 10px;
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
    background-image: url(${ICON_URL.pause});
  }

  &${classNames.paused} {
    background-image: url(${ICON_URL.play});
  }
`;

const getFifteenSecondControlStyles = () => css`
  background-image: url(${ICON_URL["fifteen-second-rewind"]});
`;

const getVolumePanelStyles = (theme: Theme) => css`
  align-items: center;

  & ${classNames["mute-control"]} {
    &${classNames["vol-0"]} {
      background-image: url(${ICON_URL.mute});
    }

    &${classNames["vol-1"]} {
      background-image: url(${ICON_URL["volume-medium"]});
    }

    &${classNames["vol-2"]}, &${classNames["vol-3"]} {
      background-image: url(${ICON_URL["volume-max"]});
    }
  }

  & ${classNames["volume-control"]} {
    height: 100% !important;
    transition: none !important;

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

const getQualityLevelsControlStyles = () => css`
  background-image: url(${ICON_URL["quality-levels"]});
`;

const getFullscreenControlStyles = () => css`
  background-image: url(${ICON_URL.fullscreen});
`;

const getVideoPlayerCss = (theme: Theme) => css`
  height: 100%;

  & ${classNames["big-play-button"]} {
    ${getCenterBigPlayButtonStyles(theme)}
  }

  & ${classNames["control-bar"]} {
    ${getControlBarStyles(theme)}
  }

  & ${classNames["progress-control"]} {
    position: absolute;
    left: 0;
    bottom: 48px;
  }
`;

export default getVideoPlayerCss;
