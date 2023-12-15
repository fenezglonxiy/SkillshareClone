import { Theme, css } from "@mui/material";
import { CLOSE_ICON_URL } from "../../constants/iconUrl";
import {
  BIG_BUTTON_BACKGROUND_COLOR,
  BIG_BUTTON_BORDER_RADIUS_PCT,
} from "../../constants/cssConstants";

const getCloseButtonCss = (theme: Theme) => css`
  width: 40px;
  height: 40px;
  top: ${theme.spacing(8)};
  right: ${theme.spacing(8)};
  border-radius: ${BIG_BUTTON_BORDER_RADIUS_PCT}%;
  background-color: ${BIG_BUTTON_BACKGROUND_COLOR};
  color: ${theme.palette.white};
  transition: opacity 0.25s linear;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${CLOSE_ICON_URL});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default getCloseButtonCss;
