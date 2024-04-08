import { Theme, css } from "@mui/material";
import {
  CONTENT_COLUMN_HEIGHT,
  SECTION_WIDTH,
  CONTENT_COLUMN_WIDTH,
  TOOLTIP_OFFSET_LEFT,
  TOOLTIP_OFFSET_TOP,
} from "./constants";

import generateEmotionClassNames from "../../../../utils/generateEmotionClassNames";
import { SerializedStyles } from "@emotion/react";

export const { classes: browseMenuClasses, classNames: browseMenuClassNames } =
  generateEmotionClassNames("browse-menu", ["column", "section"]);

const getTooltipStyles = () => css`
  margin: ${TOOLTIP_OFFSET_TOP}px 0 0 ${TOOLTIP_OFFSET_LEFT}px !important;
  border-radius: 8px;
`;

const getWrapperStyles = (theme: Theme) => css`
  padding: ${theme.spacing(16, 4, 12)};
`;

const getContentStyles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, ${CONTENT_COLUMN_WIDTH}px);
  grid-template-rows: ${CONTENT_COLUMN_HEIGHT}px;

  & > ${browseMenuClassNames["column"]}:last-of-type {
    padding-left: ${theme.spacing(16)};
    display: flex;

    & > ${browseMenuClassNames["section"]} {
      width: 100%;
      padding: ${theme.spacing(18, 36, 18, 28)};
    }
  }
`;

const getSectionContainerStyles = (theme: Theme) => css`
  display: grid;
  height: 100%;
  padding: ${theme.spacing(16, 12)};
`;

const getSectionStyles = () => css`
  width: ${SECTION_WIDTH}px;
`;

const getHeadingStyles = (theme: Theme) => css`
  padding: ${theme.spacing(0, 9, 0, 16)};
  margin-bottom: ${theme.spacing(8)};

  & > p {
    margin-bottom: 4px;
  }
`;

type BrowseMenuStyledComponents =
  | "tooltip"
  | "wrapper"
  | "content"
  | "sectionContainer"
  | "section"
  | "heading";

const getBrowseMenuCss = (
  theme: Theme
): Record<BrowseMenuStyledComponents, SerializedStyles> => ({
  tooltip: getTooltipStyles(),
  wrapper: getWrapperStyles(theme),
  content: getContentStyles(theme),
  sectionContainer: getSectionContainerStyles(theme),
  section: getSectionStyles(),
  heading: getHeadingStyles(theme),
});

export default getBrowseMenuCss;
