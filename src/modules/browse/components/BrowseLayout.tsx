/** @jsxImportSource @emotion/react */

import { Outlet, useLocation } from "react-router-dom";
import BrowseSelect from "./select/BrowseSelect";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import BrowseHero from "./hero/BrowseHero";
import { useEffect, useState } from "react";
import { BrowseRouteNamesValues } from "../constants/routes";
import BrowseSidebar from "./sidebar/BrowseSidebar";
import getBrowseLayoutCss from "./__styles__/getBrowseLayoutCss";
import Divider from "../../../Divider/Divider";
import BrowseContext from "./BrowseContext";
import Button from "../../../Button/Button";
import BrowseExplore from "./explore/BrowseExplore";
import { routeDescription, routeLabel } from "./constants";
import BrowseRelatedSkills from "./related-skills/BrowseRelatedSkills";
import ClassCardSection from "../../class-card/section/ClassCardSection";
import ClassCardGrid from "../../class-card/grid/ClassCardGrid";
import ClassCard from "../../class-card/components/ClassCard";
import PageWrapper from "../../page-wrapper/components/PageWrapper";

const TEST_DATA1 = [
  {
    classTitle: "Adobe Fresco: Digital Illustration with Hand Lettering",
    classLink: "/",
    classHeroImageSrc: "/images/448-252.jpg",
    classNumStudents: "30,960",
    classTotalLessonsTime: "24h24m",
    teacherName: "Andy J. Pizza",
    teacherLink: "/",
  },
  {
    classTitle: "Adobe Fresco: Digital Illustration with Hand Lettering",
    classLink: "/",
    classHeroImageSrc: "/images/448-252.jpg",
    classNumStudents: "30,960",
    classTotalLessonsTime: "24h24m",
    teacherName: "Test",
    teacherLink: "/",
  },
  {
    classTitle: "Adobe Fresco: Digital Illustration with Hand Lettering",
    classLink: "/",
    classHeroImageSrc: "/images/448-252.jpg",
    classNumStudents: "30,960",
    classTotalLessonsTime: "24h24m",
    teacherName: "Test",
    teacherLink: "/",
  },
];

const BrowseLayout = () => {
  const theme = useTheme();
  const styled = getBrowseLayoutCss(theme);
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();

  const [routeName, setRouteName] =
    useState<BrowseRouteNamesValues>("all-classes");

  const updateRouteName = (newRouteName: BrowseRouteNamesValues) => {
    setRouteName(newRouteName);
  };

  useEffect(() => {
    let newRouteName = location.pathname.split("/").pop()?.split("?")[0];

    if (newRouteName === "browse") {
      newRouteName = "all-classes";
    }

    setRouteName(newRouteName as BrowseRouteNamesValues);
  }, [location]);

  return (
    <PageWrapper title="" bgcolor="#fafafa">
      <BrowseContext.Provider value={{ routeName, updateRouteName }}>
        <Container maxWidth="xl" css={styled.container} disableGutters>
          {isMdBreakpoint && (
            <div css={styled.leftColumn}>
              <BrowseSidebar routeName={routeName} />
            </div>
          )}

          <div css={styled.rightColumn}>
            {!isMdBreakpoint && (
              <BrowseSelect
                routeName={routeName}
                renderRouteLabel={routeLabel}
              />
            )}
            <BrowseHero
              routeLabel={routeLabel(routeName)}
              routeDescription={routeDescription(routeName)}
            />
            <BrowseRelatedSkills />
            <Divider color="concrete" />
            <div css={styled.classCardWrapper}>
              <ClassCard
                classTitle="From Basic to Bold: Striking Animations For Instagram Using Adobe After Effects"
                classLink="/"
                classHeroImageSrc="/images/original.webp"
                classNumStudents="30,960"
                classTotalLessonsTime="24h24m"
                teacherName="Test"
                teacherLink="/"
                classBadge="original"
                featured
              />
            </div>
            <Outlet />
            <ClassCardSection title="Featured Classes">
              <ClassCardGrid>
                {TEST_DATA1.map((classItem, idx) => (
                  <div key={idx} css={styled.classCardWrapper}>
                    <ClassCard
                      classTitle={classItem.classTitle}
                      classLink={classItem.classLink}
                      classHeroImageSrc={classItem.classHeroImageSrc}
                      classNumStudents={classItem.classNumStudents}
                      classTotalLessonsTime={classItem.classTotalLessonsTime}
                      teacherName={classItem.teacherName}
                      teacherLink={classItem.teacherLink}
                      classBadge="staffPick"
                    />
                  </div>
                ))}
              </ClassCardGrid>
            </ClassCardSection>

            <div css={styled.seeAllBtnWrapper}>
              <Button size="small" variant="ghost" color="navy">
                See All
              </Button>
            </div>
            <BrowseExplore />
          </div>
        </Container>
      </BrowseContext.Provider>
    </PageWrapper>
  );
};

export default BrowseLayout;
