/** @jsxImportSource @emotion/react */

import React from "react";
import { ValidationStatus } from "../types";
import { useTheme } from "@mui/material";
import { useFormControlContext } from "../FormControl/FormControlContext";
import Typography from "../../Typography/Typography";
import getFormValidationLabelCss, {
  formValidationLabelClasses,
} from "./getFormValidationLabelCss";
import clsx from "clsx";

export type FormValidationLabelProps = {
  label: string;
  className?: string;
  hideIcon?: boolean;
  id?: string;
  validationStatus?: ValidationStatus;
} & React.ComponentPropsWithRef<"div">;

const FormValidationLabel = (
  props: FormValidationLabelProps
): React.ReactElement<FormValidationLabelProps> => {
  const { label, className, hideIcon, validationStatus, ...rest } = props;
  const theme = useTheme();
  const css = getFormValidationLabelCss(theme);
  const formControlContext = useFormControlContext({
    id: props.id,
    validationStatus,
  });

  return (
    <div
      className={clsx(formValidationLabelClasses.root, className)}
      css={css}
      id={formControlContext.validationLabelId}
      {...rest}
    >
      <Typography
        aria-hidden
        color={validationStatus}
        component="span"
        variant="h4"
      >
        {label}
      </Typography>
    </div>
  );
};

export default FormValidationLabel;
