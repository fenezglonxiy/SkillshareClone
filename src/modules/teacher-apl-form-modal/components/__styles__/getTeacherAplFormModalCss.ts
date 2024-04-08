import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import generateEmotionClassNames from "../../../../utils/generateEmotionClassNames";

const { classes, classNames } = generateEmotionClassNames(
  "teacher-apl-form-modal",
  ["paper"]
);

export const teacherAplFormModalClasses = classes;

const getTeacherAplFormModalRootStyles = (theme: Theme) => css`
  ${classNames.paper} {
    ${getTeacherAplFormModalPaperStyles(theme)}
  }
`;

const getTeacherAplFormModalPaperStyles = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  background-color: ${theme.palette.navy};
`;

const getTeacherAplFormModalContentStyles = (theme: Theme) => css``;

type TeacherAplFormModalStyledComponents = "root" | "content";

const getTeacherAplFormModalCss = (
  theme: Theme
): Record<TeacherAplFormModalStyledComponents, SerializedStyles> => ({
  root: getTeacherAplFormModalRootStyles(theme),
  content: getTeacherAplFormModalContentStyles(theme),
});

export default getTeacherAplFormModalCss;
