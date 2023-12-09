/** @jsxImportSource @emotion/react */

import React from "react";
import Link from "../../../../Link/Link";
import getClassReferenceCss from "./__styles__/getClassReferenceCss";
import { Theme } from "@mui/material";

type Props = {
  theme: Theme;
};

const ClassReference: React.FC<Props> = ({ theme }) => {
  const styled = getClassReferenceCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.classThumbnail}>
        <Link href="/" display="block">
          <img
            src="https://static.skillshare.com/uploads/project/445748/cover_450_c0b9df9b06fe8536a9d0981acaf536da.jpg"
            alt=""
          />
        </Link>
      </div>
      <div css={styled.classInfo}>
        <div>
          <Link href="/" variant="inherit" color="violet" underline="hover">
            Video Editing with Adobe Premiere Pro for Beginners
          </Link>
        </div>
        <div>
          <Link href="/" variant="inherit" color="charcoal" underline="none">
            Jordy Vandeput
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassReference;
