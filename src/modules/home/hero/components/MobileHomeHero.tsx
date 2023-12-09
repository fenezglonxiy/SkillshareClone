/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import { MOBILE_HOME_HERO_IMAGES } from "./constants";
import AuthenticationForm from "../../../auth/form/AuthForm";
import getMobileHomeHeroCss from "./__styles__/getMobileHomeHeroCss";

const MobileHomeHero = () => {
  const theme = useTheme();
  const styled = getMobileHomeHeroCss();

  return (
    <div
      style={{
        backgroundColor: theme.palette.navy,
      }}
    >
      <div css={styled.imgContainer}>
        {MOBILE_HOME_HERO_IMAGES.map((image) => (
          <div key={image.alt} css={styled.imgWrapper}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <AuthenticationForm />
    </div>
  );
};

export default MobileHomeHero;
