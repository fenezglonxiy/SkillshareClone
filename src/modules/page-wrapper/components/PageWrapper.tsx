import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapperContext from "./PageWrapperContext";
import AuthModal from "../../auth/modal/AuthModal";

type Props = {
  /**
   * Specifies the title for the page.
   */
  title: string;

  /**
   * StyledComponents of the page.
   */
  children: React.ReactNode;

  /**
   * Defines the background-color for the page.
   * It supports the relevant theme color.
   * @default undefined
   */
  bgcolor?: string;

  /**
   * The value for body `overflow-x` CSS attribute.
   * @default "visible"
   */
  overflowX?: "auto" | "scroll" | "hidden";
};

const PageWrapper: React.FC<Props> = ({
  title,
  children,
  bgcolor,
  overflowX,
}) => {
  const [authModalMode, setAuthModalMode] = useState<
    "signUp" | "signIn" | undefined
  >(undefined);

  const openSignUpModal = () => setAuthModalMode("signUp");

  const openSignInModal = () => setAuthModalMode("signIn");

  const handleCloseModal = () => setAuthModalMode(undefined);

  return (
    <PageWrapperContext
      openSignUpModal={openSignUpModal}
      openSignInModal={openSignInModal}
    >
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">{`
          body {
            background-color: ${bgcolor};
            overflow-x: ${overflowX};
          }
        `}</style>
      </Helmet>
      {children}

      <AuthModal
        open={authModalMode !== undefined}
        mode={authModalMode as NonNullable<typeof authModalMode>}
        handleClose={handleCloseModal}
      />
    </PageWrapperContext>
  );
};

export default PageWrapper;
