import { Theme } from "@mui/material";
import { ButtonProps } from "./Button";
import { SerializedStyles, css } from "@emotion/react";
import generateEmotionClassNames from "../utils/generateEmotionClassNames";
import { getColorSet } from "./constants";

export const { classes, classNames } = generateEmotionClassNames("button", [
  "label",
  "endIcon",
  "startIcon",
  "disabled",
  "focusVisible",
]);

const getVariantStyles = (theme: Theme, props: ButtonProps) => {
  const colorSet = getColorSet(theme, props);

  const variants: Record<
    NonNullable<ButtonProps["variant"]>,
    SerializedStyles
  > = {
    outlined: css`
      color: ${theme.palette.navy};
      border: 1px solid ${theme.palette.charcoal};
      background-color: ${theme.palette.white};

      &:hover,
      &:focus {
        background-color: ${colorSet.hoverFillColor};
      }
    `,

    contained: css`
      font-size: 18px;
      color: ${colorSet.textColor};
      background-color: ${colorSet.primaryColor};

      &:hover,
      &:focus {
        background-color: ${colorSet.hoverFillColor};
      }
    `,

    text: css`
      color: ${colorSet.textColor};

      &:hover,
      &:focus {
        background-color: ${colorSet.hoverFillColor};
      }
    `,

    link: css`
      min-height: auto;
      padding: 1px 3px;
      color: ${colorSet.primaryColor};

      &:hover,
      &:focus {
        text-decoration: underline;
        text-decoration-color: ${colorSet.primaryColor};
      }
    `,

    ghostLink: css`
      color: ${theme.palette.white};
      transition: none;

      &:hover,
      &:focus {
        background-color: unset;
        color: ${theme.palette.wanderGreen};
      }
    `,

    ghost: css`
      color: ${colorSet.primaryColor};
      border: 1px solid ${colorSet.primaryColor};
      background-color: initial;

      &:hover,
      &:focus {
        background-color: ${colorSet.primaryColor};
        color: ${colorSet.textColor};
      }
    `,
  };

  return variants[props.variant as NonNullable<ButtonProps["variant"]>];
};

export const sizes = {
  small: (theme: Theme, props: ButtonProps) => css`
    font-size: 13px;
    min-height: 28px;
    min-width: auto;
    padding: ${props.variant === "ghost"
      ? theme.spacing(0, 20)
      : theme.spacing(6, 16)};
  `,

  medium: (theme: Theme, props: ButtonProps) => css`
    font-size: ${props.variant === "ghost" ? "13px" : "16px"};
    min-height: ${props.variant === "ghost" ? "28px" : "40px"};
    min-width: ${props.variant === "ghost" ? "auto" : "64px"};
    padding: ${props.variant === "ghost"
      ? theme.spacing(0, 24)
      : theme.spacing(0, 20)};
  `,

  large: (theme: Theme, props: ButtonProps) => css`
    font-size: ${props.variant === "ghost" ? "16px" : "18px"};
    min-height: ${props.variant === "ghost" ? "36px" : "44px"};
    min-width: ${props.variant === "ghost" ? "80px" : "96px"};
    padding: ${theme.spacing(0, 20)};
  `,
};

const disabledStyles = (
  theme: Theme,
  props: ButtonProps
): SerializedStyles => css`
  ${props.disabled
    ? css`
        border-color: ${theme.palette.concrete};
        background-color: ${props.variant === "ghost"
          ? theme.palette.transparent
          : theme.palette.concrete};
        color: ${props.variant === "ghost"
          ? theme.palette.concrete
          : theme.palette.charcoal};
      `
    : css``}
`;

const getButtonCss = (
  theme: Theme,
  props: ButtonProps
): SerializedStyles => css`
  ${theme.typography.body1Bold};
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & .${classNames.startIcon} {
    margin-left: 0;
  }

  & .${classNames.endIcon} {
    margin-right: 0;
  }

  ${sizes[props.size as NonNullable<ButtonProps["size"]>](theme, props)};
  ${getVariantStyles(theme, props)};
  ${disabledStyles(theme, props)};

  ${props.disableGutters &&
  `
    padding: unset;
  `};
`;

export default getButtonCss;
