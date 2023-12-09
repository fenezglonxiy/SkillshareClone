import { Theme, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  theme: Theme;
  children: ReactNode;
};

const EmotionThemeProvider: React.FC<Props> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default EmotionThemeProvider;
