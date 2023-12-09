/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import Comment, { CommentProps } from "./Comment";
import getCommentListCss from "./__styles__/getCommentListCss";

type Props = {
  theme: Theme;
  children:
    | React.ReactElement<CommentProps, typeof Comment>
    | Array<React.ReactElement<CommentProps, typeof Comment>>;
};

const CommentList: React.FC<Props> = ({ theme, children }) => {
  const css = getCommentListCss(theme);

  return <ul css={css}>{children}</ul>;
};

export default CommentList;
