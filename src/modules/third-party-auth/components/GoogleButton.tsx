import SvgGoogle from "../assets/SvgGoogle";
import ThirdPartyAuthButton from "./ThirdPartyAuthButton";
import {
  LOGO_LARGE_SIZE,
  LOGO_SMALL_SIZE,
  ThirdPartyAuthButtonProps,
} from "./constants";

const GoogleButton = (props: ThirdPartyAuthButtonProps) => {
  const logoSize = props.size === "large" ? LOGO_LARGE_SIZE : LOGO_SMALL_SIZE;

  return (
    <ThirdPartyAuthButton
      label="Google"
      icon={<SvgGoogle {...logoSize} />}
      {...props}
    />
  );
};

export default GoogleButton;
