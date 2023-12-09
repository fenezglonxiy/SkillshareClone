/** @jsxImportSource @emotion/react */

import { Avatar, useTheme } from "@mui/material";
import Typography from "../../../Typography/Typography";
import getFeaturedTeacherLinkCss from "./__styles__/getFeaturedTeacherLinkCss";

type Props = {
  teacherName: string;
  teacherCareer: string;
  teacherLink: string;
  classNumStudents: string;
};

const FeaturedTeacherLink: React.FC<Props> = ({
  teacherName,
  teacherCareer,
  teacherLink,
  classNumStudents,
}) => {
  const theme = useTheme();
  const styled = getFeaturedTeacherLinkCss(theme);

  return (
    <a css={styled.root} href={teacherLink}>
      <Avatar alt={`${teacherName} avatar`} src="">
        Z
      </Avatar>

      <div css={styled.teacherAndClassInfo}>
        <Typography variant="body2" color="black">
          {teacherName}
        </Typography>
        <Typography variant="caption" color="black">
          {teacherCareer}
        </Typography>
        <Typography variant="caption" color="black">
          {classNumStudents} students
        </Typography>
      </div>
    </a>
  );
};

export default FeaturedTeacherLink;
