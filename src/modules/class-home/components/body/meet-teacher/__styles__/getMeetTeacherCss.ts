import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getAuthorDetailsStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(20)};
`;

type MeetTeacherStyledComponents = "authorDetails";

const getMeetTeacherCss = (
  theme: Theme
): Record<MeetTeacherStyledComponents, SerializedStyles> => ({
  authorDetails: getAuthorDetailsStyles(theme),
});

export default getMeetTeacherCss;
