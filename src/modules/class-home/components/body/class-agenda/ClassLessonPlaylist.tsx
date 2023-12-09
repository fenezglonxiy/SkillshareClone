/** @jsxImportSource @emotion/react */

import React from "react";
import ClassLessonPlayItem, {
  ClassLessonPlayItemProps,
} from "./ClassLessonPlayItem";
import { css } from "@mui/material";
import { CLASS_LESSON_PLAYLIST_COUNTER } from "./constants";

type Props = {
  /**
   * The content of the component.
   */
  children:
    | React.ReactElement<ClassLessonPlayItemProps, typeof ClassLessonPlayItem>
    | Array<
        React.ReactElement<ClassLessonPlayItemProps, typeof ClassLessonPlayItem>
      >;
} & React.ComponentPropsWithRef<"ol">;

const ClassLessonPlaylist: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <ol
      css={css`
        counter-reset: ${CLASS_LESSON_PLAYLIST_COUNTER};
      `}
      {...rest}
    >
      {children}
    </ol>
  );
};

export default ClassLessonPlaylist;
