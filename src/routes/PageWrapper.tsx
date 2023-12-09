import { useTheme } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

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
  return (
    <>
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
    </>
  );
};

export default PageWrapper;
