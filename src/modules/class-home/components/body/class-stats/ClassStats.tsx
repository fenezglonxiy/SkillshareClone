/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import getClassStatsCss from "./__styles__/getClassStatsCss";
import Typography from "../../../../../Typography/Typography";
import ClassLevelIndicator from "./ClassLevelIndicator";

const ClassStats = () => {
  const theme = useTheme();
  const styled = getClassStatsCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.statCard}>
        <ClassLevelIndicator />
      </div>
      <div css={styled.statCard}>
        <Typography variant="h2">139</Typography>
        <Typography variant="body2Medium" color="charcoal">
          Students
        </Typography>
      </div>
      <div css={styled.statCard}>
        <Typography variant="h2">1</Typography>
        <Typography variant="body2Medium" color="charcoal">
          Project
        </Typography>
      </div>
    </div>
  );
};

export default ClassStats;
