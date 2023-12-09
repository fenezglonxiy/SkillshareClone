import { css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const { classes: tabWrapperClasses, classNames: tabWrapperClassNames } =
  generateEmotionClassNames("tabWrapper", ["root"]);

const getTabWrapperCss = (theme: Theme) => css`
  ${theme.typography.captionBold};

  &::after {
    content: "•";
    margin: ${theme.spacing(0, 4)};
  }

  ${theme.breakpoints.up("xs")} {
    ${theme.typography.body2Bold};

    &::after {
      margin: ${theme.spacing(0, 8)};
    }
  }
`;

export default getTabWrapperCss;
