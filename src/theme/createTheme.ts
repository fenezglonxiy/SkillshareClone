import { Theme, createTheme as createMuiTheme } from "@mui/material";
import createOverrides from "./overrides";
import createPalette from "./createPalette";
import createBreakpoints from "./createBreakpoints";
import createZIndex from "./createZIndex";
import createTypography from "./createTypography";
import createSpacing from "./createSpacing";

const createTheme = (): Theme => {
  const theme = createMuiTheme({
    components: createOverrides,
    palette: createPalette,
    breakpoints: createBreakpoints,
    zIndex: createZIndex,
    spacing: createSpacing,
  });

  theme.typography = createTypography(theme);
  return theme;
};

export default createTheme;
