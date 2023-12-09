import { Theme, css } from "@mui/material";
import { RIGHT_COLUMN_SPACING_INLINE } from "../constants";

const getBrowseRelatedSkillsCss = (theme: Theme) => css`
  display: none;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(12, 8)};
  padding: ${theme.spacing(4, RIGHT_COLUMN_SPACING_INLINE, 0)};
  margin: ${theme.spacing(0, 0, 12)};

  & > h4 {
    margin-right: ${theme.spacing(8)};
  }

  ${theme.breakpoints.up("md")} {
    display: flex;
  }
`;

export default getBrowseRelatedSkillsCss;
