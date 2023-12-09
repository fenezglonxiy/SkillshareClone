/** @jsxImportSource @emotion/react */

import React from "react";
import { Tabs as MuiTabs } from "@mui/material";
import Tab, { TabProps } from "../Tab/Tab";
import { getTabId, getTabPanelId, useTabsContext } from "./TabsContext";
import getTabsCss, { tabsClasses } from "./getTabsCss";

export type TabsProps = {
  /**
   * The label for the Tabs as a string.
   */
  "aria-label"?: string;

  /**
   * Use when you have a visible label.
   */
  "aria-labelledby"?: string;

  /**
   * If `true`, the tabs are centered.
   * @default false
   */
  centered?: boolean;

  /**
   * The additional class names for the root element.
   */
  className?: string;

  /**
   * The component orientation.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * If `true` the selected tab changes on focus.
   * @default false
   */
  selectionFollowsFocus?: boolean;

  /**
   * Determines additional display behavior of the tabs:
   *
   * - `scrollable` will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
   * - `fullWidth` will make the tabs grow to use all the available space.
   * - `standard` will render the default state.
   * @default "scrollable"
   */
  variant?: "scrollable" | "fullWidth" | "standard";

  /**
   * A list of `Tab` components.
   */
  children: Array<React.ReactElement<TabProps, typeof Tab>>;

  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event
   * The event source of the callback.
   * @param {string} value
   * The index or value of the child `Tab`
   */
  onChange?: (event: React.SyntheticEvent, value: string) => void;
} & Omit<React.ComponentPropsWithRef<"button">, "onChange" | "value">;

const Tabs = React.forwardRef(
  (props: TabsProps, ref: React.Ref<HTMLButtonElement>) => {
    const context = useTabsContext();

    if (context === null) {
      throw new TypeError("No TabsContext provided");
    }

    const { children: childrenFromProps, ...rest } = props;

    const children = React.Children.map(childrenFromProps, (child) => {
      if (child === undefined || child === null) {
        return child;
      }

      return React.cloneElement(child, {
        id: getTabId(context, child.props.value),
        "aria-controls": getTabPanelId(context, child.props.value),
      });
    });

    const css = getTabsCss();

    return (
      <MuiTabs
        {...rest}
        ref={ref}
        css={css}
        classes={tabsClasses}
        value={context.value}
        scrollButtons={false}
      >
        {children}
      </MuiTabs>
    );
  }
);

Tabs.defaultProps = {
  orientation: "horizontal",
  variant: "scrollable",
};

export default Tabs;
