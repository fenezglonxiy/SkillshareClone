/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import React from "react";
import useId from "../utils/useId";
import getSvgIconCss, { IconColor } from "./getSvgIconCss";

export type IconProps = {
  /**
   * The size of the icon.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The color of the icon.
   * @default undefine
   */
  color?: IconColor;

  className?: string;

  /**
   * Provides a human-readable title for the svg.
   */
  title?: string;

  /**
   * Ref that points to the SVG node of the icon.
   */
  ref?: React.Ref<SVGSVGElement>;

  /**
   * Longer form accessible description for the icon.
   */
  desc?: string;
} & React.SVGProps<SVGSVGElement>;

type Props = IconProps & {
  children: React.ReactNode;

  /**
   * Should the icon be flipped for right-to-left languages.
   * @default false
   */
  shouldFlipForRTL?: boolean;
};

const SvgIcon = (props: Props, ref: React.Ref<SVGSVGElement>) => {
  const theme = useTheme();
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;

  const {
    size = "medium",
    shouldFlipForRTL = false,
    title,
    children,
    color,
    desc,
    ...rest
  } = props;

  const sizes = {
    small: "16",
    medium: "20",
    large: "24",
  };

  const sizeInt = sizes[size];
  const viewBox = `0 0 ${sizeInt} ${sizeInt}`;
  const flipDirection = theme.direction === "rtl" && shouldFlipForRTL;
  const ariaLabelledBy = `${titleId} ${descId}`;

  return (
    <svg
      ref={ref}
      aria-hidden={title ? undefined : true}
      aria-labelledby={desc ? ariaLabelledBy : undefined}
      css={color ? getSvgIconCss(theme, color) : undefined}
      fill="none"
      focusable="false"
      height={sizeInt}
      role={title ? "img" : undefined}
      transform={flipDirection ? "scale(-1,1)" : undefined}
      viewBox={viewBox}
      width={sizeInt}
      {...rest}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      {desc ? <desc id={descId}>{desc}</desc> : null}

      {children}
    </svg>
  );
};

export default React.forwardRef(SvgIcon);
