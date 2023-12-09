import { Theme, css } from "@mui/material";
import {
  AUTHENTICATION_CONTENT_LARGE_SCREEN_MAX_WIDTH,
  FORM_WRAPPER_MAX_WIDTH,
  FORM_WRAPPER_Z_INDEX,
} from "./constants";
import { SerializedStyles } from "@emotion/react";

const getFormWrapperStyles = (theme: Theme) => css`
  position: relative;
  max-width: ${FORM_WRAPPER_MAX_WIDTH}px;
  padding: ${theme.spacing(24, 24)};
  margin-inline: auto;
  text-align: center;
  z-index: ${FORM_WRAPPER_Z_INDEX};
  color: ${theme.palette.white};

  & > h1 {
    margin: ${theme.spacing(0, 0, 12)};
  }

  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(28, 24)};
    background: ${theme.palette.white};
    color: ${theme.palette.navy};
  }
`;

const getAuthenticationContentStyles = (theme: Theme) => css`
  margin: ${theme.spacing(24, 0, 0)};

  & > form > *:not(:last-child) {
    margin: ${theme.spacing(0, 0, 12)};
  }

  ${theme.breakpoints.up("md")} {
    max-width: ${AUTHENTICATION_CONTENT_LARGE_SCREEN_MAX_WIDTH}px;
    margin-inline: auto;
  }
`;

const getThirdPartyBtnContainerStyles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${theme.spacing(10)};
`;

const getThirdPartyBtnStyles = (theme: Theme) => css`
  padding: ${theme.spacing(0, 8)};
`;

const getFirstPartyFormStyles = (theme: Theme) => css`
  text-align: left;

  & > *:not(:last-child) {
    margin: ${theme.spacing(0, 0, 16)};
  }
`;

type AuthFormClasses =
  | "formWrapper"
  | "authenticationContent"
  | "thirdPartyBtnContainer"
  | "thirdPartyBtn"
  | "firstPartyForm";

const getAuthFormCss = (
  theme: Theme
): Record<AuthFormClasses, SerializedStyles> => ({
  formWrapper: getFormWrapperStyles(theme),
  authenticationContent: getAuthenticationContentStyles(theme),
  thirdPartyBtnContainer: getThirdPartyBtnContainerStyles(theme),
  thirdPartyBtn: getThirdPartyBtnStyles(theme),
  firstPartyForm: getFirstPartyFormStyles(theme),
});

export default getAuthFormCss;
