/** @jsxImportSource @emotion/react */

import React from "react";
import getTabWrapperCss, { tabWrapperClasses } from "./getTabWrapperCss";
import { Theme } from "@mui/material";

type Props = {
  theme: Theme;
  children?: React.ReactNode;
};

const TabWrapper: React.FC<Props> = ({ theme, children }) => {
  const css = getTabWrapperCss(theme);

  return (
    <div css={css} className={tabWrapperClasses.root}>
      {children}
    </div>
  );
};

export default TabWrapper;
