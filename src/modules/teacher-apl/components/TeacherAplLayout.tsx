/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import PageWrapper from "../../page-wrapper/components/PageWrapper";
import Typography from "../../../Typography/Typography";
import getTeacherAplLayoutCss from "./__styles__/getTeacherAplLayoutCss";
import TeacherApplicationFormLanguageSelect from "./TeacherAplFormLanguageSelect";

const TeacherApplicationLayout = () => {
  const theme = useTheme();
  const styled = getTeacherAplLayoutCss(theme);

  return (
    <PageWrapper title="Skillshare" bgcolor={theme.palette.navy}>
      <div css={styled.root}>
        <div css={styled.content}>
          <Typography color="wanderGreen" css={styled.welcome}>
            Welcome, Đạt!
          </Typography>

          <Typography color="white" css={styled.thanks}>
            Thanks for your interest in teaching on Skillshare.
          </Typography>

          <Typography color="white" css={styled.ask}>
            We ask that you fill out your application in the language you plan
            to teach. Choose one of the supported languages below.
          </Typography>

          <TeacherApplicationFormLanguageSelect theme={theme} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default TeacherApplicationLayout;
