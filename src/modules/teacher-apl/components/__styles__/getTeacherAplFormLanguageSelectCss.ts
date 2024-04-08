import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getTeacherAplLanguageSelectRootStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(32)};
`;

const getTeacherAplLanguageSelectContentStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(16)};
`;

const getTeacherAplLanguageSelectSelectStyles = () => css`
  && {
    text-align: left;
    flex-basis: 240px;
    max-width: 240px;
    border-radius: 30px;
  }
`;

const getTeacherAplLanguageSelectButtonStyles = (theme: Theme) => css`
  padding: ${theme.spacing(12, 9)};
  border-radius: 100%;
`;

type TeacherAplLanguageSelectStyledComponents =
  | "root"
  | "content"
  | "select"
  | "button";

const getTeacherAplLanguageSelectCss = (
  theme: Theme
): Record<TeacherAplLanguageSelectStyledComponents, SerializedStyles> => ({
  root: getTeacherAplLanguageSelectRootStyles(theme),
  content: getTeacherAplLanguageSelectContentStyles(theme),
  select: getTeacherAplLanguageSelectSelectStyles(),
  button: getTeacherAplLanguageSelectButtonStyles(theme),
});

export default getTeacherAplLanguageSelectCss;
