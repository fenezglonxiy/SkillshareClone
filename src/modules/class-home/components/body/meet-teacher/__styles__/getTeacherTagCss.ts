import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const getTeacherTagCss = (theme: Theme, isTopTeacher?: boolean) => css`
  display: inline-block;
  padding: ${theme.spacing(2, 6)};
  color: ${theme.palette.wanderGreen};
  background: ${theme.palette.navy};
  border-radius: 4px;

  ${isTopTeacher &&
  `
    &::before {
      content: "✭";
      margin-right: ${theme.spacing(2)};
    }
  `}
`;

export default getTeacherTagCss;
