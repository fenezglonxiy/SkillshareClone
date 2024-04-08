/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Button from "../../../Button/Button";
import Typography from "../../../Typography/Typography";
import getTeachHeroCss from "./__styles__/getTeachHeroCss";
import { useContext } from "react";
import { usePageWrapperContext } from "../../page-wrapper/components/PageWrapperContext";

type Props = {
  theme: Theme;
};

const TeachHero = (props: Props) => {
  const { theme } = props;
  const styled = getTeachHeroCss(theme);
  const { openSignUpModal } = usePageWrapperContext();

  return (
    <div css={styled.root}>
      <div css={styled.teachHeroContent}>
        <Typography css={styled.teachHeroTitle}>
          Inspire Creativity in Others.
        </Typography>
        <Typography variant="body1Bold">
          Teach on Skillshare and share your passion with members around the
          world.
        </Typography>
      </div>

      <div css={styled.teachHeroNoteCard}>
        <Typography variant="body2">
          Before applying, check out this Teacher Help Center article, which
          will guide you through the application process.
        </Typography>

        <Button onClick={openSignUpModal}>Apply To Teach</Button>
      </div>
    </div>
  );
};

export default TeachHero;
