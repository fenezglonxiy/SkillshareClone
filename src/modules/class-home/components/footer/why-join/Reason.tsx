/** @jsxImportSource @emotion/react */

import React from "react";
import Typography from "../../../../../Typography/Typography";
import getReasonCss from "./__styles__/getReasonCss";
import { Theme } from "@mui/material";

export type ReasonProps = {
  /**
   * Specifies the description.
   */
  description: string;

  /**
   * Specifies the reason's illustration via `background-image` CSS attribute.
   */
  bgImage?: string;

  /**
   * Specifies illustration's position via `background-position` CSS attribute.
   * Should only be used when `bgImage` prop is specified.
   * @default undefined
   */
  bgPosition?: "left top, right bottom" | "right top, left bottom";

  /**
   * The theme to use.
   */
  theme: Theme;
};

const Reason = (props: ReasonProps) => {
  const { theme, description, bgImage, bgPosition, ...rest } = props;
  const styled = getReasonCss(theme, props);

  return (
    <div {...rest} css={styled.root}>
      <div css={styled.reasonDetails}>
        <div css={styled.reasonIllustration}></div>
        <Typography variant="h2">{description}</Typography>
      </div>
    </div>
  );
};

export default Reason;
