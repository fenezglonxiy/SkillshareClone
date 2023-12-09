declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xxl: true;
    xxxl: true;
    xxxxl: true;
  }
}

const breakpoints = {
  values: {
    xxs: 375,
    xs: 540,
    sm: 600,
    md: 900,
    lg: 990,
    xl: 1200,
    xxl: 1280,
    xxxl: 1500,
    xxxxl: 1920,
  },
};

export default breakpoints;
