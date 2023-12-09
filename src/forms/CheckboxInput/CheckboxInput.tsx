import { Checkbox as MuiCheckbox } from "@mui/material";
import React from "react";
import { useFormControlContext } from "../FormControl/FormControlContext";
import SvgCheckboxChecked from "./SvgCheckboxChecked";
import SvgCheckboxUnchecked from "./SvgCheckboxUnchecked";

export type CheckboxInputProps = {
  /**
   * If `true`, the component is checked.
   * Use when the component is controlled.
   */
  checked?: boolean;

  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;

  /**
   * Defines additional className for the root element.
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<"uncheckedIcon" | "checkIcon", string>;

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   */
  focusVisibleClassName?: string;

  /**
   * The id of the `input` element.
   */
  id?: string;

  /**
   * Ref that points to the `input` element node.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Sets the `name` attribute on the `input` element.
   */
  name?: string;

  /**
   * Sets the `readOnly` attribute on the `input` element.
   */
  readOnly?: boolean;

  /**
   * Sets the `required` attribute on the `input` element.
   */
  required?: boolean;

  /**
   * Sets the `tabIndex` attribute on the `input` element.
   */
  tabIndex?: number;

  /**
   * The value of the component.
   * The DOM API casts this to a string.
   */
  value?: any;

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
 * Main Checkbox component.
 * This component is styled from the `FormControlLabel` component.
 */
const CheckboxInput = (
  props: CheckboxInputProps
): React.ReactElement<CheckboxInputProps> => {
  const { id: idFromProps, classes, ...rest } = props;
  const { id } = useFormControlContext({ id: idFromProps });

  return (
    <MuiCheckbox
      aria-disabled={props.disabled}
      id={id}
      icon={<SvgCheckboxUnchecked className={classes?.uncheckedIcon} />}
      checkedIcon={<SvgCheckboxChecked className={classes?.checkIcon} />}
      size="medium"
      disableFocusRipple
      disableRipple
      disableTouchRipple
      {...rest}
    />
  );
};

export default CheckboxInput;
