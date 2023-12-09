import React from "react";
import Typography from "../../../../Typography/Typography";
import ClassReference from "./ClassReference";
import { Theme } from "@mui/material";

type Props = {
  theme: Theme;
};

const ProjectClass: React.FC<Props> = ({ theme }) => {
  return (
    <div>
      <Typography variant="label">Class</Typography>
      <ClassReference theme={theme} />
    </div>
  );
};

export default ProjectClass;
