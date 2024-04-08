import { Theme, css } from "@mui/material";
import generateVideoJSClassNames from "../../utils/generateVideoJSClassNames";
import {
  CONTROL_BAR_HEIGHT,
  PIP_MODE_CONTROL_BAR_HEIGHT,
  PROGRESS_BAR_HEIGHT,
  MINIMIZE_ICON_URL,
} from "../../constants/cssConstants";
import getBigPlayButtonCss from "./getBigPlayButtonCss";
import getControlBarCss, { controlBarClassNames } from "./getControlBarCss";
import getCloseButtonCss from "./getCloseButtonCss";

const { classes, classNames } = generateVideoJSClassNames([
  "ss-skin",
  "pip-mode",
  "user-inactive",
  "user-active",
  "fullscreen",
  "layout-medium",
  "layout-large",
  "layout-x-large",
  "layout-huge",
  "big-play-button",
  "close-button",
  "control-bar",
]);

export const vjsSsSkinClasses = classes;

export const {
  classes: videoJsCommonClasses,
  classNames: videoJsCommonClassNames,
} = generateVideoJSClassNames([
  "button",
  "menu",
  "menu-content",
  "menu-item",
  "icon-placeholder",
  "control-text",
  "exposed",
]);

const getVjsSsSkinCss = (theme: Theme) => css`
  ${classNames["ss-skin"]} {
    overflow: hidden;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;

    &${classNames["layout-large"]},
      &${classNames["layout-x-large"]},
      &${classNames["layout-huge"]} {
      ${controlBarClassNames["current-time"]},
      ${controlBarClassNames["time-divider"]},
      ${controlBarClassNames["duration"]} {
        display: block;
      }
    }

    ${controlBarClassNames["playback-rate"]},
    ${controlBarClassNames["volume-control"]} {
      display: block;
    }

    ${classNames["big-play-button"]} {
      ${getBigPlayButtonCss(theme)}
    }

    ${classNames["close-button"]} {
      ${getCloseButtonCss(theme)}
      display: none;
    }

    ${classNames["control-bar"]} {
      ${getControlBarCss(theme)}
    }

    &${classNames["user-inactive"]} {
      ${classNames["control-bar"]} {
        transform: translateY(${CONTROL_BAR_HEIGHT + PROGRESS_BAR_HEIGHT}px);
      }
    }

    &${classNames["user-active"]} {
      ${classNames["control-bar"]} {
        transform: translateY(0);
      }
    }

    &${classNames.fullscreen} {
      ${classNames["control-bar"]} {
        ${controlBarClassNames["fullscreen-control"]} {
          background-image: url(${MINIMIZE_ICON_URL});
        }
      }
    }
  }

  ${classNames["pip-mode"]} {
    position: fixed;
    width: 300px;
    aspect-ratio: 2 / 1;
    bottom: ${theme.spacing(14)};
    right: ${theme.spacing(14)};
    z-index: ${theme.zIndex.mobileStepper};
    border-radius: 8px;

    ${classNames["big-play-button"]} {
      display: block;
      width: 48px;
      height: 48px;

      &::before {
        font-size: 24px;
      }
    }

    ${classNames["close-button"]} {
      display: block;
    }

    ${classNames["control-bar"]} {
      height: ${PIP_MODE_CONTROL_BAR_HEIGHT}px;

      & > *:not(${controlBarClassNames["progress-control"]}) {
        display: none;
      }

      ${controlBarClassNames["progress-control"]} {
        display: block;
        bottom: ${PIP_MODE_CONTROL_BAR_HEIGHT}px;
      }
    }

    &${classNames["user-inactive"]} {
      ${classNames["big-play-button"]} {
        opacity: 0;
      }
      ${classNames["close-button"]} {
        opacity: 0;
      }

      ${classNames["control-bar"]} {
        transform: translateY(
          ${PIP_MODE_CONTROL_BAR_HEIGHT + CONTROL_BAR_HEIGHT}
        );
      }
    }

    &${classNames["user-active"]} {
      ${classNames["big-play-button"]} {
        opacity: 1;
      }

      ${classNames["close-button"]} {
        opacity: 1;
      }

      ${classNames["control-bar"]} {
        display: flex;
      }
    }
  }
`;

export default getVjsSsSkinCss;
