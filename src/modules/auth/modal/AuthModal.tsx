/** @jsxImportSource @emotion/react */

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  useTheme,
} from "@mui/material";
import Typography from "../../../Typography/Typography";
import Divider from "../../../Divider/Divider";
import SvgClose from "../../../assets/SvgClose";
import React, { useEffect, useState } from "react";
import useId from "../../../utils/useId";
import {
  SIGN_IN_MODAL_DESCRIPTION,
  SIGN_IN_MODAL_TITLE,
  SIGN_UP_MODAL_DESCRIPTION,
  SIGN_UP_MODAL_TITLE,
} from "./constants";
import SignUpModalForm from "./SignUpModalForm";
import SignInModalForm from "./SignInModalForm";
import getAuthenticationModalCss from "./__styles__/getAuthModalCss";
import { ClassNames } from "@emotion/react";
import FacebookButton from "../../third-party-auth/components/FacebookButton";
import GoogleButton from "../../third-party-auth/components/GoogleButton";
import AppleButton from "../../third-party-auth/components/AppleButton";

type Props = {
  /**
   * Sets authentication mode for the modal.
   */
  mode: "signUp" | "signIn";

  /**
   * Callback fired when `Close` button is clicked.
   */
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
} & DialogProps;

const AuthModal = (props: Props): React.ReactElement<Props> => {
  const theme = useTheme();
  const styled = getAuthenticationModalCss(theme);
  const ariaLabelledBy = useId("authentication-modal-title");
  const ariaDescribedBy = useId("authentication-modal-description");
  const { mode: modeFromProps, handleClose, ...rest } = props;

  const [mode, setMode] = useState<typeof modeFromProps>(modeFromProps);
  const switchToSignInMode = () => setMode("signIn");
  const switchToSignUpMode = () => setMode("signUp");

  useEffect(() => {
    setMode(modeFromProps);
  }, [modeFromProps]);

  return (
    <ClassNames>
      {({ css }) => (
        <Dialog
          {...rest}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          classes={{
            root: css`
              ${styled.root}
            `,
            paper: css`
              ${styled.paper}
            `,
          }}
        >
          <div css={styled.grid}>
            <DialogTitle css={styled.titleContainer} component="div">
              <Typography id={ariaLabelledBy} color="white" variant="h2">
                {mode === "signUp" ? SIGN_UP_MODAL_TITLE : SIGN_IN_MODAL_TITLE}
              </Typography>
              <div>
                <Divider color="wanderGreen" size="medium" />
              </div>
              <Typography id={ariaDescribedBy} color="white" variant="body1">
                {mode === "signUp"
                  ? SIGN_UP_MODAL_DESCRIPTION
                  : SIGN_IN_MODAL_DESCRIPTION}
              </Typography>
            </DialogTitle>
            <DialogContent css={styled.content}>
              <form autoComplete="off">
                <div css={styled.thirdPartyBtnContainer}>
                  <FacebookButton size="large" />
                  <GoogleButton size="large" />
                  <AppleButton size="large" />
                </div>
                <Divider color="navy">or</Divider>
                {mode === "signUp" ? (
                  <SignUpModalForm handleSwitch={switchToSignInMode} />
                ) : (
                  <SignInModalForm handleSwitch={switchToSignUpMode} />
                )}
              </form>
            </DialogContent>
            <DialogActions css={styled.actions}>
              <button onClick={handleClose} type="button" aria-label="close">
                <SvgClose />
              </button>
            </DialogActions>
          </div>
        </Dialog>
      )}
    </ClassNames>
  );
};

export default AuthModal;
