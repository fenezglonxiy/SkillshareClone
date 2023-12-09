import { useState } from "react";
import AuthModal from "../../../auth/modal/AuthModal";
import Button from "../../../../Button/Button";
import { useMediaQuery, useTheme } from "@mui/material";

const PageHeaderRightNav = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const [isAuthenticationModalOpen, setIsAuthenticationModalOpen] =
    useState<boolean>(false);

  const [authMode, setAuthMode] = useState<"signIn" | "signUp">("signUp");

  const openSignInModal = () => {
    setAuthMode("signIn");
    setIsAuthenticationModalOpen(true);
  };

  const openSignUpModal = () => {
    setAuthMode("signUp");
    setIsAuthenticationModalOpen(true);
  };

  const closeAuthenticationModal = () => setIsAuthenticationModalOpen(false);

  return (
    <div>
      {isMdBreakpoint && (
        <Button
          variant="ghostLink"
          color="wanderGreen"
          onClick={openSignInModal}
        >
          Sign In
        </Button>
      )}
      <Button
        variant="contained"
        color="wanderGreen"
        size="medium"
        hoverStyle="light"
        onClick={openSignUpModal}
      >
        Sign Up
      </Button>
      <AuthModal
        open={isAuthenticationModalOpen}
        mode={authMode}
        handleClose={closeAuthenticationModal}
      />
    </div>
  );
};

export default PageHeaderRightNav;
