/** @jsxImportSource @emotion/react */

import React from "react";
import Button from "../../../../Button/Button";
import Typography from "../../../../Typography/Typography";
import { Box, Theme } from "@mui/material";
import Comment from "./Comment";
import CommentList from "./CommentList";
import {
  AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP,
  COMMENT_AUTHOR_DETAILS_AVATAR_SIZE,
} from "../../../author-details/components/constants";

type Props = {
  theme: Theme;
  className?: string;
};

const ProjectComments: React.FC<Props> = ({ theme, ...rest }) => {
  return (
    <div {...rest}>
      <Typography variant="label">Comments</Typography>

      <CommentList theme={theme}>
        <Comment theme={theme} replies={[{}, {}, {}]} />
        <Comment theme={theme} />
        <Comment theme={theme} />
      </CommentList>

      <Box
        textAlign="right"
        paddingLeft={`${
          COMMENT_AUTHOR_DETAILS_AVATAR_SIZE + AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP
        }px`}
      >
        <Button
          variant="ghost"
          color="navy"
          size="large"
          disableGutters
          fullWidth
        >
          Load more comments
        </Button>
      </Box>
    </div>
  );
};

export default ProjectComments;
