import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(8)};
`;

const getClassThumbnailStyles = () => css`
  & img {
    max-width: none;
    width: 80px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
  }
`;

const getClassInfoStyles = (theme: Theme) => css`
  & > div {
    ${theme.typography.captionBold};
  }

  & > div:not(:last-of-type) {
    margin-bottom: ${theme.spacing(4)};
  }
`;

type ClassReferenceStyledComponents = "root" | "classThumbnail" | "classInfo";

const getClassReferenceCss = (
  theme: Theme
): Record<ClassReferenceStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  classThumbnail: getClassThumbnailStyles(),
  classInfo: getClassInfoStyles(theme),
});

export default getClassReferenceCss;
