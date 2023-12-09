/** @jsxImportSource @emotion/react */

import { MenuItem as MuiMenuItem, useTheme } from "@mui/material";
import getSelectOptionCss, { selectOptionClasses } from "./getSelectOptionCss";
import SvgIcon from "../../../SvgIcon/SvgIcon";
import React from "react";

export type SelectOptionProps = {
  /**
   * Defines option value.
   */
  value: any;

  /**
   * Option content.
   */
  children: React.ReactNode;

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   */
  focusVisibleClassName?: string;

  /**
   * Defines if option shouldn't be rendered in the dropdown.
   */
  hidden?: boolean;

  /**
   * Defines if option is selected.
   */
  selected?: boolean;

  /**
   * Defines if option is disabled.
   * Used to disable placeholder.
   */
  disabled?: boolean;

  /**
   * Defines if the checked icon is disabled when the option is selected.
   * @default false
   */
  iconDisabled?: boolean;
} & React.ComponentPropsWithRef<"li">;

const SelectOption = (
  props: SelectOptionProps,
  ref: React.Ref<HTMLLIElement>
) => {
  const { selected, hidden, disabled, iconDisabled, children, ...rest } = props;
  const isSelected = selected && !disabled;

  const theme = useTheme();
  const css = getSelectOptionCss(theme, iconDisabled as boolean);

  return !hidden ? (
    <MuiMenuItem
      ref={ref}
      css={css}
      classes={{
        selected: isSelected ? selectOptionClasses.selected : undefined,
      }}
      selected={isSelected}
      disableRipple
      disableTouchRipple
      {...rest}
    >
      <div className={selectOptionClasses.container}>
        {isSelected && !iconDisabled && (
          <div>
            <CheckIcon />
          </div>
        )}

        <div>{children}</div>
      </div>
    </MuiMenuItem>
  ) : null;
};

const CheckIcon = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      size="large"
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        fill="#002333"
      ></path>
    </SvgIcon>
  );
};

export default React.forwardRef(SelectOption);
