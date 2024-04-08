/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Button from "../../../../Button/Button";
import Typography from "../../../../Typography/Typography";
import AuthorDetails from "../../../author-details/components/AuthorDetails";
import SvgHeart from "../../assets/SvgHeart";
import React, { useState } from "react";
import getCommentCss from "./__styles__/getCommentCss";
import CommentList from "./CommentList";

export type CommentProps = {
  theme: Theme;

  /**
   * Specifies whether this comment is a reply.
   */
  isReply?: boolean;

  /**
   * Specifies the replies of this comment when `isReply` is `false`.
   */
  replies?: Array<unknown>;
};

const Comment: React.FC<CommentProps> = ({ theme, isReply, replies }) => {
  const styled = getCommentCss(theme, isReply);
  const [isReplyShowed, setIsReplyShowed] = useState<boolean>(false);

  const showReply = () => setIsReplyShowed(true);

  return (
    <li>
      <AuthorDetails contribution={isReply ? "reply" : "comment"} />

      <div css={styled.commentDetails}>
        <Typography variant="body2">
          how do I play the video not finding anything to play it
        </Typography>

        <div css={styled.commentActions}>
          <div>
            {!isReply && (
              <Button
                variant="link"
                color="violet"
                size="small"
                css={styled.replyButton}
              >
                <span>Reply</span>
                <span>•</span>
              </Button>
            )}

            <span>3 months ago</span>
          </div>

          <div css={styled.commentLikeStat}>
            <span>2</span>
            <button type="button" aria-label="like">
              <SvgHeart size="small" />
            </button>
          </div>
        </div>

        {!isReply && !isReplyShowed && replies !== undefined && (
          <Button
            variant="link"
            color="navy"
            css={styled.showReplyButton}
            onClick={showReply}
          >
            Show {replies.length > 1 ? `${replies.length} Replies` : `1 Reply`}
          </Button>
        )}

        {!isReply && isReplyShowed && replies !== undefined && (
          <CommentList theme={theme}>
            {replies.map((reply) => (
              <Comment theme={theme} isReply />
            ))}
          </CommentList>
        )}
      </div>
    </li>
  );
};

export default Comment;
