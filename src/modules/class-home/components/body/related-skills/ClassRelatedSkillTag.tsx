/** @jsxImportSource @emotion/react */

import React from "react";
import Button from "../../../../../Button/Button";
import { Theme } from "@mui/material";
import getClassRelatedSkillTagCss from "./__styles__/getClassRelatedSkillTagCss";

type Props = {
  href: string;
  label: string;
  theme: Theme;
};

const ClassRelatedSkillTag: React.FC<Props> = ({ href, label, theme }) => {
  const css = getClassRelatedSkillTagCss(theme);

  return (
    <Button variant="ghost" color="navy" href={href} css={css}>
      {label}
    </Button>
  );
};

export default ClassRelatedSkillTag;
