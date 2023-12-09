/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef } from "react";
import getRichContentWrapperCss from "./getRichContentWrapperCss";
import { useTheme } from "@mui/material";

const RichContentWrapper = ({
  children,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const theme = useTheme();
  const css = getRichContentWrapperCss(theme);

  return (
    <div css={css} {...rest}>
      {children}
    </div>
  );
};

export default RichContentWrapper;
