import { Theme, css } from "@mui/material";
import generateVideoJSClassNames from "../../utils/generateVideoJSClassNames";
import {
  CONTROL_BAR_HEIGHT,
  PROGRESS_BAR_HEIGHT,
} from "../../constants/cssConstants";
import { MINIMIZE_ICON_URL } from "../../constants/iconUrl";
import getCenterBigPlayButtonCss from "./getCenterBigPlayButtonCss";
import getControlBarCss, { controlBarClassNames } from "./getControlBarCss";

const { classes, classNames } = generateVideoJSClassNames([
  "ss-skin",
  "user-inactive",
  "user-active",
  "fullscreen",
  "layout-medium",
  "layout-large",
  "layout-x-large",
  "layout-huge",
  "big-play-button",
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

const getSSVideoPlayerCss = (theme: Theme) => css`
  overflow: hidden;

  ${classNames["ss-skin"]} {
    ${classNames["big-play-button"]} {
      ${getCenterBigPlayButtonCss(theme)}
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

    &${classNames["layout-medium"]},
      &${classNames["layout-large"]},
      &${classNames["layout-x-large"]},
      &${classNames["layout-huge"]} {
      ${controlBarClassNames["current-time"]},
      ${controlBarClassNames["time-divider"]},
      ${controlBarClassNames["duration"]} {
        display: block;
      }
    }
  }
`;

export default getSSVideoPlayerCss;
