import React from "react";
import { ValidationStatus } from "../types";
import _ from "lodash";

type FormControlContextProps = {
  /**
   * Define main id for (input, select, etc)
   */
  id?: string;

  /**
   * Define id for the label.
   */
  labelId?: string;

  /**
   * Define validation status.
   */
  validationStatus?: ValidationStatus;

  /**
   * Define id for the validation label.
   */
  validationLabelId?: string;

  /**
   * Define id for the support text.
   */
  supportTextId?: string;

  /**
   * Define pre-generated `aria-describedby` label.
   */
  ariaDescribedBy?: string;
};

const FormControlContext = React.createContext<FormControlContextProps>({});

/**
 * Helper hook to use FormControlContext
 */
export const useFormControlContext = (
  componentProps?: FormControlContextProps
): FormControlContextProps => {
  const controlProps = React.useContext(FormControlContext);

  return _.merge(componentProps, controlProps);
};

export default FormControlContext;
