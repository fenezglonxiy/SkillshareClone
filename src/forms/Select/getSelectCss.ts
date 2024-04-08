import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";
import { SelectProps } from "./Select";

export const { classes: selectClasses, classNames: selectClassNames } =
  generateEmotionClassNames("select", ["select", "icon"]);

const getSelectVariantStyles = (
  theme: Theme,
  variant: NonNullable<SelectProps["variant"]>
): SerializedStyles => {
  const variants: Record<
    NonNullable<SelectProps["variant"]>,
    SerializedStyles
  > = {
    outlined: getOutlinedSelectStyles(theme),
    standard: getStandardSelectStyles(theme),
    filled: getFilledSelectStyles(theme),
  };

  return variants[variant];
};

const getOutlinedSelectStyles = (theme: Theme): SerializedStyles => css``;

const getStandardSelectStyles = (theme: Theme): SerializedStyles => css`
  &::after {
    content: "" !important;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid ${theme.palette.concrete};
  }

  ${selectClassNames.select} {
    ${theme.typography.body1Bold};
    padding: ${theme.spacing(16, 8)};
    background: initial;
  }
`;

const getFilledSelectStyles = (theme: Theme): SerializedStyles => css`
  background: ${theme.palette.white} !important;

  ${selectClassNames.select} {
    ${theme.typography.body2Bold};
    padding: ${theme.spacing(8, 16)};
  }
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
    top: calc(50% - 0.6em);

    & > path {
      fill: ${theme.palette.navy};
      fill-opacity: 1;
    }
  }

  ${getSelectVariantStyles(
    theme,
    props.variant as NonNullable<SelectProps["variant"]>
  )}
`;

export default getSelectCss;
