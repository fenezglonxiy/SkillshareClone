/** @jsxImportSource @emotion/react */

import ExpandableContainer from "../../../../../ExpandableContainer/ExpandableContainer";
import RichContentWrapper from "../../../../../RichContentWrapper/RichContentWrapper";
import Typography from "../../../../../Typography/Typography";
import getClassProjectCss from "./getClassProjectCss";

const ClassProject = () => {
  const styled = getClassProjectCss();

  return (
    <div css={styled.root}>
      <ExpandableContainer css={styled.container}>
        <Typography variant="body2Bold">
          Level:{" "}
          <Typography variant="body2Medium" component="span">
            Beginner
          </Typography>
        </Typography>
        <Typography variant="h3">Hands-on Class Project</Typography>
        <RichContentWrapper>
          <p>Introduce us to your avatar!</p>
          <p></p>
          <p>
            From uploading yourself into the digital world to customizing your
            avatar and its environment to you, we want to see what you’ve been
            working on.
          </p>
          <p></p>
          <p>As you create your avatar, consider these questions:</p>
        </RichContentWrapper>
      </ExpandableContainer>
    </div>
  );
};

export default ClassProject;
