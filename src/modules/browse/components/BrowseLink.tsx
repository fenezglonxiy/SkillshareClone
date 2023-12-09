/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Button from "../../../Button/Button";
import getBrowseLinkCss from "./__styles__/getBrowseLinkCss";
import clsx from "clsx";
import React from "react";

type Props = {
  label: string;
  href: string;
  className?: string;
  classes?: Partial<Record<"selected", string>>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BrowseLink: React.FC<Props> = ({
  label,
  href,
  className,
  classes,
  handleClick,
}) => {
  const theme = useTheme();
  const css = getBrowseLinkCss(theme);

  return (
    <Button
      color="tag"
      variant="text"
      hoverStyle="dark"
      href={href}
      css={css}
      className={clsx(className, classes?.selected)}
      onClick={handleClick}
      fullWidth
    >
      {label}
    </Button>
  );
};

export default BrowseLink;
