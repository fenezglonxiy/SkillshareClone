/** @jsxImportSource @emotion/react */

import React from "react";
import { ValidationStatus } from "../types";
import {
  FormControlProps as MuiFormControlProps,
  FormControl as MuiFormControl,
  useTheme,
} from "@mui/material";
import FormControlContext from "./FormControlContext";
import useId from "../../utils/useId";
import getFormControlCss, { formControlClasses } from "./getFormControlCss";

export type FormControlBaseProps = {
  /**
   * Unique `id` attribute for the input element.
   */
  id?: string;

  /**
   * Defines additional classes for the root element.
   */
  className?: string;

  /**
   * Defines whether field is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines whether field should take full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Defines support text for field.
   * Field refers to it with `aria-describedby`
   */
  supportText?: React.ReactNode;

  /**
   * Defines field as optional.
   * All fields are mandatory by default.
   * @default false
   */
  optional?: boolean;

  /**
   * Defines validation status.
   */
  validationStatus?: ValidationStatus;

  /**
   * Defines content of the component.
   */
  children?: React.ReactNode;
};

export type FormControlProps = MuiFormControlProps & FormControlBaseProps;

const FormControl = (
  props: FormControlProps,
  ref: React.Ref<HTMLDivElement>
): React.ReactElement<FormControlProps> => {
  const {
    id: idFromProps,
    children,
    disabled,
    fullWidth,
    optional,
    supportText,
    validationStatus,
    ...rest
  } = props;

  const theme = useTheme();
  const id = useId(idFromProps);
  const css = getFormControlCss(theme);

  const isValidated = validationStatus !== undefined;
  const supportTextId = supportText ? `${id}-support-text` : undefined;
  const inputLabelId = `${id}-label`;
  const validationLabelId = isValidated ? `${id}-validation-label` : undefined;

  const formControlContext = {
    id,
    validationStatus,
    labelId: inputLabelId,
    validationLabelId,
    supportTextId,
    ariaDescribedBy: isValidated
      ? [validationLabelId, supportTextId].filter(Boolean).join(" ")
      : supportTextId,
  };

  return (
    <FormControlContext.Provider value={formControlContext}>
      <MuiFormControl
        ref={ref}
        disabled={disabled}
        classes={{
          root: formControlClasses.root,
        }}
        css={css}
        error={validationStatus === "error"}
        fullWidth={fullWidth}
        required={!optional}
        variant="standard"
        {...rest}
      >
        {children}
      </MuiFormControl>
    </FormControlContext.Provider>
  );
};

export default React.forwardRef(FormControl);
