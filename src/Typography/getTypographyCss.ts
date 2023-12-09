import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { TypographyProps } from "./Typography";

const getColor = (
  theme: Theme,
  typographyColor: TypographyProps["color"] = "inherit"
): string => {
  const colors: Record<NonNullable<TypographyProps["color"]>, string> = {
    inherit: "inherit",
    wanderGreen: theme.palette.wanderGreen,
    white: theme.palette.white,
    navy: theme.palette.navy,
    violet: theme.palette.violet,
    darkCharcoal: theme.palette.darkCharcoal,
    charcoal: theme.palette.charcoal,
    supportText: theme.palette.charcoal,
    success: theme.palette.wanderGreen,
    error: theme.palette.red,
    black: theme.palette.black,
    concrete: theme.palette.concrete,
    canvas: theme.palette.canvas,
  };

  return colors[typographyColor];
};

const getTypographyCss = (
  theme: Theme,
  props: TypographyProps
): SerializedStyles => css`
  color: ${getColor(theme, props.color)};
  text-align: ${props.align};
  ${theme.typography[props.variant as NonNullable<TypographyProps["variant"]>]}
`;

export default getTypographyCss;
