/** @jsxImportSource @emotion/react */

import { useTheme, Divider as MuiDivider } from "@mui/material";
import React, { ComponentPropsWithRef } from "react";
import getDividerCss from "./getDividerCss";

export type DividerProps = {
  /**
   * Define the color of the divider.
   * @default white
   */
  color?: "white" | "navy" | "violet" | "wanderGreen" | "concrete";

  /**
   * Define the divider orientation.
   * @default horizontal
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Define the size of the divider.
   * @default auto
   */
  size?: "auto" | "small" | "medium";
} & ComponentPropsWithRef<"hr">;

const Divider = React.forwardRef(function (
  props: DividerProps,
  ref: React.Ref<HTMLHRElement>
) {
  const theme = useTheme();
  const { "aria-hidden": ariaHidden = true, color, ...rest } = props;
  const css = getDividerCss(theme, props);
  const flexItem = props.orientation === "vertical";

  return (
    <MuiDivider
      ref={ref}
      aria-hidden={ariaHidden}
      css={css}
      flexItem={flexItem}
      {...rest}
    />
  );
});

Divider.defaultProps = {
  orientation: "horizontal",
  size: "auto",
};

export default Divider;
