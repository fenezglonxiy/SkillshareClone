/** @jsxImportSource @emotion/react */

import { IconProps, Button as MuiButton, useTheme } from "@mui/material";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import getButtonCss, { classes } from "./getButtonCss";
import React from "react";
import Link from "../Link/Link";

type BaseProps = {
  /**
   * Render an icon next to the button text.
   */
  icon?: React.ReactElement<IconProps>;

  /**
   * Specify positioning of the icon relative to the button text.
   * @default start
   */
  iconPosition?: "start" | "end";

  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Define whether button should be full-width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The size of the button.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The variant to use.
   * @default contained
   */
  variant?: "contained" | "outlined" | "text" | "link" | "ghostLink" | "ghost";

  /**
   * The color for the button.
   * It supports the relevant theme colors for this component.
   * @default wanderGreen
   */
  color?:
    | "wanderGreen"
    | "navy"
    | "charcoal"
    | "white"
    | "yellow"
    | "red"
    | "tag"
    | "violet"
    | "canvas"
    | "blue";

  /**
   * The hover style for the button.
   * @default light
   */
  hoverStyle?: "light" | "dark" | "darker";

  /**
   * The URL to link to when the button is clicked.
   * If defined, an a element will be used as the root node.
   */
  href?: string;

  /**
   * If `true`, the left and right padding will be removed.
   */
  disableGutters?: boolean;

  /**
   * Define text to display in the button.
   */
  children: React.ReactNode;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: BaseProps;
  defaultComponent: D;
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap["defaultComponent"]
> = OverrideProps<ButtonTypeMap<D>, D> & { component?: React.ElementType };

const defaultProps: Pick<
  BaseProps,
  "variant" | "size" | "color" | "iconPosition" | "hoverStyle"
> = {
  variant: "contained",
  size: "medium",
  color: "wanderGreen",
  iconPosition: "start",
  hoverStyle: "light",
};

const Button: OverridableComponent<ButtonTypeMap> = React.forwardRef(
  function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
    const theme = useTheme();
    props = { ...defaultProps, ...props };
    const css = getButtonCss(theme, props);
    const {
      icon,
      iconPosition,
      size,
      variant,
      color,
      hoverStyle,
      disableGutters,
      ...rest
    } = props;

    return (
      <MuiButton
        ref={ref}
        classes={classes}
        startIcon={icon && iconPosition === "start" ? icon : undefined}
        endIcon={icon && iconPosition === "end" ? icon : undefined}
        css={css}
        LinkComponent={Link}
        disableElevation
        disableRipple
        {...rest}
      />
    );
  }
);

export default Button;
