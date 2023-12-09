/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Button from "../../../../../Button/Button";
import Typography from "../../../../../Typography/Typography";
import React from "react";
import getClassRelatedSkillsCss from "./__styles__/getClassRelatedSkillsCss";
import ClassRelatedSkillTag from "./ClassRelatedSkillTag";

type Props = {
  theme: Theme;
};

const ClassRelatedSkills: React.FC<Props> = ({ theme }) => {
  const styled = getClassRelatedSkillsCss(theme);

  return (
    <div>
      <Typography variant="h3">Related Skills</Typography>

      <div css={styled.container}>
        <ClassRelatedSkillTag href="/" label="Animation" theme={theme} />
        <ClassRelatedSkillTag href="/" label="3D Animation" theme={theme} />
        <ClassRelatedSkillTag href="/" label="3D Design" theme={theme} />
        <ClassRelatedSkillTag href="/" label="Creative" theme={theme} />
        <ClassRelatedSkillTag href="/" label="Virtual Reality" theme={theme} />
        <ClassRelatedSkillTag href="/" label="Virtualization" theme={theme} />
        <ClassRelatedSkillTag
          href="/"
          label="Skillshare Original"
          theme={theme}
        />
      </div>
    </div>
  );
};

export default ClassRelatedSkills;
