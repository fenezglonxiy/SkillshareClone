/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import getStudentProjectShowcaseCss from "./__styles__/getStudentProjectShowcaseCss";
import StudentProjectCard from "./card/StudentProjectCard";
import React from "react";

type Props = {
  theme: Theme;
};

const StudentProjectShowcase: React.FC<Props> = ({ theme }) => {
  const styled = getStudentProjectShowcaseCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.container}>
        <StudentProjectCard />
        <StudentProjectCard />
        <StudentProjectCard />
        <StudentProjectCard />
      </div>
    </div>
  );
};

export default StudentProjectShowcase;
