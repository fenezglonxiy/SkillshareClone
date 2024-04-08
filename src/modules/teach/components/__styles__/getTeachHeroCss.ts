import { Theme, css } from "@mui/material";
import { TEACH_HERO_BG_IMAGE } from "../../constants/cssConstants";
import { SerializedStyles } from "@emotion/react";

const getRootStyles = (theme: Theme) => css`
  position: relative;
  text-align: center;
  color: ${theme.palette.white};
`;

const getTeachHeroContentStyles = (theme: Theme) => css`
  height: 30dvw;
  min-height: 325px;
  max-height: 440px;
  padding: ${theme.spacing(0, 16)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing(16)};
  background-image: url(${TEACH_HERO_BG_IMAGE});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const getTeachHeroTitleStyles = (theme: Theme) => css`
  ${theme.typography.h1};

  ${theme.breakpoints.up("xl")} {
    ${theme.typography.display};
  }
`;

const getTeachHeroNoteCardStyles = (theme: Theme) => css`
  padding: ${theme.spacing(24)};
  background-color: ${theme.palette.navy};

  & > button {
    margin-top: ${theme.spacing(16)};
  }

  ${theme.breakpoints.up("xl")} {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 600px;
    transform: translate(-50%, 0);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

type TeachHeroStyledComponents =
  | "root"
  | "teachHeroContent"
  | "teachHeroTitle"
  | "teachHeroNoteCard";

const getTeachHeroCss = (
  theme: Theme
): Record<TeachHeroStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  teachHeroContent: getTeachHeroContentStyles(theme),
  teachHeroTitle: getTeachHeroTitleStyles(theme),
  teachHeroNoteCard: getTeachHeroNoteCardStyles(theme),
});

export default getTeachHeroCss;
