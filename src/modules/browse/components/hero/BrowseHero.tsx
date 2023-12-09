/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Button from "../../../../Button/Button";
import Typography from "../../../../Typography/Typography";
import getBrowseHeroCss from "./getBrowseHeroCss";

type Props = {
  routeLabel: string;
  routeDescription: string;
};

const BrowseHero: React.FC<Props> = ({ routeLabel, routeDescription }) => {
  const theme = useTheme();
  const styled = getBrowseHeroCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.banner}>
        <div css={styled.overlay}>
          <Typography variant="h1">{routeLabel}</Typography>
          <Typography>{routeDescription}</Typography>
          <div>
            <Button size="large">Start for Free</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHero;
