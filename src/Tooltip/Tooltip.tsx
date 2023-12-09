import {
  ClickAwayListener,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  useTheme,
} from "@mui/material";
import React from "react";
import getTooltipCss, { tooltipClasses } from "./getTooltipCss";
import { ClassNames, ClassNamesContent } from "@emotion/react";

export type TooltipProps = Omit<
  MuiTooltipProps,
  "disableFocusListener" | "disableHoverListener" | "disableTouchListener"
> & {
  /**
   * Specify the way that the tooltip is triggered.
   * @default hover
   */
  trigger?: "hover" | "click";

  /**
   * Specify if the popper should take full width of its container.
   * If `disablePortal` is set to `true`, the popper will take full width of the screen.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Specify `background-color` for the popper.
   * It supports the relevant theme colors for this component.
   * @default white
   */
  bgcolor?: "white";

  /**
   * Specify the arrow size when `arrow` is set to true.
   * @default small
   */
  arrowSize?: "small" | "medium";
};

const Tooltip = React.forwardRef(function Tooltip(
  props: TooltipProps,
  ref: React.Ref<HTMLDivElement>
) {
  const theme = useTheme();
  const { trigger, classes, fullWidth, bgcolor, arrowSize, onClose, ...rest } =
    props;
  const styled = getTooltipCss(theme, props);

  const renderTooltip = (
    css: ClassNamesContent["css"],
    cx: ClassNamesContent["cx"]
  ) => (
    <MuiTooltip
      ref={ref}
      classes={{
        ...classes,
        arrow: cx(
          tooltipClasses.arrow,
          css`
            ${styled.arrow}
          `,
          classes?.arrow
        ),
        popper: cx(
          css`
            ${styled.popper}
          `,
          classes?.popper
        ),
        tooltip: cx(
          css`
            ${styled.tooltip}
          `,
          classes?.tooltip
        ),
        tooltipPlacementBottom: cx(
          tooltipClasses.tooltipPlacementBottom,
          classes?.tooltipPlacementBottom
        ),
        tooltipPlacementLeft: cx(
          tooltipClasses.tooltipPlacementLeft,
          classes?.tooltipPlacementLeft
        ),
        tooltipPlacementRight: cx(
          tooltipClasses.tooltipPlacementRight,
          classes?.tooltipPlacementRight
        ),
        tooltipPlacementTop: cx(
          tooltipClasses.tooltipPlacementTop,
          classes?.tooltipPlacementTop
        ),
      }}
      disableFocusListener
      disableTouchListener
      disableHoverListener={trigger !== "hover"}
      {...rest}
    />
  );

  return (
    <ClassNames>
      {({ css, cx }) =>
        trigger === "hover" ? (
          renderTooltip(css, cx)
        ) : (
          <ClickAwayListener
            onClickAway={
              onClose as NonNullable<(event: MouseEvent | TouchEvent) => void>
            }
          >
            {renderTooltip(css, cx)}
          </ClickAwayListener>
        )
      }
    </ClassNames>
  );
});

Tooltip.defaultProps = {
  trigger: "hover",
  bgcolor: "white",
  arrowSize: "small",
};

export default Tooltip;
