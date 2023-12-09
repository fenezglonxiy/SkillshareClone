import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const {
  classes: formSupportTextClasses,
  classNames: formSupportTextClassNames,
} = generateEmotionClassNames("formSupportText", ["root"]);

const getFormSupportTextCss = (theme: Theme): SerializedStyles => css`
  &${formSupportTextClassNames.root} {
    text-align: left;
    color: ${theme.palette.white};
    ${theme.typography.body2};
  }
`;

export default getFormSupportTextCss;
