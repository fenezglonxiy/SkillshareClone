import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { AuthorDetailsProps } from "../AuthorDetails";
import {
  AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP,
  CLASS_AUTHOR_DETAILS_AVATAR_SIZE,
  COMMENT_AUTHOR_DETAILS_AVATAR_SIZE,
  PROJECT_AUTHOR_DETAILS_AVATAR_SIZE,
  REPLY_AUTHOR_DETAILS_AVATAR_SIZE,
  REVIEW_AUTHOR_DETAILS_AVATAR_SIZE,
} from "../constants";

const getRootStyles = (theme: Theme, props: AuthorDetailsProps) => css`
  display: flex;
  gap: ${theme.spacing(AUTHOR_AVATAR_AND_AUTHOR_INFO_GAP)};

  ${props.contribution === "review" && getReviewContributionRootStyles(theme)}
`;

const getReviewContributionRootStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("sm")} {
    display: block;
    text-align: center;
  }
`;

const getAuthorAvatarStyles = (props: AuthorDetailsProps) => {
  const size: Record<AuthorDetailsProps["contribution"], number> = {
    reply: REPLY_AUTHOR_DETAILS_AVATAR_SIZE,
    comment: COMMENT_AUTHOR_DETAILS_AVATAR_SIZE,
    project: PROJECT_AUTHOR_DETAILS_AVATAR_SIZE,
    class: CLASS_AUTHOR_DETAILS_AVATAR_SIZE,
    review: REVIEW_AUTHOR_DETAILS_AVATAR_SIZE,
  } as const;

  return css`
    width: ${size[props.contribution]}px;
    height: ${size[props.contribution]}px;
  `;
};

const getAuthorProfileLinkStyles = (
  theme: Theme,
  props: AuthorDetailsProps,
  shouldDisplayFollowButton?: boolean
) => css`
  ${shouldDisplayFollowButton && `display: flex;`}

  margin-bottom: ${theme.spacing(2)};

  ${props.contribution === "class"
    ? css`
        ${theme.typography.captionBold}
      `
    : css`
        ${theme.typography.body2Bold}
      `}
`;

const getAuthorHeadlineStyles = (
  theme: Theme,
  props: AuthorDetailsProps
) => css`
  ${props.contribution === "project" || props.contribution === "review"
    ? css`
        ${theme.typography.body2Medium}
      `
    : css`
        ${theme.typography.captionMedium}
      `}
`;

const getTagWrapperStyles = (theme: Theme) => css`
  ${theme.typography.captionBold};
  margin-top: ${theme.spacing(6)};
`;

type AuthorDetailsStyledComponents =
  | "root"
  | "authorAvatar"
  | "authorProfileLink"
  | "authorHeadline"
  | "tagWrapper";

const getAuthorDetailsCss = (
  theme: Theme,
  props: AuthorDetailsProps,
  shouldDisplayFollowButton?: boolean
): Record<AuthorDetailsStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme, props),
  authorAvatar: getAuthorAvatarStyles(props),
  authorProfileLink: getAuthorProfileLinkStyles(theme, props),
  authorHeadline: getAuthorHeadlineStyles(theme, props),
  tagWrapper: getTagWrapperStyles(theme),
});

export default getAuthorDetailsCss;
