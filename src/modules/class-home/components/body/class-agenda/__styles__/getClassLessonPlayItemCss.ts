import { SerializedStyles, css } from "@emotion/react";
import { CLASS_LESSON_PLAYLIST_COUNTER } from "../constants";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(10, 14, 10, 10)};
  border-radius: 4px;
  color: ${theme.palette.navy};
  border: 2px solid transparent;
  cursor: pointer;

  & > svg {
    opacity: 0;
  }

  &:hover,
  &:focus {
    border-color: ${theme.palette.navy};

    & > svg {
      opacity: 1;
    }
  }

  &[aria-selected="true"] {
    color: ${theme.palette.white};
    background: ${theme.palette.navy};

    & > svg {
      opacity: 1;
    }

    & p {
      ${theme.typography.body2Medium};
    }
  }
`;

const getLessonTitleStyles = (theme: Theme) => css`
  counter-increment: ${CLASS_LESSON_PLAYLIST_COUNTER};
  margin-left: ${theme.spacing(8)};

  &::before {
    content: counter(${CLASS_LESSON_PLAYLIST_COUNTER}) ". ";
  }
`;

const getVideoLengthStyles = () => css`
  margin-left: auto;
`;

type ClassLessonPlayItemStyledComponents =
  | "root"
  | "lessonTitle"
  | "videoLength";

const getClassLessonPlayItemCss = (
  theme: Theme
): Record<ClassLessonPlayItemStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  lessonTitle: getLessonTitleStyles(theme),
  videoLength: getVideoLengthStyles(),
});

export default getClassLessonPlayItemCss;
