import React from "react";
import { getTabId, getTabPanelId, useTabsContext } from "../Tabs/TabsContext";

export type TabPanelProps = {
  /**
   * The `value` of the corresponding `Tab`.
   */
  value: string;

  /**
   * The content of the component.
   */
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

const TabPanel = React.forwardRef(
  (props: TabPanelProps, ref: React.Ref<HTMLDivElement>) => {
    const { value, children, ...rest } = props;
    const context = useTabsContext();

    if (!context) {
      throw new TypeError("No TabsContext provided");
    }

    const id = getTabPanelId(context, value);
    const tabId = getTabId(context, value);

    return (
      <div
        {...rest}
        ref={ref}
        aria-labelledby={tabId}
        hidden={context.value !== value}
        id={id}
        role="tabpanel"
      >
        {context.value === value && children}
      </div>
    );
  }
);

export default TabPanel;
