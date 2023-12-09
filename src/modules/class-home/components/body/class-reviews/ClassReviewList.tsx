/** @jsxImportSource @emotion/react */

import React from "react";
import Button from "../../../../../Button/Button";
import { Box, Theme } from "@mui/material";
import getClassReviewListCss from "./__styles__/getClassReviewListCss";

type Props = {
  theme: Theme;
  children?: React.ReactNode;
};

const ClassReviewList: React.FC<Props> = ({ theme, children }) => {
  const css = getClassReviewListCss(theme);

  return (
    <ul css={css}>
      {children}

      <Box textAlign="center">
        <Button variant="ghost" color="navy">
          Load More Reviews
        </Button>
      </Box>
    </ul>
  );
};

export default ClassReviewList;
