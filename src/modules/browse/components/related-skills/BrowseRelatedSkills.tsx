/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Button from "../../../../Button/Button";
import Typography from "../../../../Typography/Typography";
import getBrowseRelatedSkillsCss from "./getBrowseRelatedSkillsCss";
import BrowseRelatedSkillTag from "./BrowseRelatedSkillTag";

const BrowseRelatedSkills = () => {
  const theme = useTheme();
  const css = getBrowseRelatedSkillsCss(theme);

  return (
    <div css={css}>
      <Typography variant="label" component="h4" color="navy">
        Related skills
      </Typography>

      <BrowseRelatedSkillTag href="/" label="Motion Graphics" />
      <BrowseRelatedSkillTag href="/" label="3D Animation" />
      <BrowseRelatedSkillTag href="/" label="3D Rendering" />
      <BrowseRelatedSkillTag href="/" label="3D Design" />
      <BrowseRelatedSkillTag href="/" label="Character Animation" />
      <BrowseRelatedSkillTag href="/" label="Adobe After Effects" />
      <BrowseRelatedSkillTag href="/" label="Blender" />
      <BrowseRelatedSkillTag href="/" label="After Effects" />
    </div>
  );
};

export default BrowseRelatedSkills;
