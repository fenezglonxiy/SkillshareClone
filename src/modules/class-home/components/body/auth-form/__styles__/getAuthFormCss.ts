import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import { CLASS_BODY_PADDING_INLINE } from "../../constants";

const getRootStyles = (theme: Theme) => css`
  margin: ${theme.spacing(0, -CLASS_BODY_PADDING_INLINE)};
  background-color: ${theme.palette.white};

  ${theme.breakpoints.up("lg")} {
    margin: 0;
    float: right;
    position: sticky;
    top: ${theme.spacing(52)};
    right: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    z-index: 10;
  }
`;

const getContainerStyles = (theme: Theme) => css`
  padding: ${theme.spacing(32, 22.5, 40)};
  color: ${theme.palette.navy};

  ${theme.breakpoints.up("lg")} {
    max-width: 346px;
    padding: ${theme.spacing(32, 24, 40)};
  }

  ${theme.breakpoints.up("xxl")} {
    max-width: 388px;
    padding: ${theme.spacing(32, 23, 40)};
  }
`;

const getThirdPartyBtnContainerStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(12)};
  margin: ${theme.spacing(24, 0, 16)};
`;

type AuthFormStyledComponents = "root" | "container" | "thirdPartyBtnContainer";

const getAuthFormCss = (
  theme: Theme
): Record<AuthFormStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
  thirdPartyBtnContainer: getThirdPartyBtnContainerStyles(theme),
});

export default getAuthFormCss;
