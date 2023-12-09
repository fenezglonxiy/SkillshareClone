import { css } from "@emotion/react";
import { DESKTOP_STUDENT_PROJECT_MEDIA_QUERY } from "../constants";

const getStudentProjectCss = () => css`
  display: grid;

  ${DESKTOP_STUDENT_PROJECT_MEDIA_QUERY} {
    grid-template-columns: 3fr 1fr;
    min-height: calc(90vh + 24px);
  }
`;

export default getStudentProjectCss;
