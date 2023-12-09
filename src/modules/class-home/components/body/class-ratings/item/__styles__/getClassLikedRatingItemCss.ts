import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  height: 35px;
  padding: ${theme.spacing(0, 12)};
  text-align: left;
  background-color: ${theme.palette.white};
  border-radius: 4px;

  & * {
    vertical-align: middle;
  }
`;

const getLikeStatWrapperStyles = (theme: Theme) => css`
  margin-right: ${theme.spacing(8)};

  & > svg {
    display: inline;
    margin-right: ${theme.spacing(4)};
  }
`;

type ClassLikedRatingItemStyledComponents = "root" | "likeStatWrapper";

const getClassLikedRatingItemCss = (
  theme: Theme
): Record<ClassLikedRatingItemStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  likeStatWrapper: getLikeStatWrapperStyles(theme),
});

export default getClassLikedRatingItemCss;
