/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Typography from "../../../../Typography/Typography";
import getBrowseExploreCss from "./getBrowseExploreCss";

type Props = {
  className?: string;
};

const BrowseExplore = (props: Props) => {
  const theme = useTheme();
  const styled = getBrowseExploreCss(theme);

  return (
    <div className={props.className} css={styled.root}>
      <Typography variant="h2" color="navy">
        Explore Your Creativity
      </Typography>
      <Typography variant="body2" color="navy">
        Take the next step on your creative journey. With these Skillshare
        classes, you can explore a range of topics, tools, and techniques, from
        photography and graphic design, to drawing and animation. Whether you’re
        looking for art classes for beginners or you’re an experienced
        professional, you can take your skills to the next level with online
        classes in software like Photoshop, Procreate and After Effects, or
        learning handmade techniques in painting, hand lettering, and
        illustration. Make a film, give your home a makeover, start a freelance
        business. There’s so much inspiration to explore on Skillshare, and
        you’ll get hands-on experience by completing and sharing your own
        projects.
      </Typography>
    </div>
  );
};

export default BrowseExplore;
