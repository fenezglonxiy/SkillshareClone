/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Typography from "../../../../../Typography/Typography";
import SvgOutlinedPlay from "../../../assets/SvgOutlinedPlay";
import getClassLessonPlayItemCss from "./__styles__/getClassLessonPlayItemCss";
import SvgLock from "../../../assets/SvgLock";
import SvgPause from "../../../assets/SvgPause";

export type ClassLessonPlayItemProps = {};

const ClassLessonPlayItem = () => {
  const theme = useTheme();
  const styled = getClassLessonPlayItemCss(theme);

  return (
    <li css={styled.root} role="button">
      <SvgLock fill="currentColor" />
      <Typography variant="body2" css={styled.lessonTitle}>
        Introduction
      </Typography>
      <Typography variant="body2" css={styled.videoLength}>
        1:47
      </Typography>
    </li>
  );
};

export default ClassLessonPlayItem;
