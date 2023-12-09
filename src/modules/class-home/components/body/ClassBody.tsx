/** @jsxImportSource @emotion/react */

import { useMediaQuery, useTheme } from "@mui/material";
import AuthForm from "./auth-form/AuthForm";
import getClassBodyCss from "./__styles__/getClassBodyCss";
import AuthPromoBanner from "./auth-promo-banner/AuthPromoBanner";
import ClassAgenda from "./class-agenda/ClassAgenda";
import ClassStats from "./class-stats/ClassStats";
import AboutClass from "./about-class/AboutClass";
import MeetTeacher from "./meet-teacher/MeetTeacher";
import ClassRelatedSkills from "./related-skills/ClassRelatedSkills";
import ClassProject from "./class-project/ClassProject";
import StudentProjectShowcase from "./student-project/StudentProjectShowcase";
import ClassRatings from "./class-ratings/ClassRatings";
import ClassReviews from "./class-reviews/ClassReviews";

const ClassBody = () => {
  const theme = useTheme();
  const styled = getClassBodyCss(theme);
  const isLgBreakpoint = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div css={styled.root}>
      {isLgBreakpoint && <AuthPromoBanner />}

      <div css={styled.classDetails}>
        <div css={styled.classMainContent}>
          <ClassAgenda />
          <ClassStats />
          <AboutClass />
          <MeetTeacher />
          <ClassRelatedSkills theme={theme} />
          <ClassProject />
          <StudentProjectShowcase theme={theme} />

          <div css={styled.classReviewsWrapper}>
            <ClassRatings theme={theme} />
            <ClassReviews theme={theme} />
          </div>
        </div>
        <div css={styled.classSidebar}>
          <AuthForm />
          {!isLgBreakpoint && <AuthPromoBanner />}
        </div>
      </div>
    </div>
  );
};

export default ClassBody;
