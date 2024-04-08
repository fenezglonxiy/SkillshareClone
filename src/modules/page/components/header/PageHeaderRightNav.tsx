import Button from "../../../../Button/Button";
import { useMediaQuery, useTheme } from "@mui/material";

const PageHeaderRightNav = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      {isMdBreakpoint && (
        <Button variant="ghostLink" color="wanderGreen">
          Sign In
        </Button>
      )}
      <Button
        variant="contained"
        color="wanderGreen"
        size="medium"
        hoverStyle="light"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default PageHeaderRightNav;
