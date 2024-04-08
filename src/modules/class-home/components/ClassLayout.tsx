/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import PageWrapper from "../../page-wrapper/components/PageWrapper";
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
      <div data-id="item-scroll-container">
        <ClassHeader />
        <ClassBody />
        <ClassFooter theme={theme} />
      </div>
    </PageWrapper>
  );
};

export default ClassLayout;
