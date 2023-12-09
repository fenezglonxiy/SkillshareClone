import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { ReasonProps } from "../Reason";

const getRootStyles = (theme: Theme) => css`
  ${theme.breakpoints.down("lg")} {
    padding: ${theme.spacing(24)};
  }
`;

const getReasonDetailsStyles = () => css`
  width: 272px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const getReasonIllustrationStyles = (theme: Theme, props: ReasonProps) => css`
  width: 170px;
  height: 170px;
  background-image: ${props.bgImage};
  background-position: ${props.bgPosition};
  background-repeat: no-repeat;
  margin-bottom: ${theme.spacing(24)};
`;

type ReasonStyledComponents = "root" | "reasonDetails" | "reasonIllustration";

const getReasonCss = (
  theme: Theme,
  props: ReasonProps
): Record<ReasonStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  reasonDetails: getReasonDetailsStyles(),
  reasonIllustration: getReasonIllustrationStyles(theme, props),
});

export default getReasonCss;
