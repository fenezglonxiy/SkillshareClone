import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(16)};
  text-align: center;

  & > div:last-of-type {
    ${theme.typography.body2};
    margin-top: ${theme.spacing(24)};

    & > span {
      display: inline-block;
      vertical-align: middle;
      color: ${theme.palette.navy};
    }
  }

  & + * {
    margin-top: ${theme.spacing(20)} !important;
  }
`;

const getTextFieldWrapperStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(12)};
`;

const getAgreementWrapperStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(24)};
`;

type SignUpModalFormStyledComponents =
  | "root"
  | "textFieldWrapper"
  | "agreementWrapper";

const getSignUpModalFormCss = (
  theme: Theme
): Record<SignUpModalFormStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  textFieldWrapper: getTextFieldWrapperStyles(theme),
  agreementWrapper: getAgreementWrapperStyles(theme),
});

export default getSignUpModalFormCss;
