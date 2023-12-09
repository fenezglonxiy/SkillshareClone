import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";
import { SelectProps } from "./Select";

export const { classes: selectClasses, classNames: selectClassNames } =
  generateEmotionClassNames("select", ["select", "icon"]);

const getStandardSelectStyles = (theme: Theme): SerializedStyles => css`
  ${theme.typography.body1Bold};
  padding: ${theme.spacing(16, 8)};
  background: initial;
`;

const getSelectCss = (
  theme: Theme,
  props: SelectProps
): SerializedStyles => css`
  background: unset !important;

  &::before {
    content: none;
  }

  ${selectClassNames.select} {
    height: auto !important;

    &:focus {
      background-color: unset;
    }
  }

  ${selectClassNames.icon} {
    & > path {
      fill: ${theme.palette.navy};
      fill-opacity: 1;
    }
  }

  ${props.variant === "standard" &&
  css`
    &::after {
      content: "" !important;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid ${theme.palette.concrete};
    }

    ${selectClassNames.select} {
      ${getStandardSelectStyles(theme)};
    }
  `}
`;

export default getSelectCss;
