import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  margin: ${theme.spacing(16, 0, 0)};
  text-align: center;
`;

const getNameFieldContainerStyles = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  margin: ${theme.spacing(0, 0, 12)};
  gap: ${theme.spacing(14)};
`;

const getEmailAddressFieldStyles = (theme: Theme) => css`
  margin: ${theme.spacing(0, 0, 16)};
`;

const getSignUpAgreementStyles = (theme: Theme) => css`
  margin: ${theme.spacing(16, 0, 0)};
`;

type SignUpFormStyledComponents =
  | "root"
  | "nameFieldContainer"
  | "emailAddressField"
  | "signUpAgreement";

const getSignUpFormCss = (
  theme: Theme
): Record<SignUpFormStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  nameFieldContainer: getNameFieldContainerStyles(theme),
  emailAddressField: getEmailAddressFieldStyles(theme),
  signUpAgreement: getSignUpAgreementStyles(theme),
});

export default getSignUpFormCss;
