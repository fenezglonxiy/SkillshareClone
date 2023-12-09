/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import PageWrapper from "../../../routes/PageWrapper";
import ClassBody from "./body/ClassBody";
import ClassHeader from "./header/ClassHeader";
import ClassFooter from "./footer/ClassFooter";

const ClassLayout = () => {
  const theme = useTheme();

  return (
    <PageWrapper
      title="Class"
      bgcolor={`${theme.palette.canvas}`}
      overflowX="hidden"
    >
      <ClassHeader />
      <ClassBody />
      <ClassFooter theme={theme} />
    </PageWrapper>
  );
};

export default ClassLayout;
