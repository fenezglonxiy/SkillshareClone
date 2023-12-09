/** @jsxImportSource @emotion/react */

import React from "react";
import { Link as MuiLink, useTheme } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { TypographyVariant } from "../Typography/Typography";
import getLinkCss from "./getLinkCss";

type LinkColor =
  | "inherit"
  | "wanderGreen"
  | "violet"
  | "navy"
  | "white"
  | "concrete"
  | "charcoal";

export type LinkProps = {
  /**
   * Specifies the link's destination.
   */
  href: string;

  /**
   * Controls the display style.
   * @default initial
   */
  display?: "initial" | "inline" | "inline-block" | "block";

  /**
   * The color of the link.
   * It supports the relevant theme colors for this component.
   * @default inherit
   */
  color?: LinkColor;

  /**
   * Applies the theme typography styles
   * @default body1
   */
  variant?: TypographyVariant;

  /**
   * Controls when the link should have an underline.
   * @default always
   */
  underline?: "always" | "hover" | "none";

  /**
   * The color of the underline when `underline` is `always`.
   *
   * The color of the hovered link when `underline` is `hover`.
   * @default props.color
   */
  underlineColor?: LinkColor;

  /**
   * Defines additional class names for the root element.
   */
  className?: string;

  /**
   * The content of the component.
   */
  children: React.ReactNode;
};

const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const theme = useTheme();
  const css = getLinkCss(
    theme,
    props.underlineColor === undefined
      ? { ...props, underlineColor: props.color }
      : props
  );
  const { color, variant, underline, underlineColor, href, ...rest } = props;

  return (
    <MuiLink
      ref={ref}
      css={css}
      component={ReactRouterLink}
      to={href}
      {...rest}
    />
  );
});

Link.defaultProps = {
  color: "inherit",
  variant: "body1",
  underline: "always",
};

export default Link;
