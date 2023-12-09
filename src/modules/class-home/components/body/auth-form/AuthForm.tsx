/** @jsxImportSource @emotion/react */

import Typography from "../../../../../Typography/Typography";
import FacebookButton from "../../../../third-party-auth/components/FacebookButton";
import GoogleButton from "../../../../third-party-auth/components/GoogleButton";
import AppleButton from "../../../../third-party-auth/components/AppleButton";
import Divider from "../../../../../Divider/Divider";
import { Container, Paper, useTheme } from "@mui/material";
import getAuthFormCss from "./__styles__/getAuthFormCss";
import SignUpForm from "./SignUpForm";

const AuthForm = () => {
  const theme = useTheme();
  const styled = getAuthFormCss(theme);

  return (
    <Paper css={styled.root} elevation={0}>
      <Container maxWidth="xxs" css={styled.container} disableGutters>
        <Typography variant="h3" align="center">
          Get Started for Free
        </Typography>

        <form autoComplete="off">
          <div css={styled.thirdPartyBtnContainer}>
            <FacebookButton />
            <GoogleButton />
            <AppleButton />
          </div>

          <Divider color="navy">or</Divider>

          <SignUpForm />
        </form>
      </Container>
    </Paper>
  );
};

export default AuthForm;
