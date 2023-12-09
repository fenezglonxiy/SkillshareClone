/** @jsxImportSource @emotion/react */

import { Container, useTheme } from "@mui/material";
import {
  LEFT_SIDE_DESKTOP_HERO_IMAGES,
  MAIN_DESKTOP_HERO_IMAGES,
  RIGHT_SIDE_DESKTOP_HERO_IMAGES,
} from "./constants";
import SvgRightScribble from "../assets/SvgRightScribble";
import SvgLeftScribble from "../assets/SvgLeftScribble";
import AuthForm from "../../../auth/form/AuthForm";
import getDesktopHomeHeroCss from "./__styles__/getDesktopHomeHeroCss";

const DesktopHomeHero = () => {
  const theme = useTheme();
  const styled = getDesktopHomeHeroCss(theme);

  const renderImage = ({ src, alt }: { src: string; alt: string }) => (
    <div css={styled["imgWrapper"]} key={alt}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );

  return (
    <div css={styled.root}>
      <Container maxWidth="xxxxl" css={styled.container} disableGutters>
        <div css={styled.sideCol}>
          <div css={styled.leftScribble}>
            <SvgLeftScribble />
          </div>
          {LEFT_SIDE_DESKTOP_HERO_IMAGES.map((image) => renderImage(image))}
        </div>
        <div css={styled.mainCol}>
          <div css={styled.mainColContainer}>
            {MAIN_DESKTOP_HERO_IMAGES[0].map((image) => renderImage(image))}
          </div>
          <div>
            <AuthForm />
          </div>
          <div css={styled.mainColContainer}>
            {MAIN_DESKTOP_HERO_IMAGES[1].map((image) => renderImage(image))}
          </div>
        </div>
        <div css={styled.sideCol}>
          <div css={styled.rightScribble}>
            <SvgRightScribble />
          </div>
          {RIGHT_SIDE_DESKTOP_HERO_IMAGES.map((image) => renderImage(image))}
        </div>
      </Container>
    </div>
  );
};

export default DesktopHomeHero;
