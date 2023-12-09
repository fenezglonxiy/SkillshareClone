import { ThirdPartyAuthButtonBaseProps } from "./ThirdPartyAuthButton";

export type ThirdPartyAuthButtonProps = {
  size?: ThirdPartyAuthButtonBaseProps["size"];
  variant?: ThirdPartyAuthButtonBaseProps["variant"];
  className?: string;
};

export const LOGO_SMALL_SIZE = {
  width: "20",
  height: "20",
};

export const LOGO_LARGE_SIZE = {
  width: "24",
  height: "24",
};
