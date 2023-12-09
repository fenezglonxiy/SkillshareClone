/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import ExpandableContainer from "../../../../../ExpandableContainer/ExpandableContainer";
import Typography from "../../../../../Typography/Typography";
import getClassAgendaCss from "./__styles__/getClassAgendaCss";
import ClassLessonPlaylist from "./ClassLessonPlaylist";
import ClassLessonPlayItem from "./ClassLessonPlayItem";

const ClassAgenda = () => {
  const theme = useTheme();
  const styled = getClassAgendaCss(theme);

  return (
    <div css={styled.root}>
      <ExpandableContainer
        label="Show All Lessons"
        css={styled.classAgendaDetails}
      >
        <div css={styled.classAgendaHeader}>
          <Typography variant="h3">Lessons in This Class</Typography>
          <Typography variant="body2Bold">13 Lessons (1h 3m)</Typography>
        </div>

        <ClassLessonPlaylist>
          <ClassLessonPlayItem />
          <ClassLessonPlayItem />
          <ClassLessonPlayItem />
          <ClassLessonPlayItem />
          <ClassLessonPlayItem />
        </ClassLessonPlaylist>
      </ExpandableContainer>
    </div>
  );
};

export default ClassAgenda;
