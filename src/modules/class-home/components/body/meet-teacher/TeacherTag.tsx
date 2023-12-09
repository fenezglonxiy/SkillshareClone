/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import getTeacherTagCss from "./__styles__/getTeacherTagCss";

type Props = {
  theme: Theme;

  /**
   * Specifies whether the teacher is a top teacher.
   * @default false
   */
  isTopTeacher?: boolean;
};

const TeacherTag: React.FC<Props> = ({ theme, isTopTeacher }) => {
  const css = getTeacherTagCss(theme, isTopTeacher);

  return <span css={css}>{isTopTeacher && "Top"} Teacher</span>;
};

export default TeacherTag;
