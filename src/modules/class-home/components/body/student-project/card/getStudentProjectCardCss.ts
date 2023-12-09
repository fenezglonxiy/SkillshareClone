import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  overflow: unset;
  position: relative;
  box-shadow: 0px 2px 4px 0px rgba(184, 184, 184, 0.5);
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: 0 4px 8px 0 ${theme.palette.concrete};
    transition: opacity 0.2s ease-in-out;
    border-radius: 8px;
    opacity: 0;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
      z-index: 0;
    }
  }
`;

const getCardMediaStyles = () => css`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const getCardContentStyles = (theme: Theme) => css`
  padding: ${theme.spacing(8)} !important;
`;

const getStudentLinkContainerStyles = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(8)};
`;

const getStudentLinkWrapperStyles = (theme: Theme) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 16ch;
  ${theme.typography.caption};
`;

type StudentProjectCardStyledComponents =
  | "root"
  | "cardMedia"
  | "cardContent"
  | "studentLinkContainer"
  | "studentLinkWrapper";

const getStudentProjectCardCss = (
  theme: Theme
): Record<StudentProjectCardStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  cardMedia: getCardMediaStyles(),
  cardContent: getCardContentStyles(theme),
  studentLinkContainer: getStudentLinkContainerStyles(theme),
  studentLinkWrapper: getStudentLinkWrapperStyles(theme),
});

export default getStudentProjectCardCss;
