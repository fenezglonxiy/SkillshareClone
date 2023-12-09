/** @jsxImportSource @emotion/react */

import { FormHelperText as MuiFormHelperText, useTheme } from "@mui/material";
import React from "react";
import { useFormControlContext } from "../FormControl/FormControlContext";
import getFormSupportTextCss, {
  formSupportTextClasses,
} from "./getFormSupportTextCss";

export type FormSupportTextProps = React.ComponentPropsWithRef<"div">;

const FormSupportText = (
  props: FormSupportTextProps
): React.ReactElement<FormSupportTextProps> => {
  const theme = useTheme();
  const css = getFormSupportTextCss(theme);
  const { supportTextId } = useFormControlContext();

  return (
    <MuiFormHelperText
      {...props}
      css={css}
      classes={formSupportTextClasses}
      id={supportTextId}
    />
  );
};

export default FormSupportText;
