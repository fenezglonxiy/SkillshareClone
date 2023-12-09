/** @jsxImportSource @emotion/react */

import { Tab as MuiTab, useTheme } from "@mui/material";
import React, { SyntheticEvent } from "react";
import getTabCss from "./getTabCss";
import TabWrapper from "./TabWrapper";

export type TabProps = {
  /**
   * The label for the tab.
   */
  label: string;

  /**
   * The value for the tab.
   */
  value: string;

  /**
   * The `id` of the root element.
   */
  id?: string;

  /**
   * The `id` of the `TabPanel` that this `Tab` controls.
   */
  "aria-controls"?: string;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The icon to display.
   */
  icon?: React.ReactElement;

  /**
   * The position of the icon relative to the label.
   * @default "top"
   */
  iconPosition?: "bottom" | "end" | "start" | "top";

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped?: boolean;

  /**
   * Callback fired when tab is clicked.
   *
   * @param {React.SyntheticEvent} event
   * The event source of the callback.
   */
  onClick?: React.EventHandler<SyntheticEvent>;
};

const Tab: React.FC<TabProps> = (props: TabProps) => {
  const theme = useTheme();
  const css = getTabCss(theme);

  return (
    <TabWrapper theme={theme}>
      <MuiTab {...props} css={css} disableRipple />
    </TabWrapper>
  );
};

Tab.defaultProps = {
  iconPosition: "top",
};

export default Tab;
