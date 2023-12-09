/** @jsxImportSource @emotion/react */

import { CardContent, useTheme } from "@mui/material";
import Typography from "../../../Typography/Typography";
import getClassCardContentCss, {
  classCardContentClasses,
} from "./__styles__/getClassCardContentCss";
import FeaturedTeacherLink from "./FeaturedTeacherLink";

type Props = {
  classNumStudents: string;
  classTotalLessonsTime: string;
  classTitle: string;
  teacherName: string;
  teacherCareer: string;
  teacherLink: string;
  featured?: boolean;
};

const ClassCardContent: React.FC<Props> = ({
  classNumStudents,
  classTotalLessonsTime,
  classTitle,
  teacherName,
  teacherCareer,
  teacherLink,
  featured,
}) => {
  const theme = useTheme();
  const styled = getClassCardContentCss(theme, featured);

  return (
    <CardContent css={styled.root}>
      {!featured && (
        <div css={styled.classStats}>
          <Typography variant="caption" color="charcoal">
            {classNumStudents} students
          </Typography>
          <Typography variant="caption" color="charcoal">
            {classTotalLessonsTime}
          </Typography>
        </div>
      )}

      <div>
        <Typography
          variant={!featured ? "body2Bold" : "h3"}
          component="p"
          className={classCardContentClasses.classTitle}
          css={styled.classTitle}
        >
          {classTitle}
        </Typography>

        {featured && (
          <FeaturedTeacherLink
            teacherName={teacherName}
            teacherCareer={teacherCareer}
            teacherLink={teacherLink}
            classNumStudents={classNumStudents}
          />
        )}
      </div>

      {featured && (
        <Typography variant="caption">{classTotalLessonsTime}</Typography>
      )}
    </CardContent>
  );
};

export default ClassCardContent;
