/** @jsxImportSource @emotion/react */

import {
  FormLabelProps as MuiFormLabelProps,
  FormLabel as MuiFormLabel,
  useFormControl as useMuiFormControl,
  useTheme,
} from "@mui/material";
import React from "react";
import { useFormControlContext } from "../FormControl/FormControlContext";
import Typography from "../../Typography/Typography";
import getFormLabelCss, { formLabelClasses } from "./getFormLabelCss";
import VisuallyHidden from "../../VisuallyHidden/VisuallyHidden";

export type BaseFormLabelProps = {
  /**
   * Defines whether to render optional text next to label.
   */
  optional?: boolean;

  /**
   * Allows to add (required) to the label so that custom fields could also be announced as required.
   * Example: SelectField
   */
  includeRequiredIndicatorWithLabel?: boolean;

  /**
   * Defines additional classes for the root element.
   */
  className?: string;
};

export type FormLabelProps = MuiFormLabelProps & BaseFormLabelProps;

/**
 * Main Input label component
 * @param props
 */
const FormLabel = (
  props: FormLabelProps
): React.ReactElement<FormLabelProps> => {
  const theme = useTheme();
  const css = getFormLabelCss(theme);
  const { optionalLabel, ...muiClasses } = formLabelClasses;

  const {
    children,
    className,
    optional,
    includeRequiredIndicatorWithLabel,
    ...rest
  } = props;

  const muiFormControl = useMuiFormControl();
  const formControlContext = useFormControlContext({
    id: props.htmlFor,
    labelId: props.id,
  });

  const showOptionalMark = muiFormControl?.required === false || optional;
  const showRequiredMark =
    muiFormControl?.required && includeRequiredIndicatorWithLabel;

  const OptionalMark = showOptionalMark && (
    <Typography
      aria-hidden="true"
      color="supportText"
      component="span"
      variant="body2Bold"
      className={formLabelClasses.optionalLabel}
    >
      <i>{" optional"}</i>
    </Typography>
  );

  return (
    <MuiFormLabel
      css={css}
      className={className}
      classes={muiClasses}
      htmlFor={formControlContext.id}
      id={formControlContext.labelId}
      {...rest}
    >
      {children}

      {OptionalMark}

      {showRequiredMark && <VisuallyHidden>{"required"}</VisuallyHidden>}
    </MuiFormLabel>
  );
};

export default FormLabel;
