import React from "react";
import useId from "../../utils/useId";

type Id = string | undefined;

type TabsContextProps = {
  id: Id;
  value: string;
} | null;

const Context = React.createContext<TabsContextProps>(null);

type Props = {
  /**
   * The value of the currently selected `Tab`.
   */
  value: string;

  /**
   * The content of the component.
   */
  children?: React.ReactNode;
};

const TabsContext = ({ children, value }: Props): React.ReactElement<Props> => {
  const id = useId();

  const context = React.useMemo(() => {
    return { id, value };
  }, [id, value]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useTabsContext = (): TabsContextProps => {
  return React.useContext(Context);
};

export const getTabPanelId = (context: TabsContextProps, value: Id): Id => {
  if (!context?.id) {
    return undefined;
  }

  return `${context.id}-panel-${value}`;
};

export const getTabId = (context: TabsContextProps, value: Id): Id => {
  if (!context?.id) {
    return undefined;
  }

  return `${context.id}-tab-${value}`;
};

export default TabsContext;
