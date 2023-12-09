/** @jsxImportSource @emotion/react */

import {
  InputBaseComponentProps,
  useTheme,
  OutlinedInput as MuiInput,
} from "@mui/material";
import React from "react";
import getInputCss, { inputClasses } from "./getInputCss";
import { useFormControlContext } from "../FormControl/FormControlContext";
import clsx from "clsx";

export type InputProps = {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * Learn more by reading the [spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string;

  /**
   * Define if field should be focused during first mount.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Define default value for the field.
   * Use when the component is not controlled.
   */
  defaultValue?: unknown;

  /**
   * Define if field is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Define if field should indicate an error state.
   */
  error?: boolean;

  /**
   * Define prefix for the field.
   * Can be icon, text, etc.
   */
  prefix?: React.ReactNode;

  /**
   * Define suffix for the field.
   * Can be icon, text, etc.
   */
  suffix?: React.ReactNode;

  /**
   * Define if field should take full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Define unique `id` attribute of the input element.
   * User to generate some `aria` attributes.
   */
  id?: string;

  /**
   * Define name attribute of the input element.
   */
  name?: string;

  /**
   * The component used for `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent?: React.ElementType<InputBaseComponentProps>;

  /**
   * Define additional input element props.
   * Use it to set `step` for number input type.
   */
  inputProps?: InputBaseComponentProps & { maxLength?: string | number };

  /**
   * Define ref passed to the `input` element.
   */
  inputRef?: React.Ref<unknown>;

  /**
   * Define placeholder text for the input element.
   */
  placeholder?: string;

  /**
   * Define whether a user can change field value.
   * Input element can be still focused and value can be copied.
   */
  readOnly?: boolean;

  /**
   * Define field as required.
   * All fields are mandatory by default.
   * @default false
   */
  required?: boolean;

  /**
   * Define whether field should be multiline field.
   * Will be rendered as `text-area` element.
   */
  multiline?: boolean;

  /**
   * Define a number of rows. Works only when `multiline` option is set to `true`
   */
  rows?: string | number;

  /**
   * Define the maximum number of rows to display when `multiline` option is set to `true`.
   */
  maxRows?: string | number;

  /**
   * Define the minimum number of rows to display when `multiline` option is set to `true`.
   */
  minRows?: string | number;

  /**
   * Define HTML5 input attribute
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
   * @default `text`
   */
  type?: string;

  /**
   * Define value of the field.
   * Required for a controlled component.
   */
  value?: unknown;

  /**
   * Define additional classes for the field.
   */
  className?: string;

  /**
   * Define classes object to allow add classes for elements/states (`root`, `focused`, `notchedOutline`) inside component
   */
  classes?: Partial<Record<"root" | "focused" | "notchedOutlined", string>>;

  /**
   * Define whether to hide outline
   * @default false
   */
  hideOutline?: boolean;

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { root, focused, ...restClasses } = inputClasses;

  const theme = useTheme();
  const css = getInputCss(theme, props);

  const { classes, prefix, suffix, hideOutline, className, ...restProps } =
    props;

  const { id, validationStatus, ariaDescribedBy } = useFormControlContext();

  return (
    <MuiInput
      ref={ref}
      aria-describedby={ariaDescribedBy}
      className={clsx(
        {
          [restClasses.valid]: validationStatus === "success",
          [restClasses.invalid]: validationStatus === "error",
        },
        className
      )}
      classes={{
        root: clsx(root, classes?.root),
        focused: clsx(focused, classes?.focused),
        error: restClasses.error,
        input: restClasses.input,
        multiline: restClasses.multiline,
        inputAdornedStart: restClasses.adornedStart,
        inputAdornedEnd: restClasses.adornedEnd,
        notchedOutline: restClasses.notchedOutline,
      }}
      css={css}
      id={id}
      startAdornment={prefix}
      endAdornment={suffix}
      {...restProps}
    />
  );
};

export default React.forwardRef(Input);
