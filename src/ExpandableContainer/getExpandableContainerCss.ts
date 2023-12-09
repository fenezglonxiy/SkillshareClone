import { Theme, css } from "@mui/material";
import { ExpandableContainerProps } from "./ExpandableContainer";
import { SerializedStyles } from "@emotion/react";

const getRootStyles = (props: ExpandableContainerProps) => css`
  position: relative;

  &[aria-expanded="false"] {
    overflow-y: hidden;
    ${props.maxHeight !== undefined && `max-height: ${props.maxHeight}px`}
  }

  &[aria-expanded="true"] {
    max-height: none;
  }
`;

// linear-gradient(to bottom,rgba(255,255,255,0),#fff 74px)

const getOverlayStyles = (theme: Theme, props: ExpandableContainerProps) => css`
  position: absolute;
  inset: auto 0 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${theme.spacing(2)};
  ${theme.typography.body2Bold};
  color: ${theme.palette.violet};
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    ${theme.palette[
        props.overlayColor as NonNullable<
          ExpandableContainerProps["overlayColor"]
        >
      ]}
      74px
  );
  pointer-events: auto;
  cursor: pointer;
`;

type ExpandableContainerStyledComponents = "root" | "overlay";

const getExpandableContainerCss = (
  theme: Theme,
  props: ExpandableContainerProps
): Record<ExpandableContainerStyledComponents, SerializedStyles> => ({
  root: getRootStyles(props),
  overlay: getOverlayStyles(theme, props),
});

export default getExpandableContainerCss;
