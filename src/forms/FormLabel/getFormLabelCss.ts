import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const { classes: formLabelClasses, classNames: formLabelClassNames } =
  generateEmotionClassNames("form-label", [
    "root",
    "asterisk",
    "focused",
    "error",
    "optionalLabel",
  ]);

const getFormLabelCss = (theme: Theme): SerializedStyles => css`
  &${formLabelClassNames.root} {
    margin-bottom: ${theme.spacing(16)};
    ${theme.typography.body2Bold};
  }

  & ${formLabelClassNames.asterisk} {
    display: none;
  }

  &${formLabelClassNames.focused}, &${formLabelClassNames.error} {
    &${formLabelClassNames.root} {
      color: unset;
    }
  }

  & ${formLabelClassNames.optionalLabel} {
    display: inline-block;
  }
`;

export default getFormLabelCss;
