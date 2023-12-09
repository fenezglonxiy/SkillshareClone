/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import { ClassRatingVariant } from "./constants";
import getClassRatingListCss from "./__styles__/getClassRatingListCss";
import React from "react";

type Props = {
  theme: Theme;
  children: React.ReactNode;

  /**
   * The variant to use.
   * Forwarded automatically by parent `ClassRatingSection`, do not set directly.
   */
  variant: ClassRatingVariant;
} & React.ComponentPropsWithRef<"ul">;

const ClassRatingList: React.FC<Props> = ({
  theme,
  children,
  variant,
  ...rest
}) => {
  const css = getClassRatingListCss(theme, variant);

  return (
    <ul {...rest} css={css}>
      {children}
    </ul>
  );
};

export default ClassRatingList;
