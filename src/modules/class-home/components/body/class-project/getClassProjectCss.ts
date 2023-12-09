import { SerializedStyles, css } from "@emotion/react";

const getRootStyles = () => css`
  && {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const getContainerStyles = () => css`
  max-height: 252px;
`;

type ClassProjectStyledComponents = "root" | "container";

const getClassProjectCss = (): Record<
  ClassProjectStyledComponents,
  SerializedStyles
> => ({
  root: getRootStyles(),
  container: getContainerStyles(),
});

export default getClassProjectCss;
