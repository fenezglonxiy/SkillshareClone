/** @jsxImportSource @emotion/react */

import {
  TypographyVariants,
  useTheme,
  Typography as MuiTypography,
} from "@mui/material";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import React from "react";
import { FontStyle as MuiFontStyle } from "@mui/material/styles/createTypography";
import getTypographyCss from "./getTypographyCss";

type FontStyle = keyof MuiFontStyle;

export type TypographyVariant = keyof Omit<
  TypographyVariants,
  "pxToRem" | FontStyle
>;

export const TypographyVariantMapping: Record<
  TypographyVariant,
  React.ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body1Medium: "p",
  body1Bold: "p",
  body2: "p",
  body2Medium: "p",
  body2Bold: "p",
  inherit: "p",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  caption: "p",
  captionMedium: "p",
  captionBold: "p",
  button: "p",
  overline: "p",
  label: "p",
  title: "p",
  subtitle: "p",
  smallNavLink: "span",
  largeNavLink: "span",
};

type BaseProps = {
  /**
   * Set the text-align on the component.
   * @default inherit
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /**
   * Controls the display type.
   * @default initial
   */
  display?: "initial" | "block" | "inline";

  /**
   * Applies the theme typography styles.
   * @default body1
   */
  variant?: TypographyVariant;

  /**
   * The color for the text. It supports the relevant theme colors for this component.
   * @default inherit
   */
  color?:
    | "wanderGreen"
    | "navy"
    | "violet"
    | "charcoal"
    | "darkCharcoal"
    | "white"
    | "supportText"
    | "success"
    | "error"
    | "black"
    | "concrete"
    | "canvas"
    | "inherit";
};

export interface TypographyTypeMap<D extends React.ElementType = "p"> {
  props: BaseProps;
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap["defaultComponent"]
> = OverrideProps<TypographyTypeMap<D>, D> & { component?: React.ElementType };

const Typography: OverridableComponent<TypographyTypeMap> = React.forwardRef(
  function Typography(props: TypographyProps, ref: React.Ref<HTMLSpanElement>) {
    const theme = useTheme();
    const css = getTypographyCss(theme, props);
    const { color, variant, component, ...rest } = props;

    return (
      <MuiTypography
        ref={ref}
        component={
          component ||
          TypographyVariantMapping[variant as NonNullable<TypographyVariant>]
        }
        css={css}
        {...rest}
      />
    );
  }
);

export default Typography;
