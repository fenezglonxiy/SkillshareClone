import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

export type IconColor = "default" | "invert";

const getIconColor = (theme: Theme, color: IconColor): string | undefined => {
  const colorMap: Record<IconColor, string | undefined> = {
    default: theme.palette.black,
    invert: theme.palette.white,
  };

  return colorMap[color];
};

const getSvgIconCss = (theme: Theme, color: IconColor): SerializedStyles => css`
  color: ${getIconColor(theme, color)};
`;

export default getSvgIconCss;
