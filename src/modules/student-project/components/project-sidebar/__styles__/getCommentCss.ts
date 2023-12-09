import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import {
  AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP,
  COMMENT_AUTHOR_DETAILS_AVATAR_SIZE,
  REPLY_AUTHOR_DETAILS_AVATAR_SIZE,
} from "../../../../author-details/components/constants";

const getCommentDetailsStyles = (theme: Theme, isReply?: boolean) => css`
  padding-left: ${theme.spacing(
    AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP +
      (isReply
        ? REPLY_AUTHOR_DETAILS_AVATAR_SIZE
        : COMMENT_AUTHOR_DETAILS_AVATAR_SIZE)
  )};
  margin-top: ${theme.spacing(8)};

  & button {
    padding: 0;
  }
`;

const getCommentActionsStyles = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing(8)};
  ${theme.typography.caption};
`;

const getCommentLikeStatStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
`;

const getReplyButtonStyles = (theme: Theme) => css`
  & > span:last-of-type {
    margin-inline: ${theme.spacing(4)};
  }

  &:hover,
  &:focus {
    text-decoration: none;

    & > span:first-of-type {
      text-decoration: underline;
    }
  }

  & + span {
    vertical-align: middle;
  }
`;

const getShowReplyButtonStyles = (theme: Theme) => css`
  ${theme.typography.body2Bold};
  text-decoration: underline;
`;

type CommentStyledComponents =
  | "commentDetails"
  | "commentActions"
  | "commentLikeStat"
  | "replyButton"
  | "showReplyButton";

const getCommentCss = (
  theme: Theme,
  isReply?: boolean
): Record<CommentStyledComponents, SerializedStyles> => ({
  commentDetails: getCommentDetailsStyles(theme, isReply),
  commentActions: getCommentActionsStyles(theme),
  commentLikeStat: getCommentLikeStatStyles(theme),
  replyButton: getReplyButtonStyles(theme),
  showReplyButton: getShowReplyButtonStyles(theme),
});

export default getCommentCss;
