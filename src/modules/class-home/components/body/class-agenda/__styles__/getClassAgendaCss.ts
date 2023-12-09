import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  padding-top: ${theme.spacing(32)};

  && {
    padding-bottom: ${theme.spacing(18)};
  }
`;

const getClassAgendaDetailsStyles = () => css`
  max-height: 272px;
`;

const getClassAgendaHeaderStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(28)};

  & > h3 {
    margin-bottom: ${theme.spacing(8)};
  }

  ${theme.breakpoints.up("xs")} {
    & > h3 {
      margin-bottom: 0;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type ClassAgendaStyledComponents =
  | "root"
  | "classAgendaDetails"
  | "classAgendaHeader";

const getClassAgendaCss = (
  theme: Theme
): Record<ClassAgendaStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  classAgendaDetails: getClassAgendaDetailsStyles(),
  classAgendaHeader: getClassAgendaHeaderStyles(theme),
});

export default getClassAgendaCss;
