/** @jsxImportSource @emotion/react */

import Button from "../../../Button/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import getThirdPartyAuthButtonCss from "./__styles__/getThirdPartyAuthButtonCss";

export type ThirdPartyAuthButtonBaseProps = {
  icon: React.ReactElement;
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ThirdPartyAuthButton: React.FC<ThirdPartyAuthButtonBaseProps> = (
  props
) => {
  const theme = useTheme();
  const css = getThirdPartyAuthButtonCss(theme, props);
  const { icon, label, size, onClick, ...rest } = props;

  return (
    <Button
      onClick={onClick}
      icon={icon}
      iconPosition="start"
      color="white"
      css={css}
      fullWidth
      {...rest}
    >
      {size === "small" ? label : "Continue with " + label}
    </Button>
  );
};

ThirdPartyAuthButton.defaultProps = {
  size: "medium",
  variant: "outlined",
};

export default ThirdPartyAuthButton;
