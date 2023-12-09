/** @jsxImportSource @emotion/react */

import { FormControlLabel as MuiFormControlLabel } from "@mui/material";
import React from "react";
import getFormControlLabelCss, {
  formControlLabelClasses,
} from "./getFormControlLabelCss";

export type FormControlLabelProps = {
  /**
   * Sets `id` attribute of the `label` element.
   */
  id?: string;

  /**
   * A control element.
   * For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: React.ReactElement;

  /**
   * The label content.
   */
  label: string;

  /**
   * If `true`, the component appears selected.
   */
  checked?: boolean;

  /**
   * If `true`, the control is disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required?: boolean;

  /**
   * Defines additional classes for the root element.
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<"label", string>;

  /**
   * The value of the component.
   */
  value?: any;

  /**
   * Callback fired when the state is changed.
   *
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.SyntheticEvent) => void;
};

const FormControlLabel = (
  props: FormControlLabelProps
): React.ReactElement<FormControlLabelProps> => {
  const css = getFormControlLabelCss();
  const { classes, ...rest } = props;

  return (
    <MuiFormControlLabel
      classes={{
        label: classes?.label,
        asterisk: formControlLabelClasses.asterisk,
      }}
      css={css}
      {...rest}
    />
  );
};

FormControlLabel.defaultProps = {
  color: "navy",
};

export default FormControlLabel;
