import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  padding: ${theme.spacing(32, 16)};
  background-color: ${theme.palette.canvas};
  border-radius: 4px;

  ${theme.breakpoints.up("sm")} {
    display: grid;
    grid-template-columns: 140px auto;
    padding: ${theme.spacing(32, 34, 23, 24)};
  }
`;

const getReviewDetailsStyles = (theme: Theme) => css`
  & > hr {
    margin-block: ${theme.spacing(16)};
  }

  ${theme.breakpoints.down("sm")} {
    margin-top: ${theme.spacing(16)};
  }

  ${theme.breakpoints.up("sm")} {
    margin-left: ${theme.spacing(30)};
  }
`;

const getTimestampWrapperStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(30)};
  text-align: right;
`;

type ClassReviewItemStyledComponents =
  | "root"
  | "reviewDetails"
  | "timestampWrapper";

const getClassReviewItemCss = (
  theme: Theme
): Record<ClassReviewItemStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  reviewDetails: getReviewDetailsStyles(theme),
  timestampWrapper: getTimestampWrapperStyles(theme),
});

export default getClassReviewItemCss;
