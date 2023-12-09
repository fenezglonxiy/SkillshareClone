/** @jsxImportSource @emotion/react */

import { useMediaQuery, useTheme } from "@mui/material";
import SignUpAgreement from "../SignUpAgreement";
import Typography from "../../../Typography/Typography";
import Divider from "../../../Divider/Divider";
import TextField from "../../../TextField/TextField";
import SignUpButton from "../SignUpButton";
import getAuthFormCss from "./getAuthFormCss";
import FacebookButton from "../../third-party-auth/components/FacebookButton";
import GoogleButton from "../../third-party-auth/components/GoogleButton";
import AppleButton from "../../third-party-auth/components/AppleButton";

const AuthForm = () => {
  const theme = useTheme();
  const styled = getAuthFormCss(theme);
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const thirdPartyBtnProps = {
    size: "small",
    variant: isMdBreakpoint ? "outlined" : "contained",
  } as const;

  return (
    <div css={styled.formWrapper}>
      <Typography color={isMdBreakpoint ? "navy" : "white"} variant="h1">
        Explore your creativity with thousands of hands‑on classes.
      </Typography>
      <Typography
        color={isMdBreakpoint ? "navy" : "white"}
        variant="body1Bold"
        component="h2"
      >
        Get{" "}
        <Typography
          color={isMdBreakpoint ? "violet" : "wanderGreen"}
          variant="body1Bold"
          component="span"
        >
          7 free days
        </Typography>{" "}
        of Skillshare
      </Typography>
      <div css={styled.authenticationContent}>
        <form autoComplete="off">
          <div css={styled.thirdPartyBtnContainer}>
            <FacebookButton
              {...thirdPartyBtnProps}
              css={styled.thirdPartyBtn}
            />
            <GoogleButton {...thirdPartyBtnProps} css={styled.thirdPartyBtn} />
            <AppleButton {...thirdPartyBtnProps} css={styled.thirdPartyBtn} />
          </div>
          <Divider color={isMdBreakpoint ? "navy" : "white"} size="small">
            or
          </Divider>
          <div css={styled.firstPartyForm}>
            <TextField placeholder="Email address" optional fullWidth />
            <div>
              <SignUpButton label="Start Learning Today" />
            </div>
            <SignUpAgreement />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
