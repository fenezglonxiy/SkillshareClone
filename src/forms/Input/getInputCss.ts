import { Theme, inputClasses as MuiInputClasses } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";
import { InputProps } from "./Input";
import { SerializedStyles, css } from "@emotion/react";

export const { classes: inputClasses, classNames: inputClassNames } =
  generateEmotionClassNames("input", [
    "focused",
    "root",
    "input",
    "multiline",
    "adornedStart",
    "adornedEnd",
    "valid",
    "invalid",
    "error",
    "placeholder",
    "notchedOutline",
  ]);

/**
 * Return maxWidth rule value as string
 */
const calculateMaxWidth = (
  theme: Theme,
  maxLength?: string | number
): string => {
  // as per the design spec, there should be space for an additional W
  const numberOfCharacters = Math.ceil(Number(maxLength)) + 1;
  // 4.624 (px) is the difference in width between '0' and 'W'
  const adjustment = numberOfCharacters * 4.624;
  // adjust for the input's padding
  const paddingAdjustment = theme.spacing(24);

  return maxLength
    ? `calc(${numberOfCharacters}ch + ${paddingAdjustment} + ${theme.typography.pxToRem(
        adjustment
      )})`
    : "initial";
};

const getRootStyles = (theme: Theme, props: InputProps): SerializedStyles =>
  css`
    background-color: ${theme.palette.white};
    align-self: ${props.inputProps?.maxLength && !props.fullWidth
      ? "flex-start"
      : "stretch"};
    max-width: ${props.fullWidth
      ? "initial"
      : calculateMaxWidth(theme, props.inputProps?.maxLength)};
    width: ${props.inputProps?.maxLength ? "100%" : "initial"};
    border-radius: 4px;

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: none;
    }
  `;

const getInputStyles = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  height: ${theme.spacing(38)};
  padding: ${theme.spacing(0, 14)};
  color: ${theme.palette.navy};

  ${theme.typography.body2};

  &::placeholder,
  & ${inputClassNames.placeholder} {
    color: ${theme.palette.charcoal};
    opacity: 1;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder,
  & ${inputClassNames.placeholder} {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const getMultilineStyles = () => css`
  padding: 0;

  & ${inputClassNames.input} {
    height: auto;
    min-height: 144px;
  }
`;

const getOutlinedStyles = (
  theme: Theme,
  props: InputProps
): SerializedStyles => css`
  ${!props.hideOutline
    ? css`
        ${inputClassNames.notchedOutline} {
          border-color: ${theme.palette.concrete};
        }

        &:hover,
        &${inputClassNames.focused} {
          ${inputClassNames.notchedOutline} {
            border-color: ${theme.palette.violet};
            border-width: 1px;
          }
        }
      `
    : css`
        ${inputClassNames.notchedOutline} {
          display: none;
        }
      `}
`;

const getInputCss = (theme: Theme, props: InputProps): SerializedStyles =>
  css`
    &${inputClassNames.root} {
      ${getRootStyles(theme, props)}
    }

    ${inputClassNames.input} {
      ${getInputStyles(theme)}
    }

    &${inputClassNames.multiline} {
      padding: 0;

      & ${inputClassNames.input} {
        height: auto;
        min-height: 144px;
      }
    }

    ${getOutlinedStyles(theme, props)};

    &:hover:not(.${(MuiInputClasses.disabled, MuiInputClasses.error)}) {
      &::before {
        border-bottom: none;
      }
    }
  `;

export default getInputCss;
