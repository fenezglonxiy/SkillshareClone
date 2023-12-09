/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import ProjectSidebar from "./project-sidebar/ProjectSidebar";
import Project from "./project/Project";
import getStudentProjectCss from "./__styles__/getStudentProjectCss";

const StudentProject = () => {
  const theme = useTheme();
  const css = getStudentProjectCss();

  return (
    <div css={css}>
      <Project theme={theme} />
      <ProjectSidebar theme={theme} />
    </div>
  );
};

export default StudentProject;
