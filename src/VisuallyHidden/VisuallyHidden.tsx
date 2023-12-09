/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";

type Props = React.ComponentPropsWithRef<"div">;

const VisuallyHidden = React.forwardRef(function VisuallyHidden(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      css={css`
        position: absolute !important;
        border: 0 !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        word-wrap: normal !important;
      `}
      {...props}
      ref={ref}
    ></div>
  );
});

export default VisuallyHidden;
