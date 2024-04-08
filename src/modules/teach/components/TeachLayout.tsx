import { useTheme } from "@mui/material";
import PageWrapper from "../../page-wrapper/components/PageWrapper";
import TeachHero from "./TeachHero";

const TeachLayout = () => {
  const theme = useTheme();

  return (
    <PageWrapper title="Skillshare" bgcolor="#fafafa">
      <TeachHero theme={theme} />
    </PageWrapper>
  );
};

export default TeachLayout;
