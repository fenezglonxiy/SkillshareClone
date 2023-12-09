/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import getClassLevelIndicatorCss from "./__styles__/getClassLevelIndicatorCss";
import Typography from "../../../../../Typography/Typography";

type Props = {};

const ClassLevelIndicator = () => {
  const theme = useTheme();
  const styled = getClassLevelIndicatorCss(theme);

  return (
    <div>
      <div css={styled.levelBarChart} data-value="0">
        <span css={styled.beginnerBar}></span>&nbsp;
        <span css={styled.intermediateBar}></span>&nbsp;
        <span css={styled.advancedBar}></span>
      </div>
      <Typography variant="body2Medium" color="charcoal">
        --
      </Typography>
    </div>
  );
};

export default ClassLevelIndicator;
