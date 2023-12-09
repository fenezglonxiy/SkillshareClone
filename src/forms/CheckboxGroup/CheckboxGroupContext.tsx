import React from "react";

export type CheckboxGroupValue = any[];

type CheckboxGroupContextProps = {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  value?: CheckboxGroupValue;
};

const CheckboxGroupContext = React.createContext<
  CheckboxGroupContextProps | undefined
>(undefined);

const CheckboxGroupContextProvider = CheckboxGroupContext.Provider;

const useCheckboxGroupContext = (): CheckboxGroupContextProps | undefined => {
  return React.useContext(CheckboxGroupContext);
};

export { useCheckboxGroupContext, CheckboxGroupContextProvider };
