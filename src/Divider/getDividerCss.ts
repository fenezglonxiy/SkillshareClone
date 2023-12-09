import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { DividerProps } from "./Divider";

const getColor = (theme: Theme, color: DividerProps["color"] = "white") => {
  return theme.palette[color];
};

const getSize = (size: DividerProps["size"]) => {
  const sizes: Record<NonNullable<typeof size>, string | undefined> = {
    auto: undefined,
    small: "29px",
    medium: "29px",
  };

  return sizes[size as NonNullable<typeof size>];
};

const getBorderSize = (size: DividerProps["size"]) => {
  const borderSizes: Record<NonNullable<typeof size>, string | undefined> = {
    auto: undefined,
    small: "4px",
    medium: "8px",
  };

  return borderSizes[size as NonNullable<typeof size>];
};

const getDividerSizeStyles = (props: DividerProps): SerializedStyles => css`
  ${props.orientation === "horizontal" &&
  `
    min-height: ${getSize(props.size)};
  `};

  ${props.orientation === "vertical" &&
  `
    min-width: ${getSize(props.size)};
  `}
`;

const getBorderSizeStyles = (props: DividerProps): SerializedStyles => {
  const size = getBorderSize(props.size);

  return css`
    ${props.orientation === "horizontal" &&
    `
      border-bottom-width: ${size};
      height: ${size};
    `};

    ${props.orientation === "vertical" &&
    `
      border-right-width: ${size};
      width: ${size};
    `}

    border-radius: 4px;
  `;
};

const getDividerCss = (
  theme: Theme,
  props: DividerProps
): SerializedStyles => css`
  ${theme.typography.captionBold};
  align-items: center;
  color: ${getColor(theme, props.color)};
  border-color: ${getColor(theme, props.color)};

  ${props.children === undefined
    ? getBorderSizeStyles(props)
    : getDividerSizeStyles(props)}

  &::before,
  &::after {
    border-color: ${getColor(theme, props.color)};
  }

  & span {
    padding: ${theme.spacing(0, 16)};
  }
`;

export default getDividerCss;
