import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getModalRootStyles = () => css`
  & > div:first-of-type {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const getModalPaperStyles = () => css`
  box-shadow: none;
  max-width: none;
`;

const getModalGridStyles = () => css`
  position: relative;
  display: grid;
  grid-template-columns: 284px 384px;
`;

const getModalTitleContainerStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing(0, 38, 0, 30)} !important;
  background: ${theme.palette.navy};

  & > div {
    width: 100px;
    margin-block: ${theme.spacing(24)};
  }
`;

const getModalContentStyles = (theme: Theme) => css`
  padding: ${theme.spacing(60, 40, 30)} !important;
`;

const getThirdPartyBtnContainerStyles = (theme: Theme) => css`
  display: grid;
  row-gap: ${theme.spacing(12)};
  margin-bottom: ${theme.spacing(16)};
`;

const getModalActionsStyles = (theme: Theme) => css`
  position: absolute;
  top: ${theme.spacing(12)};
  right: ${theme.spacing(8)};
`;

type AuthModalStyledComponents =
  | "root"
  | "paper"
  | "grid"
  | "titleContainer"
  | "content"
  | "thirdPartyBtnContainer"
  | "actions";

const getAuthenticationModalCss = (
  theme: Theme
): Record<AuthModalStyledComponents, SerializedStyles> => ({
  root: getModalRootStyles(),
  paper: getModalPaperStyles(),
  grid: getModalGridStyles(),
  titleContainer: getModalTitleContainerStyles(theme),
  content: getModalContentStyles(theme),
  thirdPartyBtnContainer: getThirdPartyBtnContainerStyles(theme),
  actions: getModalActionsStyles(theme),
});

export default getAuthenticationModalCss;
