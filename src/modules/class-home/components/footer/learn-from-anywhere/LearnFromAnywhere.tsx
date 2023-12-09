/** @jsxImportSource @emotion/react */

import { Theme, useMediaQuery } from "@mui/material";
import Divider from "../../../../../Divider/Divider";
import Typography from "../../../../../Typography/Typography";
import React from "react";
import getLearnFromAnywhereCss from "./getLearnFromAnywhereCss";

type Props = {
  theme: Theme;
};

const LearnFromAnywhere: React.FC<Props> = ({ theme }) => {
  const styled = getLearnFromAnywhereCss(theme);
  const isLgBreakpoint = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div css={styled.root}>
      <div css={styled.learnFromAnywhereDetails}>
        <Typography
          variant="h1"
          component="h2"
          css={styled.learnFromAnywhereTitle}
        >
          Learn From Anywhere
        </Typography>

        <Divider
          color="violet"
          size="medium"
          orientation={!isLgBreakpoint ? "horizontal" : "vertical"}
          css={styled.divider}
        />

        <div css={styled.learnFromAnywhereText}>
          <Typography variant="body1">
            Take classes on the go with the{" "}
            <Typography variant="body1Bold" component="span">
              Skillshare app
            </Typography>
            . Stream or download to watch on the plane, the subway, or wherever
            you learn best.
          </Typography>

          <div css={styled.mobileDevicesDownloadLinkContainer}>
            <a href="/">
              <img
                src="/images/webp/mobile-apple-small.webp"
                alt="mobile-apple-small"
                css={styled.appleStoreImage}
                loading="lazy"
              />
            </a>
            <a href="/">
              <img
                src="/images/webp/mobile-andr-small.webp"
                alt="mobile-andr-small"
                css={styled.googlePlayImage}
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div css={styled.phoneMockupLocd}></div>
      </div>
    </div>
  );
};

export default LearnFromAnywhere;
