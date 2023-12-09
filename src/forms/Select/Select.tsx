/** @jsxImportSource @emotion/react */

import {
  Select as MuiSelect,
  SelectChangeEvent,
  useControlled,
  useTheme,
} from "@mui/material";
import SelectOption, { SelectOptionProps } from "./SelectOption/SelectOption";
import Input, { InputProps } from "../Input/Input";
import React, { ReactNode } from "react";
import { useFormControlContext } from "../FormControl/FormControlContext";
import getSelectCss, { selectClasses } from "./getSelectCss";
import SvgChevronDown from "./SvgChevronDown";
import clsx from "clsx";

export type SelectProps = {
  /**
   * If `true`, the dropdown trigger element will be focused during the first mount.
   */
  autoFocus?: boolean;

  /**
   * The option elements to populate the select with.
   * Can be some `SelectOption` element.
   *
   * ⚠️The `SelectOption` elements **must** be direct descendants.
   */
  children:
    | React.ReactElement<SelectOptionProps, typeof SelectOption>
    | Array<React.ReactElement<SelectOptionProps, typeof SelectOption>>;

  /**
   * Defines additional classNames for the root element.
   */
  className?: string;

  /**
   * Defines classes that can be passed to the Input component.
   */
  classes?: Partial<Record<"select", string>>;

  /**
   * The default value.
   * Use when the component is not controlled.
   */
  defaultValue?: any;

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value,
   * a function should be passed to the `renderValue` prop
   * which returns the value to be displayed when no items are selected.
   */
  displayEmpty?: boolean;

  /**
   * The `id` of the wrapper element.
   */
  id?: string;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputProps["inputProps"];

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple?: boolean;

  /**
   * Defines input element name.
   */
  name?: string;

  /**
   * Callback fired when an option is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange?: (event: SelectChangeEvent<any>, child: ReactNode) => void;

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Callback fired when the component is focused.
   *
   * @param {object} event The event source of the callback.
   */
  onFocus?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Callback fired when the component is blurred.
   *
   * @param {object} event The event source of the callback.
   */
  onBlur?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * If `true`, the component will render in open state.
   * @default undefined
   */
  open?: boolean;

  /**
   * Renders the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: any) => React.ReactNode;

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;

  /**
   * The `input` value.
   * Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   */
  value?: "" | any;

  /**
   * Define the variant to apply styles.
   * @default outlined
   */
  variant?: "outlined" | "standard" | "filled";
};

const Select = React.forwardRef(function Select(
  props: SelectProps,
  ref: React.Ref<any>
) {
  const {
    name,
    SelectDisplayProps,
    onBlur,
    onFocus,
    className,
    classes,
    ...muiProps
  } = props;

  const [value, setValue] = useControlled<any>({
    controlled: props.value,
    default: props.defaultValue,
    name: "Select",
    state: "value",
  });

  const [open, setOpen] = useControlled<boolean>({
    controlled: props.open,
    default: false,
    name: "Select",
    state: "open",
  });

  const theme = useTheme();
  const css = getSelectCss(theme, props);
  const formControl = useFormControlContext();

  /**
   * Handles focus event
   * @param event
   */
  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus?.(event);
  };

  /**
   * Handles blur event
   * @param event
   */
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur?.(event);
  };

  /**
   * Handles open event
   * @param event
   */
  const handleOpen = (event: React.ChangeEvent<unknown>) => {
    setOpen(true);
    props.onOpen?.(event);
  };

  /**
   * Handles close event
   * @param event
   */
  const handleClose = (event: React.ChangeEvent<unknown>) => {
    setOpen(false);
    props.onClose?.(event);
  };

  /**
   * Handles item selection event
   * @param event
   */
  const handleSelection = (event: SelectChangeEvent<any>, child: ReactNode) => {
    setValue(event.target.value);
    setOpen(false);
    props.onChange?.(event, child);
  };

  return (
    <MuiSelect
      ref={ref}
      css={css}
      MenuProps={{
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
      SelectDisplayProps={{
        "aria-describedby": formControl.ariaDescribedBy,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ...SelectDisplayProps,
      }}
      className={className}
      classes={{
        select: clsx(selectClasses.select, classes?.select),
        icon: selectClasses.icon,
      }}
      input={
        <Input
          inputProps={props.inputProps}
          hideOutline={props.variant === "standard"}
        />
      }
      IconComponent={SvgChevronDown}
      open={open}
      value={value}
      onChange={handleSelection}
      onOpen={handleOpen}
      onClose={handleClose}
      {...muiProps}
    />
  );
});

Select.defaultProps = {
  defaultValue: "",
};

export default Select;
