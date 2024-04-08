import React from "react";

type PageWrapperContextProps = {
  openSignUpModal: () => void;
  openSignInModal: () => void;
} | null;

const Context = React.createContext<PageWrapperContextProps>(null);

type Props = React.PropsWithChildren & {
  openSignUpModal: () => void;
  openSignInModal: () => void;
};

const PageWrapperContext: React.FC<Props> = ({
  children,
  openSignUpModal,
  openSignInModal,
}) => {
  const context = {
    openSignUpModal,
    openSignInModal,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const usePageWrapperContext = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new TypeError("No PageWrapperContext provided");
  }

  return context;
};

export default PageWrapperContext;
