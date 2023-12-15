import { Theme, css } from "@mui/material";
import {
  BIG_BUTTON_BACKGROUND_COLOR,
  BIG_BUTTON_BORDER_RADIUS_PCT,
} from "../../constants/cssConstants";
import generateVideoJSClassNames from "../../utils/generateVideoJSClassNames";

const { classNames } = generateVideoJSClassNames(["playing"]);

const getBigPlayButtonCss = (theme: Theme) => css`
  margin-top: 0;
  margin-left: 0;
  border: none;
  transition: none;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: ${BIG_BUTTON_BORDER_RADIUS_PCT}%;
  background-color: ${BIG_BUTTON_BACKGROUND_COLOR} !important;
  transition: opacity 0.25s linear;

  &::before {
    font-family: "ssicon";
    content: "\\e900";
    display: block;
    position: absolute;
    font-size: 40px;
    top: 50%;
    left: 58%;
    transform: translate(-58%, -50%);
    text-shadow: none;
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

  &${classNames.playing} {
    &::before {
      content: "\\e902";
      font-size: 20px;
      left: 55%;
    }
  }
`;

export default getBigPlayButtonCss;
