/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Button from "../../../Button/Button";
import Divider from "../../../Divider/Divider";
import TextField from "../../../TextField/TextField";
import SignUpAgreement from "../SignUpAgreement";
import SignUpButton from "../SignUpButton";
import { useTheme } from "@mui/material";
import getSignUpModalFormCss from "./__styles__/getSignUpModalFormCss";

type Props = {
  /**
   * Callback fired when `Sign In` button is clicked.
   */
  handleSwitch?: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUpModalForm = (props: Props) => {
  const theme = useTheme();
  const styled = getSignUpModalFormCss(theme);
  const { handleSwitch } = props;

  const [isSignUpContainerShow, setIsSignUpContainedShow] =
    useState<boolean>(false);

  const showSignUpContainer = () => setIsSignUpContainedShow(true);

  return (
    <>
      <div css={styled.root}>
        <div>
          {!isSignUpContainerShow ? (
            <Button onClick={showSignUpContainer} variant="link" color="violet">
              Sign Up Using Email
            </Button>
          ) : (
            <>
              <div css={styled.textFieldWrapper}>
                <TextField placeholder="Email address" fullWidth />
              </div>
              <SignUpButton />
            </>
          )}
        </div>
        <div>
          <span>Already a member?</span>
          <Button onClick={handleSwitch} variant="link" color="violet">
            Sign In
          </Button>
        </div>
      </div>
      <Divider color="navy" />
      <SignUpAgreement css={styled.agreementWrapper} />
    </>
  );
};

export default SignUpModalForm;
