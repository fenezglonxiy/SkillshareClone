import { css } from "@emotion/react";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";
import { tabWrapperClassNames } from "../Tab/getTabWrapperCss";

export const { classes: tabsClasses, classNames: tabsClassNames } =
  generateEmotionClassNames("tabs", ["indicator"]);

const getTabsCss = () => css`
  min-height: 64px;
  align-items: center;

  ${tabsClassNames.indicator} {
    display: none;
  }

  & ${tabWrapperClassNames.root}:is(:last-of-type)::after {
    content: unset;
  }
`;

export default getTabsCss;
