/** @jsxImportSource @emotion/react */

import React from "react";
import FormControl, {
  FormControlBaseProps,
} from "../forms/FormControl/FormControl";
import Input, { InputProps } from "../forms/Input/Input";
import FormLabel from "../forms/FormLabel/FormLabel";
import InputAdornment from "../forms/InputAdornment/InputAdornment";
import { useTheme } from "@mui/material";
import getTextFieldCss, { textFieldClasses } from "./getTextFieldCss";
import FormSupportText from "../forms/FormSupportText/FormSupportText";
import FormValidationLabel from "../forms/FormValidationLabel/FormValidationLabel";

export type TextFieldProps = {
  /**
   * The label content.
   */
  label?: string;

  /**
   * Defines default value for the field.
   * Use when the component is not controlled.
   */
  defaultValue?: string;

  /**
   * Defines value of the field.
   * Required for a controlled component.
   */
  value?: string;

  /**
   * Defines additional classes for the root element.
   */
  className?: string;

  /**
   * Defines max characters and appropriately adjusts the width of the input.
   */
  maxLength?: number;

  /**
   * Defines HTML5 input attribute.
   * @default text
   */
  type?: "text" | "number" | "email" | "password" | "tel" | "url";

  /**
   * Defines ref passed to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>;

  /**
   * Label to describe validation state of the TextField.
   */
  validationLabel?: string;
} & FormControlBaseProps &
  Pick<
    InputProps,
    | "onBlur"
    | "onFocus"
    | "onChange"
    | "rows"
    | "maxRows"
    | "prefix"
    | "suffix"
    | "inputProps"
    | "placeholder"
    | "value"
    | "name"
    | "placeholder"
    | "name"
    | "autoFocus"
    | "autoComplete"
    | "multiline"
    | "className"
  >;

/**
 * TextField allows users to input data.
 */
const TextField = React.forwardRef(function TextField(
  props: TextFieldProps,
  ref: React.Ref<HTMLDivElement>
): React.ReactElement<TextFieldProps> {
  const {
    id,
    supportText,
    label,
    suffix,
    prefix,
    className,
    disabled,
    fullWidth,
    optional,
    validationStatus,
    multiline,
    validationLabel,
    inputProps,
    maxLength,
    ...inputComponentProps
  } = props;

  const theme = useTheme();
  const css = getTextFieldCss(theme);

  const endAdornmentAlignment = multiline ? "top" : undefined;

  let endAdornmentElement = suffix && (
    <InputAdornment position="end" variant="filled">
      {suffix}
    </InputAdornment>
  );

  const startAdornmentElement = prefix && (
    <InputAdornment position="start" variant="filled">
      {prefix}
    </InputAdornment>
  );

  return (
    <FormControl
      ref={ref}
      css={css}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      optional={optional}
      supportText={supportText}
      validationStatus={validationStatus}
      className={className}
    >
      {label && <FormLabel>{label}</FormLabel>}

      {supportText && (
        <FormSupportText className={textFieldClasses.formSupportText}>
          {supportText}
        </FormSupportText>
      )}

      {validationStatus && validationLabel && (
        <FormValidationLabel
          className={textFieldClasses.formValidationLabel}
          label={validationLabel}
          hideIcon
        />
      )}

      <Input
        {...inputComponentProps}
        classes={{
          root: textFieldClasses.root,
          focused: textFieldClasses.focused,
        }}
        fullWidth={fullWidth}
        inputProps={{
          "aria-label": label,
          maxLength,
          ...inputProps,
        }}
        multiline={multiline}
        prefix={startAdornmentElement}
        suffix={endAdornmentElement}
      />
    </FormControl>
  );
});

TextField.defaultProps = {
  multiline: false,
  type: "text",
};

export default TextField;
