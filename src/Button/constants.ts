import { Theme } from "@mui/material";
import { darken, parseToRgb, rgba } from "polished";
import { ButtonProps } from "./Button";

export const LIGHT_SHADE_AMOUNT = 0.05;
export const DARK_SHADE_AMOUNT = 0.151;
export const DEFAULT_ALPHA = 0.8;

export type ButtonColorSet = {
  primaryColor: string;
  textColor: string;
  hoverFillColor: string;
};

const getDefaultHoverFillColor = (
  primaryColor: string,
  hoverStyle: ButtonProps["hoverStyle"]
) => {
  const rgb = parseToRgb(primaryColor);
  let hoverFillColor = "";

  switch (hoverStyle) {
    case "light":
      hoverFillColor = darken(LIGHT_SHADE_AMOUNT, primaryColor);
      break;
    case "dark":
      hoverFillColor = rgba(rgb.red, rgb.green, rgb.blue, DEFAULT_ALPHA);
      break;
    case "darker":
      hoverFillColor = darken(DARK_SHADE_AMOUNT, primaryColor);
      break;
  }

  return hoverFillColor;
};

const getOutlinedHoverFillColor = (
  theme: Theme,
  primaryColor: string,
  hoverStyle: ButtonProps["hoverStyle"]
) => {
  if (hoverStyle === undefined) {
    return primaryColor;
  }

  const rgb = parseToRgb(primaryColor);
  let hoverFillColor = "";

  switch (hoverStyle) {
    case "light":
      hoverFillColor = darken(LIGHT_SHADE_AMOUNT, primaryColor);
      break;
    case "dark":
      hoverFillColor = theme.palette.concrete;
      break;
    case "darker":
      hoverFillColor = rgba(rgb.red, rgb.green, rgb.blue, 0.04);
      break;
  }

  return hoverFillColor;
};

const getHoverFillColor = (
  theme: Theme,
  props: ButtonProps,
  primaryColor: string
) => {
  if (props.hoverStyle === undefined) {
    return primaryColor;
  }

  let hoverFillColor = "";

  switch (props.variant) {
    case "outlined":
      hoverFillColor = getOutlinedHoverFillColor(
        theme,
        primaryColor,
        props.hoverStyle
      );
      break;
    default:
      hoverFillColor = getDefaultHoverFillColor(primaryColor, props.hoverStyle);
      break;
  }

  return hoverFillColor;
};

export const getColorSet = (
  theme: Theme,
  props: ButtonProps
): ButtonColorSet => {
  const colors: Record<
    NonNullable<ButtonProps["color"]>,
    Omit<ButtonColorSet, "hoverFillColor">
  > = {
    canvas: {
      primaryColor: theme.palette.canvas,
      textColor: theme.palette.navy,
    },

    wanderGreen: {
      primaryColor: theme.palette.wanderGreen,
      textColor: theme.palette.navy,
    },

    navy: {
      primaryColor: theme.palette.navy,
      textColor: theme.palette.white,
    },

    charcoal: {
      primaryColor: theme.palette.charcoal,
      textColor: "",
    },

    white: {
      primaryColor: theme.palette.white,
      textColor: theme.palette.navy,
    },

    yellow: {
      primaryColor: theme.palette.yellow,
      textColor: theme.palette.navy,
    },

    red: {
      primaryColor: theme.palette.red,
      textColor: "",
    },

    tag: {
      primaryColor: theme.palette.concrete,
      textColor: theme.palette.charcoal,
    },

    violet: {
      primaryColor: theme.palette.violet,
      textColor: theme.palette.white,
    },

    blue: {
      primaryColor: theme.palette.blue,
      textColor: theme.palette.navy,
    },
  };

  const partialColorSet =
    colors[props.color as NonNullable<ButtonProps["color"]>];

  return {
    ...partialColorSet,
    hoverFillColor: getHoverFillColor(
      theme,
      props,
      partialColorSet.primaryColor
    ),
  };
};
