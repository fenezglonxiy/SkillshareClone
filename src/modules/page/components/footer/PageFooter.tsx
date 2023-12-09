import { useMediaQuery, useTheme } from "@mui/material";
import DesktopFooter from "./desktop/DesktopFooter";
import MobileFooter from "./mobile/MobileFooter";

const PageFooter = () => {
  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return isXsBreakpoint ? <DesktopFooter /> : <MobileFooter />;
};

export default PageFooter;
