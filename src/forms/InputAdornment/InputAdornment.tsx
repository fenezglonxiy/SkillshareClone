/** @jsxImportSource @emotion/react */

import React from "react";
import { ValidationStatus } from "../types";
import { useTheme } from "@mui/material";
import { InputAdornment as MuiInputAdornment } from "@mui/material";
import clsx from "clsx";
import getInputAdornmentCss, {
  inputAdornmentClasses,
} from "./getInputAdornmentCss";

export type InputAdornmentProps = {
  /**
   * Defines position of the component.
   * @default start
   */
  position?: "start" | "end";

  /**
   * Defines variant of the component.
   * @default standard
   */
  variant?: "filled" | "standard";

  /**
   * Defines additional classes for the root component.
   */
  className?: string;

  /**
   * Defines validation status.
   */
  validationStatus?: ValidationStatus;

  /**
   * Defines vertical alignment of the content inside.
   */
  verticallyAligned?: "top" | "center";
} & React.ComponentPropsWithRef<"div">;

/**
 * Renders input field prefix/suffix.
 */
const InputAdornment = (
  props: InputAdornmentProps
): React.ReactElement<InputAdornmentProps> => {
  const theme = useTheme();
  const css = getInputAdornmentCss(theme);

  const {
    position = "start",
    variant = "standard",
    validationStatus,
    className,
    verticallyAligned,
    ...rest
  } = props;

  return (
    <MuiInputAdornment
      aria-hidden
      css={css}
      {...rest}
      disableTypography
      className={clsx(
        verticallyAligned && inputAdornmentClasses[verticallyAligned],
        inputAdornmentClasses[variant],
        {
          [inputAdornmentClasses.valid]: validationStatus === "success",
          [inputAdornmentClasses.invalid]: validationStatus === "error",
        },
        className
      )}
      classes={{
        root: inputAdornmentClasses.root,
      }}
      position={position}
    />
  );
};

export default InputAdornment;
