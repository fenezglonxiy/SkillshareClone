/** @jsxImportSource @emotion/react */

import { CardActions, useTheme } from "@mui/material";
import Button from "../../../Button/Button";
import SvgSaveClass from "../assets/SvgSaveClass";
import getClassCardActionsCss from "./__styles__/getClassCardActionsCss";

type Props = {
  teacherLink: string;
  teacherName: string;
};

const ClassCardActions: React.FC<Props> = ({ teacherLink, teacherName }) => {
  const theme = useTheme();
  const styled = getClassCardActionsCss(theme);

  return (
    <CardActions css={styled.root}>
      <Button
        href={teacherLink}
        variant="ghostLink"
        color="violet"
        css={styled.teacherLink}
      >
        {teacherName}
      </Button>
      <button type="button" aria-label="save class">
        <SvgSaveClass />
      </button>
    </CardActions>
  );
};

export default ClassCardActions;
