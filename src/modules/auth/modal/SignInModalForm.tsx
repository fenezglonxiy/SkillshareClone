/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Button from "../../../Button/Button";
import TextField from "../../../TextField/TextField";
import Checkbox from "../../../forms/Checkbox/Checkbox";
import getSignInModalFormCss from "./__styles__/getSignInModalFormCss";

type Props = {
  /**
   * Callback fired when `Sign Up` button is clicked.
   */
  handleSwitch?: React.MouseEventHandler<HTMLButtonElement>;
};

const SignInModalForm = (props: Props) => {
  const theme = useTheme();
  const styled = getSignInModalFormCss(theme);
  const { handleSwitch } = props;

  return (
    <div css={styled.root}>
      <div>
        <TextField placeholder="Email address" fullWidth />
        <div css={styled.checkboxWrapper}>
          <Checkbox label="Keep me signed in until I sign out" />
        </div>
        <Button size="medium" fullWidth>
          Sign In
        </Button>
      </div>
      <div>
        <span>Not a member yet?</span>
        &nbsp;
        <Button onClick={handleSwitch} variant="link" color="violet">
          Sign Up.
        </Button>
      </div>
    </div>
  );
};

export default SignInModalForm;
