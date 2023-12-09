import SvgApple from "../assets/SvgApple";
import ThirdPartyAuthButton from "./ThirdPartyAuthButton";
import {
  ThirdPartyAuthButtonProps,
  LOGO_LARGE_SIZE,
  LOGO_SMALL_SIZE,
} from "./constants";

const AppleButton = (props: ThirdPartyAuthButtonProps) => {
  const logoSize = props.size === "large" ? LOGO_LARGE_SIZE : LOGO_SMALL_SIZE;

  return (
    <ThirdPartyAuthButton
      label="Apple"
      icon={<SvgApple {...logoSize} />}
      {...props}
    />
  );
};

export default AppleButton;
