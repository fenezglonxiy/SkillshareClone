import { SerializedStyles, css } from "@emotion/react";
import { MOBILE_HOME_HERO_IMAGE_HEIGHT } from "../constants";

const getImageContainerStyles = () => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4px;
`;

const getImageWrapperStyles = () => css`
  height: ${MOBILE_HOME_HERO_IMAGE_HEIGHT}px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type MobileHomeHeroStyledComponents = "imgContainer" | "imgWrapper";

const getMobileHomeHeroCss = (): Record<
  MobileHomeHeroStyledComponents,
  SerializedStyles
> => ({
  imgContainer: getImageContainerStyles(),
  imgWrapper: getImageWrapperStyles(),
});

export default getMobileHomeHeroCss;
