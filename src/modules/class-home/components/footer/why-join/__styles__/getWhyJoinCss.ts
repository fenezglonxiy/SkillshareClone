import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { WHY_JOIN_IMAGE_PREFIX } from "../constants";

const getRootStyles = (theme: Theme) => css`
  position: relative;
  padding: ${theme.spacing(48, 0)};
  text-align: center;
  background-image: url("${WHY_JOIN_IMAGE_PREFIX}/line-draw.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 32.5%;

  ${theme.breakpoints.down("lg")} {
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      transform: scaleX(-1);
      background-position: 0 74.75%;
    }
  }

  ${theme.breakpoints.up("lg")} {
    padding: ${theme.spacing(104, 0, 142)};
    background-position: 0 50%;
  }
`;

const getWhyJoinDetailsStyles = () => css`
  max-width: 1135px;
  margin: 0 auto;
`;

const getReasonContainerStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.spacing(32)};

  ${theme.breakpoints.up("lg")} {
    justify-content: space-between;
  }
`;

type WhyJoinStyledComponents = "root" | "whyJoinDetails" | "reasonContainer";

const getWhyJoinCss = (
  theme: Theme
): Record<WhyJoinStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  whyJoinDetails: getWhyJoinDetailsStyles(),
  reasonContainer: getReasonContainerStyles(theme),
});

export default getWhyJoinCss;
