/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Button from "../../../Button/Button";
import getFollowButtonCss from "./__styles__/getFollowButtonCss";
import React from "react";

type Props = {
  shouldDisplay: boolean;
  variant?: "link" | "outlined";
};

const FollowButton: React.FC<Props> = ({ shouldDisplay, variant }) => {
  const theme = useTheme();
  const css = getFollowButtonCss(theme);

  if (!shouldDisplay) {
    return null;
  }

  return (
    <Button variant="link" color="violet" css={css}>
      Follow
    </Button>
  );
};

export default FollowButton;
