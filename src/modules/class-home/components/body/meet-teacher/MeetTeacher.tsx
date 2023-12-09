/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Typography from "../../../../../Typography/Typography";
import RichContentWrapper from "../../../../../RichContentWrapper/RichContentWrapper";
import Link from "../../../../../Link/Link";
import AuthorDetails from "../../../../author-details/components/AuthorDetails";
import getMeetTeacherCss from "./__styles__/getMeetTeacherCss";

const MeetTeacher = () => {
  const theme = useTheme();
  const styled = getMeetTeacherCss(theme);

  return (
    <div>
      <Typography variant="h3">Meet Your Teacher</Typography>
      <AuthorDetails
        contribution="class"
        teacher="normal"
        css={styled.authorDetails}
      />
      {/* 45 */}
      <RichContentWrapper>
        <p>
          Teflon Sega is a 2D/3D animated singer who's been releasing a song a
          week over the last year, amassing 19 million plays on Spotify, 10
          million plays on Soundcloud, and 15 million plays on YouTube. His
          avatar lives fully in the metaverse in locations he fully animates and
          creates. He is an absolute expert in the emerging worlds of the
          metaverse, NFTs, virtual avatars and can speak fluently on the topics
          while equally understanding and sensitive to the criticisms
          surrounding them, making him a well-rounded expert in the space.
          Teflon is also highly skilled in the technical side of what he does;
          animation, 3D animation, and the software he uses to achieve them such
          as Blender, Unreal Engine, and other modeling software. He is
          continually innovative and active in the spaces he moves in, oft...
          <Link href="/" variant="body2Bold" color="violet" underline="hover">
            See full profile
          </Link>
        </p>
      </RichContentWrapper>
    </div>
  );
};

export default MeetTeacher;
