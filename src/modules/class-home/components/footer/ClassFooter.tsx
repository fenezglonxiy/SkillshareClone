/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import WhyJoin from "./why-join/WhyJoin";
import React from "react";
import getClassFooterCss from "./__styles__/getClassFooterCss";
import LearnFromAnywhere from "./learn-from-anywhere/LearnFromAnywhere";

type Props = {
  theme: Theme;
};

const ClassFooter: React.FC<Props> = ({ theme }) => {
  const css = getClassFooterCss(theme);

  return (
    <footer css={css}>
      <WhyJoin theme={theme} />
      <LearnFromAnywhere theme={theme} />
    </footer>
  );
};

export default ClassFooter;
