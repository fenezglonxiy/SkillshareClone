import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;

  & > *:not(:last-of-type) {
    margin-right: ${theme.spacing(16)};
  }
`;

const getStatCardStyles = (theme: Theme) => css`
  height: 142px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing(16)};
  text-align: center;
  background: ${theme.palette.white};
  border-radius: 8px;

  & p {
    margin-top: ${theme.spacing(5)};
  }

  ${theme.breakpoints.up("xxs")} {
    flex: 1;
    max-width: 144px;
    height: 110px;
  }
`;

type ClassStatsStyledComponents = "root" | "statCard";

const getClassStatsCss = (
  theme: Theme
): Record<ClassStatsStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  statCard: getStatCardStyles(theme),
});

export default getClassStatsCss;
