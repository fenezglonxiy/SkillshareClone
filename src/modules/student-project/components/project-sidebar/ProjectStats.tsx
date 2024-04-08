/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Typography from "../../../../Typography/Typography";
import SvgHeart from "../../assets/SvgHeart";
import React from "react";
import getProjectStatsCss from "./__styles__/getProjectStatsCss";

type Props = {
  theme: Theme;
};

const ProjectStats: React.FC<Props> = ({ theme }) => {
  const styled = getProjectStatsCss(theme);

  return (
    <div css={styled.root}>
      <button css={styled.likeProjectButton} aria-label="like">
        <SvgHeart size="large" />
      </button>
      <div css={styled.projectStatsInfo}>
        <span>62 likes</span>
        <span>11 comments</span>
        <span>509 views</span>
      </div>
    </div>
  );
};

export default ProjectStats;
