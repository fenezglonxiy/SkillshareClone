/** @jsxImportSource @emotion/react */

import React from "react";
import { ValidationStatus } from "../types";
import { useTheme } from "@mui/material";
import { useCheckboxGroupContext } from "../CheckboxGroup/CheckboxGroupContext";
import useId from "../../utils/useId";
import FormControl from "../FormControl/FormControl";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import Typography from "../../Typography/Typography";
import FormControlLabel from "../FormControlLabel/FormControlLabel";
import getCheckboxCss, { checkboxClasses } from "./getCheckboxCss";

export type CheckboxProps = {
  /**
   * Unique `id` attribute of the component.
   */
  id?: string;

  /**
   * Defines additional classes for the root element.
   */
  className?: string;

  /**
   * State of the component.
   * When used as a controlled component, this prop controls whether the component appears as checked.
   */
  checked?: boolean;

  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled?: boolean;

  /**
   * Label displayed next to the checkbox.
   */
  label: string;

  /**
   * Defines support text for the field.
   */
  supportText?: React.ReactNode;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Sets the `name` attribute of the `input` element.
   */
  name?: string;

  /**
   * Sets the `required` attribute of the `input` element.
   * @default false
   */
  required?: boolean;

  /**
   * Sets the `tabIndex` attribute of the `input` element.
   */
  tabIndex?: number;

  /**
   * The value of the component.
   * The DOM API casts this to a string.
   */
  value?: any;

  /**
   * Ref that points to the `input` element node
   */
  ref?: React.Ref<HTMLInputElement>;

  /**
   * Defines the validation status.
   */
  validationStatus?: ValidationStatus;

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};

/**
 * The checkbox component allows the user to select one or more items from a set.
 */
const Checkbox = (props: CheckboxProps): React.ReactElement<CheckboxProps> => {
  const {
    id: idFromProps,
    className,
    supportText,
    inputProps,
    label,
    ref,
    name,
    disabled,
    value,
    onChange,
    required,
    validationStatus,
    ...rest
  } = props;

  const theme = useTheme();
  const css = getCheckboxCss(theme);
  const checkboxGroupContext = useCheckboxGroupContext();
  let checked = props.checked;

  if (value && checkboxGroupContext?.value) {
    checked = checkboxGroupContext.value.includes(value);
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    checkboxGroupContext?.onChange?.(event, checked);
    onChange?.(event, checked);
  };

  const id = useId(idFromProps);
  const labelId = `${id}-label`;
  const supportTextId = supportText ? `${id}-support` : undefined;

  return (
    <FormControl className={className} css={css} id={id} {...rest}>
      <FormControlLabel
        id={labelId}
        className={checkboxClasses.label}
        classes={{
          label: checkboxClasses.labelText,
        }}
        label={label}
        control={
          <CheckboxInput
            classes={{
              checkIcon: checkboxClasses.checkedIcon,
              uncheckedIcon: checkboxClasses.uncheckedIcon,
            }}
            checked={checked}
            disabled={disabled}
            inputProps={{
              ...inputProps,
              "aria-labelledby": supportText
                ? `${labelId} ${supportTextId}`
                : labelId,
            }}
            inputRef={ref}
            name={name}
            required={required}
            value={value}
            onChange={handleChange}
          />
        }
      />

      {supportText && (
        <Typography id={supportTextId} variant="body2">
          {supportText}
        </Typography>
      )}
    </FormControl>
  );
};

export default Checkbox;
