/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import ExpandableContainer from "../../../../../ExpandableContainer/ExpandableContainer";
import Typography from "../../../../../Typography/Typography";
import getAboutClassCss from "./getAboutClassCss";
import RichContentWrapper from "../../../../../RichContentWrapper/RichContentWrapper";

const AboutClass = () => {
  const theme = useTheme();
  const css = getAboutClassCss(theme);

  return (
    <div>
      <ExpandableContainer css={css}>
        <Typography variant="h3">About This Class</Typography>

        <RichContentWrapper>
          <Typography variant="body2">
            Join megastar Teflon Sega in the virtual world and discover the
            fundamentals to creating a custom avatar that virtually represents
            you across your favorite platforms.
            <br />
            After being shelved by his record label, Teflon Sega started his
            career as a 2D/3D animated singer. Starting simply out of the desire
            to keep creating music without breaching his contract, he taught
            himself 3D animation and created his VR avatar “Teflon Sega” as a
            loophole to keep doing what he loved. Since then, his music catalog
            has amassed nearly 100 million streams across Spotify and YouTube
            and has crafted a dedicated community of over 850K across social
            media, a number that continues to steadily grow. His successes have
            earned him features in Billboard and Forbes, and past collaborations
            with music superstars like Justin Bieber, the Weeknd, and Metallica,
            and most recently producing Fireboy DML’s “Beyond Worlds” music
            video, he can’t wait to reveal how easy and accessible it can be to
            create your own virtual avatar and take them to out-of-this-world
            heights.
            <br />
            Created for anyone curious about the world of VR, getting into
            VTubing, or just those looking to get a headstart on the rapidly
            growing metaverse, this class can help anybody create and customize
            their own 3D avatar. If you’ve always wanted to explore the unique
            process of making an avatar that represents you and how you can use
            it to discover the abundance of digital opportunities online, this
            is the class for you!
          </Typography>
        </RichContentWrapper>
      </ExpandableContainer>
    </div>
  );
};

export default AboutClass;
