/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Divider from "../../../../../Divider/Divider";
import Typography from "../../../../../Typography/Typography";
import getAuthPromoBannerCss from "./getAuthPromoBannerCss";
import { AUTH_PROMO_BANNER_BLURB_LIST } from "./constants";
import SvgScribble from "../../../assets/SvgScribble";

const AuthPromoBanner = () => {
  const theme = useTheme();
  const styled = getAuthPromoBannerCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.authPromoBannerDetails}>
        <div css={styled.scribble}>
          <SvgScribble />
        </div>

        <Typography variant="h2" color="white">
          Watch this class and thousands more
        </Typography>

        <div css={styled.blurbContainer}>
          {AUTH_PROMO_BANNER_BLURB_LIST.map((blurb) => (
            <div key={blurb} css={styled.blurb}>
              <Divider size="small" color="wanderGreen" css={styled.divider} />
              <Typography variant="body1Medium" color="white">
                {blurb}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthPromoBanner;
