import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getPaperStyles = (theme: Theme) => css`
  max-width: ${theme.breakpoints.values.xl}px;
`;

type StudentProjectModalStyledComponents = "paper";

const getStudentProjectModalCss = (
  theme: Theme
): Record<StudentProjectModalStyledComponents, SerializedStyles> => ({
  paper: getPaperStyles(theme),
});

export default getStudentProjectModalCss;
