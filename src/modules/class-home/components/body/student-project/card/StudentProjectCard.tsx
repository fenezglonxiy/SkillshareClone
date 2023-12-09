/** @jsxImportSource @emotion/react */

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import Typography from "../../../../../../Typography/Typography";
import getStudentProjectCardCss from "./getStudentProjectCardCss";
import Link from "../../../../../../Link/Link";

const StudentProjectCard = () => {
  const theme = useTheme();
  const styled = getStudentProjectCardCss(theme);

  return (
    <Card css={styled.root}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
          css={styled.cardMedia}
        />
      </CardActionArea>

      <CardContent css={styled.cardContent}>
        <div css={styled.studentLinkContainer}>
          <div css={styled.studentLinkWrapper}>
            <Link href="/" variant="caption" underline="none">
              Anderson Bruno Gadelha
            </Link>
          </div>

          <Typography variant="caption">112 likes</Typography>
        </div>
        <Typography variant="caption">999 comments</Typography>
      </CardContent>
    </Card>
  );
};

export default StudentProjectCard;
