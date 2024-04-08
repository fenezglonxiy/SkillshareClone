/** @jsxImportSource @emotion/react */

import { Dialog, Theme } from "@mui/material";
import getTeacherAplFormModalCss, {
  teacherAplFormModalClasses,
} from "./__styles__/getTeacherAplFormModalCss";
import TeacherAplFormModalHeader from "./TeacherAplFormModalHeader";

type Props = {
  theme: Theme;
};

const TeacherAplFormModal: React.FC<Props> = ({ theme }) => {
  const styled = getTeacherAplFormModalCss(theme);

  return (
    <Dialog
      open={true}
      classes={{
        paper: teacherAplFormModalClasses.paper,
      }}
      maxWidth={false}
      css={styled.root}
    >
      <div css={styled.content}>
        <TeacherAplFormModalHeader />
      </div>
    </Dialog>
  );
};

export default TeacherAplFormModal;
