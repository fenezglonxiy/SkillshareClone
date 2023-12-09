/** @jsxImportSource @emotion/react */

import { Dialog, useTheme } from "@mui/material";
import getStudentProjectModalCss from "./getStudentProjectModalCss";
import StudentProject from "../../../../../student-project/components/StudentProject";
import { ClassNames } from "@emotion/react";

const StudentProjectModal = () => {
  const theme = useTheme();
  const styled = getStudentProjectModalCss(theme);

  return (
    <ClassNames>
      {({ css }) => (
        <Dialog
          open={false}
          classes={{
            paper: css`
              ${styled.paper}
            `,
          }}
          aria-labelledby="test"
        >
          <StudentProject />
        </Dialog>
      )}
    </ClassNames>
  );
};

export default StudentProjectModal;
