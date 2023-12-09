/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import getProjectSidebarCss from "./__styles__/getProjectSidebarCss";
import Divider from "../../../../Divider/Divider";
import ProjectComments from "./ProjectComments";
import ProjectSideInfo from "./ProjectSideInfo";
import ProjectClass from "./ProjectClass";

type Props = {
  theme: Theme;
};

const ProjectSidebar: React.FC<Props> = ({ theme }) => {
  const styled = getProjectSidebarCss(theme);

  return (
    <div css={styled.backgroundWrapper}>
      <div css={styled.root}>
        <div css={styled.container}>
          <ProjectSideInfo theme={theme} css={styled.projectSideInfo} />
          <Divider color="concrete" />
          <ProjectComments theme={theme} css={styled.projectComments} />
          <Divider color="concrete" />
          <ProjectClass theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
