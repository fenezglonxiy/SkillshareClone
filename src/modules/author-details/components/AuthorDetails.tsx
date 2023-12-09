/** @jsxImportSource @emotion/react */

import { Avatar, Box, useTheme } from "@mui/material";
import getAuthorDetailsCss from "./__styles__/getAuthorDetailsCss";
import Link from "../../../Link/Link";
import Typography from "../../../Typography/Typography";
import TeacherTag from "../../class-home/components/body/meet-teacher/TeacherTag";
import FollowButton from "./FollowButton";
import { AuthorContribution } from "./constants";

export type AuthorDetailsProps = {
  /**
   * Specifies the content that the author contributes.
   */
  contribution: AuthorContribution;
  className?: string;
  teacher?: "normal" | "top";
};

const AuthorDetails: React.FC<AuthorDetailsProps> = (
  props: AuthorDetailsProps
) => {
  const { contribution, teacher, ...rest } = props;
  const shouldDisplayFollowButton =
    contribution === "class" || contribution === "project";
  const theme = useTheme();
  const styled = getAuthorDetailsCss(theme, props, shouldDisplayFollowButton);

  return (
    <div css={styled.root} {...rest}>
      <Box display="inline-block" component="a" href="/">
        <Avatar
          src="https://static.skillshare.com/uploads/users/188097050/user-image-medium.jpg?949765990"
          css={styled.authorAvatar}
        />
      </Box>
      <div>
        <div css={styled.authorProfileLink}>
          <Link href="/" variant="inherit" underline="none">
            Teflon Sega
          </Link>

          <FollowButton shouldDisplay={shouldDisplayFollowButton} />
        </div>

        <Typography css={styled.authorHeadline}>
          Musician, World Builder
        </Typography>

        {teacher !== undefined && (
          <div css={styled.tagWrapper}>
            <TeacherTag theme={theme} isTopTeacher={teacher === "top"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;
