/** @jsxImportSource @emotion/react */

import { CardMedia, useTheme } from "@mui/material";
import SvgStaffPick from "../../../assets/SvgStaffPick";
import SvgOriginal from "../../../assets/SvgOriginal";
import SvgContainedPlay from "../assets/SvgContainedPlay";
import getClassCardMediaCss, {
  classMediaClasses,
} from "./__styles__/getClassCardMediaCss";

type Props = {
  /**
   * Specifies url of the image to be displayed.
   */
  src?: string;

  /**
   * Defines the badge of class.
   * @default undefined
   */
  classBadge?: "staffPick" | "original";

  /**
   * Defines whether class is new.
   * @default false
   */
  isNew?: boolean;
};

const ClassCardMedia = (props: Props) => {
  const { src, classBadge, isNew, ...rest } = props;
  const theme = useTheme();
  const styled = getClassCardMediaCss(theme);

  return (
    <CardMedia
      component="div"
      className={classMediaClasses.root}
      css={styled.root}
      {...rest}
    >
      <img src={src} alt="" loading="lazy" />

      {(classBadge === "staffPick" || classBadge === "original") && (
        <div css={styled.classBadgeWrapper}>
          {classBadge === "staffPick" && <SvgStaffPick />}
          {classBadge === "original" && <SvgOriginal />}
        </div>
      )}

      <button
        className={classMediaClasses.playBtn}
        css={styled.playBtn}
        type="button"
        aria-label="play"
      >
        <SvgContainedPlay />
      </button>
    </CardMedia>
  );
};

export default ClassCardMedia;
