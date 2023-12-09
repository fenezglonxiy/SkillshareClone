import {
  CssBaseline,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import React, { ReactNode } from "react";
import EmotionThemeProvider from "./EmotionThemeProvider";

type Props = {
  theme: Theme;
  children: ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
