import { Theme, css } from "@mui/material";
import {
  MAIN_COLUMN_AUTHENTICATION_FORM_WRAPPER_HEIGHT,
  MAIN_COLUMN_CONTAINER_HEIGHT,
  MAIN_COLUMN_WIDTH,
  SIDE_COLUMN_HEIGHT,
} from "../constants";
import { SerializedStyles } from "@emotion/react";

const getRootStyles = (theme: Theme) => css`
  background: ${theme.palette.navy};
`;

const getContainerStyles = (theme: Theme) => css`
  overflow: hidden;
  display: grid;
  grid-template-columns: auto ${MAIN_COLUMN_WIDTH}px auto;
  column-gap: ${theme.spacing(8)};
`;

const getScribbleStyles = (theme: Theme) => css`
  position: absolute;
  z-index: 100;

  svg {
    max-width: none;
  }

  ${theme.breakpoints.up("md")} {
    display: none;
  }
`;

const getLeftScribbleStyles = (theme: Theme) => css`
  ${getScribbleStyles(theme)};
  bottom: -51.25%;
  right: -235px;
`;

const getRightScribbleStyles = (theme: Theme) => css`
  ${getScribbleStyles(theme)};
  top: 14.3%;
  left: -10px;
`;

const getMainColumnStyles = () => css`
  display: grid;
  grid-template-rows: ${MAIN_COLUMN_CONTAINER_HEIGHT}px ${MAIN_COLUMN_AUTHENTICATION_FORM_WRAPPER_HEIGHT}px ${MAIN_COLUMN_CONTAINER_HEIGHT}px;
  row-gap: 8px;
`;

const getMainColumnContainerStyles = () => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${MAIN_COLUMN_CONTAINER_HEIGHT}px;
  column-gap: 8px;
`;

const getSideColumnStyles = () => css`
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, ${SIDE_COLUMN_HEIGHT / 2}px);
  row-gap: 8px;
`;

const getImageWrapperStyles = () => css`
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type DesktopHomeHeroStyledComponents =
  | "root"
  | "container"
  | "leftScribble"
  | "rightScribble"
  | "mainCol"
  | "mainColContainer"
  | "sideCol"
  | "imgWrapper";

const getDesktopHomeHeroCss = (
  theme: Theme
): Record<DesktopHomeHeroStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
  leftScribble: getLeftScribbleStyles(theme),
  rightScribble: getRightScribbleStyles(theme),
  mainCol: getMainColumnStyles(),
  mainColContainer: getMainColumnContainerStyles(),
  sideCol: getSideColumnStyles(),
  imgWrapper: getImageWrapperStyles(),
});

export default getDesktopHomeHeroCss;
