import { SerializedStyles, css } from "@emotion/react";
import { ThirdPartyAuthButtonBaseProps } from "../ThirdPartyAuthButton";
import { Theme } from "@mui/material";

const getMediumSizeStyles = (theme: Theme) => css`
  justify-content: flex-start;

  & > span {
    margin: ${theme.spacing(0, 32, 0, 0)};
  }
`;

const getLargeSizeStyles = (theme: Theme) => css`
  min-height: 55px;
  justify-content: flex-start;

  & > span {
    margin: ${theme.spacing(0, 40, 0, 0)};
  }
`;

const getSizeCss = (
  theme: Theme,
  size: NonNullable<ThirdPartyAuthButtonBaseProps["size"]>
) => {
  const sizes: Record<
    NonNullable<ThirdPartyAuthButtonBaseProps["size"]>,
    SerializedStyles
  > = {
    small: css``,
    medium: getMediumSizeStyles(theme),
    large: getLargeSizeStyles(theme),
  };

  return sizes[size];
};

const getThirdPartyAuthButtonCss = (
  theme: Theme,
  props: ThirdPartyAuthButtonBaseProps
): SerializedStyles => css`
  ${getSizeCss(
    theme,
    props.size as NonNullable<ThirdPartyAuthButtonBaseProps["size"]>
  )}
`;

export default getThirdPartyAuthButtonCss;
