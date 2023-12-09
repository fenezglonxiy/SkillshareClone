/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Typography from "../../../../../Typography/Typography";
import React from "react";
import getWhyJoinCss from "./__styles__/getWhyJoinCss";
import Reason from "./Reason";
import { REASONS } from "./constants";

type Props = {
  theme: Theme;
};

const WhyJoin: React.FC<Props> = ({ theme }) => {
  const styled = getWhyJoinCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.whyJoinDetails}>
        <Typography variant="display" component="h2">
          Why Join Skillshare?
        </Typography>

        <div css={styled.reasonContainer}>
          {REASONS.map((reason) => (
            <Reason
              key={reason.key}
              theme={theme}
              description={reason.description}
              bgImage={reason.bgImage}
              bgPosition={reason.bgPosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
