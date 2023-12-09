/** @jsxImportSource @emotion/react */

import SvgFacebook from "../assets/SvgFacebook";
import ThirdPartyAuthButton from "./ThirdPartyAuthButton";
import {
  ThirdPartyAuthButtonProps,
  LOGO_LARGE_SIZE,
  LOGO_SMALL_SIZE,
} from "./constants";

const FacebookButton = (props: ThirdPartyAuthButtonProps) => {
  const logoSize = props.size === "large" ? LOGO_LARGE_SIZE : LOGO_SMALL_SIZE;

  return (
    <ThirdPartyAuthButton
      label="Facebook"
      icon={<SvgFacebook {...logoSize} />}
      {...props}
    />
  );
};

export default FacebookButton;
