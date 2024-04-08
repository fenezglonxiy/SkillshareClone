/** @jsxImportSource @emotion/react */

import { Avatar, Container, useTheme } from "@mui/material";
import Link from "../../../../Link/Link";
import Typography from "../../../../Typography/Typography";
import SvgStaffPick from "../../../../assets/SvgStaffPick";
import getClassHeaderCss from "./getClassHeaderCss";
import SvgOriginal from "../../../../assets/SvgOriginal";
import VideoPreviewItem from "../../../item-lecture/components/VideoPreviewItem";

type Props = {
  classPromoVideoSrc: string;
  classBadge?: "staffPick" | "original";
  classTitle: string;
  teacherLink: string;
  teacherName: string;
  teacherAvatarSrc: string;
};

const ClassHeader = () => {
  const theme = useTheme();
  const styled = getClassHeaderCss(theme, "original");

  return (
    <header css={styled.root}>
      <div css={styled.container}>
        <div css={styled.videoPlayerWrapper}>
          <VideoPreviewItem />
        </div>
        <div css={styled.classTitleContainer}>
          <div css={styled.classBadgeWrapper}>
            <SvgOriginal css={styled.classBadge} />
          </div>
          <Typography component="h1" color="white" css={styled.classTitle}>
            Design Your Virtual Persona: Create a VR Avatar With Unreal Engine
          </Typography>
          <div css={styled.teacherLink}>
            <Avatar css={styled.teacherAvatar}>Z</Avatar>
            <Link
              href="/"
              underline="none"
              variant="body2Medium"
              color="concrete"
            >
              Teflon Sega, Musician, World Builder
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ClassHeader;
