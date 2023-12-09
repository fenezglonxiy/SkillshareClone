/** @jsxImportSource @emotion/react */

import { Card, useTheme } from "@mui/material";
import ClassCardMedia from "./ClassCardMedia";
import getClassCardCss from "./__styles__/getClassCardCss";
import ClassCardContent from "./ClassCardContent";
import ClassCardActions from "./ClassCardActions";

export type ClassCardProps = {
  classTitle: string;
  classLink: string;
  classHeroImageSrc: string;
  classNumStudents: string;
  classTotalLessonsTime: string;

  /**
   * Defines the badge of class.
   * @default undefined
   */
  classBadge?: "staffPick" | "original";

  teacherName: string;
  teacherLink: string;

  /**
   * Defines whether class is new.
   * @default false
   */
  isNew?: boolean;

  /**
   * Defines whether class is featured.
   * @default false
   */
  featured?: boolean;
};

const ClassCard = (props: ClassCardProps) => {
  const {
    classTitle,
    classLink,
    classHeroImageSrc,
    classNumStudents,
    classTotalLessonsTime,
    teacherName,
    teacherLink,
    classBadge,
    isNew,
    featured,
    ...rest
  } = props;
  const theme = useTheme();
  const styled = getClassCardCss(theme, featured);

  return (
    <Card css={styled.root} {...rest}>
      <a href={classLink} css={styled.classLink}>
        {classTitle}
      </a>
      <ClassCardMedia
        src={classHeroImageSrc}
        classBadge={classBadge}
        isNew={isNew}
      />
      <ClassCardContent
        classNumStudents={classNumStudents}
        classTotalLessonsTime={classTotalLessonsTime}
        classTitle={classTitle}
        teacherName={teacherName}
        teacherCareer="Illustrator/Designer for Motion Graphics"
        teacherLink={teacherLink}
        featured={featured}
      />
      {!featured && (
        <ClassCardActions teacherName={teacherName} teacherLink={teacherLink} />
      )}
    </Card>
  );
};

export default ClassCard;
