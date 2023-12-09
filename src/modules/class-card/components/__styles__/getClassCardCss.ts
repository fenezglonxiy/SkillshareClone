import { SerializedStyles, css } from "@emotion/react";
import { classMediaClassNames } from "./getClassCardMediaCss";
import { classCardContentClassNames } from "./getClassCardContentCss";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme, featured?: boolean) => css`
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(184, 184, 184, 0.5);
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 8px;

  ${featured && getFeaturedRootStyles(theme)}
`;

const getFeaturedRootStyles = (theme: Theme) => css`
  &:hover,
  &:focus {
    box-shadow: 0 4px 8px 0 rgb(184 184 184 / 50%);

    ${classCardContentClassNames.classTitle} {
      color: ${theme.palette.charcoal};
    }
  }

  ${theme.breakpoints.up("md")} {
    display: flex;
  }
`;

const getClassLinkStyles = (theme: Theme, featured?: boolean) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;

  ${!featured &&
  `
  &:hover,
  &:focus {
    & + ${classMediaClassNames.root} ${classMediaClassNames.playBtn} {
      display: block;
    }
  }

  &:focus {
    & + ${classMediaClassNames.root} ${classMediaClassNames.playBtn} {
      & path:last-of-type {
        fill: ${theme.palette.wanderGreen};
      }
    }
  }
  `}
`;

type ClassCardStyledComponents = "root" | "classLink";

const getClassCardCss = (
  theme: Theme,
  featured?: boolean
): Record<ClassCardStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme, featured),
  classLink: getClassLinkStyles(theme, featured),
});

export default getClassCardCss;
