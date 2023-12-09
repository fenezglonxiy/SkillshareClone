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

const getCheckboxWrapperStyles = (theme: Theme) => css`
  margin-block: ${theme.spacing(26)};
  text-align: left;
`;

type SignInModalFormStyledComponents = "root" | "checkboxWrapper";

const getSignInModalFormCss = (
  theme: Theme
): Record<SignInModalFormStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  checkboxWrapper: getCheckboxWrapperStyles(theme),
});

export default getSignInModalFormCss;
