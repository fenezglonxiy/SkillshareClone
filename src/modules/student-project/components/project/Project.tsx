/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Button from "../../../../Button/Button";
import RichContentWrapper from "../../../../RichContentWrapper/RichContentWrapper";
import Typography from "../../../../Typography/Typography";
import SvgChainLink from "../../assets/SvgChainLink";
import React from "react";
import getProjectCss from "./getProjectCss";

type Props = {
  theme: Theme;
  className?: string;
};

const Project: React.FC<Props> = ({ theme, className }) => {
  const styled = getProjectCss(theme);

  return (
    <div className={className} css={styled.root}>
      <div css={styled.copyProjectLinkBtnWrapper}>
        <Button
          variant="ghost"
          color="navy"
          size="large"
          icon={<SvgChainLink />}
          iconPosition="start"
        >
          Copy Project Link
        </Button>
      </div>

      <div css={styled.project}>
        <Typography
          id="test"
          variant="h3"
          component="h2"
          css={styled.projectTitle}
        >
          My first montage - kim's journey
        </Typography>

        <img
          src="https://static.skillshare.com/uploads/project/445748/cover_450_c0b9df9b06fe8536a9d0981acaf536da.jpg"
          alt=""
          css={styled.projectThumbnail}
        />

        <RichContentWrapper css={styled.projectContentWrapper}>
          <p>
            Thank you for all your likes and comments, it’s really gratifing :)
            If you appreciate my video, don’t forget to pass by my youtube
            channel and to smash the like button !!
          </p>
        </RichContentWrapper>
      </div>
    </div>
  );
};

export default Project;
