/** @jsxImportSource @emotion/react */

import React, { ComponentPropsWithRef, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import getExpandableContainerCss from "./getExpandableContainerCss";
import SvgIcon from "../SvgIcon/SvgIcon";

export type ExpandableContainerProps = {
  /**
   * The content for the expandable container.
   */
  children: React.ReactNode;

  /**
   * Specifies the initial `max-height` in `px`.
   */
  maxHeight?: number;

  /**
   * Specifies an alternative label of `See more` label.
   * @default "See more"
   */
  label?: string;

  /**
   * Specifies the overlay's color.
   * @default "canvas"
   */
  overlayColor?: "white" | "canvas";
} & ComponentPropsWithRef<"div">;

const ExpandableContainer = React.forwardRef(
  (props: ExpandableContainerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, maxHeight, label, overlayColor, ...rest } = props;
    const theme = useTheme();
    const styled = getExpandableContainerCss(theme, props);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const expand = () => setIsExpanded(true);

    return (
      <div ref={ref} {...rest} aria-expanded={isExpanded} css={styled.root}>
        {children}

        {!isExpanded && (
          <div css={styled.overlay} onClick={expand}>
            {props.label}
            <SvgChevronDown />
          </div>
        )}
      </div>
    );
  }
);

ExpandableContainer.defaultProps = {
  label: "See more",
  overlayColor: "canvas",
};

const SvgChevronDown = () => {
  return (
    <SvgIcon size="small">
      <g stroke="#3722d3" fill="#3722d3">
        <path
          d="M8.477 11.123a.647.647 0 0 1-.954 0L2.106 5.33a.407.407 0 0 1 0-.549.346.346 0 0 1 .513 0L8 10.537l5.381-5.757a.346.346 0 0 1 .513 0 .407.407 0 0 1 0 .549l-5.417 5.795z"
          fill="#747777"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default ExpandableContainer;
