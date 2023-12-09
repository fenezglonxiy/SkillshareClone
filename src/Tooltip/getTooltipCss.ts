import { Theme, css } from "@mui/material";
import { TooltipProps } from "./Tooltip";
import generateEmotionClassNames from "../utils/generateEmotionClassNames";
import { SerializedStyles } from "@emotion/react";

export const { classes: tooltipClasses, classNames: tooltipClassNames } =
  generateEmotionClassNames("tooltip", [
    "arrow",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
  ]);

const arrowSizeMap = {
  small: {
    width: "1em",
    height: "0.71em",
    margin: "-0.71em",
  },
  medium: {
    width: "1.75em",
    height: "1.2425em",
    margin: "-1.2425em",
  },
};

const getArrowSizeStyles = (
  arrowSize: TooltipProps["arrowSize"] = "small"
) => css`
  width: ${arrowSizeMap[arrowSize].width};
  height: ${arrowSizeMap[arrowSize].height};
`;

const getArrowPlacementStyles = (
  arrowSize: TooltipProps["arrowSize"] = "small"
) => css`
  &${tooltipClassNames.tooltipPlacementLeft} ${tooltipClassNames.arrow} {
    margin-right: ${arrowSizeMap[arrowSize].margin};
  }

  &${tooltipClassNames.tooltipPlacementRight} ${tooltipClassNames.arrow} {
    margin-left: ${arrowSizeMap[arrowSize].margin};
  }

  &${tooltipClassNames.tooltipPlacementTop} ${tooltipClassNames.arrow} {
    margin-bottom: ${arrowSizeMap[arrowSize].margin};
  }

  &${tooltipClassNames.tooltipPlacementBottom} ${tooltipClassNames.arrow} {
    margin-top: ${arrowSizeMap[arrowSize].margin};
  }
`;

const getTooltipStyles = (theme: Theme, props: TooltipProps) => css`
  max-width: none;
  background-color: ${theme.palette[
    props.bgcolor as NonNullable<TooltipProps["bgcolor"]>
  ]};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px 0;

  ${getArrowPlacementStyles(props.arrowSize)};
`;

const getArrowStyles = (theme: Theme, props: TooltipProps) => css`
  color: ${theme.palette[
    props.bgcolor as NonNullable<TooltipProps["bgcolor"]>
  ]};
  ${getArrowSizeStyles(props.arrowSize)};
`;

const getPopperStyles = (props: TooltipProps) => css`
  inset: ${props.fullWidth ? "0 0 auto 0 !important" : undefined};
`;

type TooltipStyledComponents = "arrow" | "popper" | "tooltip";

const getTooltipCss = (
  theme: Theme,
  props: TooltipProps
): Record<TooltipStyledComponents, SerializedStyles> => ({
  arrow: getArrowStyles(theme, props),
  popper: getPopperStyles(props),
  tooltip: getTooltipStyles(theme, props),
});

export default getTooltipCss;
