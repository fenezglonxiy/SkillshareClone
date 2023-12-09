/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import AuthorDetails from "../../../author-details/components/AuthorDetails";
import ProjectStats from "./ProjectStats";
import getProjectSideInfoCss from "./__styles__/getProjectSideInfoCss";

type Props = {
  theme: Theme;
  className?: string;
};

const ProjectSideInfo: React.FC<Props> = ({ theme, ...rest }) => {
  const css = getProjectSideInfoCss(theme);

  return (
    <div css={css} {...rest}>
      <AuthorDetails contribution="project" />
      <ProjectStats theme={theme} />
    </div>
  );
};

export default ProjectSideInfo;
