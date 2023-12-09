/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import TextField from "../../../../../TextField/TextField";
import SignUpAgreement from "../../../../auth/SignUpAgreement";
import SignUpButton from "../../../../auth/SignUpButton";
import getSignUpFormCss from "./__styles__/getSignUpFormCss";
import Button from "../../../../../Button/Button";
import { useState } from "react";

const SignUpForm = () => {
  const theme = useTheme();
  const styled = getSignUpFormCss(theme);
  const [isFormShowed, setIsFormShowed] = useState<boolean>(false);

  const showForm = () => setIsFormShowed(true);

  return (
    <div css={styled.root}>
      {!isFormShowed ? (
        <Button variant="link" color="violet" onClick={showForm}>
          Sign up using Email
        </Button>
      ) : (
        <>
          <div css={styled.nameFieldContainer}>
            <TextField placeholder="First name" />
            <TextField placeholder="Last name" />
          </div>

          <TextField
            placeholder="Email address"
            css={styled.emailAddressField}
            fullWidth
          />

          <SignUpButton />
        </>
      )}

      <SignUpAgreement align="left" css={styled.signUpAgreement} />
    </div>
  );
};

export default SignUpForm;
