/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import SkillshareLogo from "../SkillshareLogo";
import getPageHeaderLogoCss from "./__styles__/getPageHeaderLogoCss";

type Props = {
  isAuthenticatedUser?: boolean;
};

const PageHeaderLogo: React.FC<Props> = ({ isAuthenticatedUser }) => {
  let logoHref: string;

  if (isAuthenticatedUser) {
    logoHref = "/browse";
  } else {
    logoHref = "/";
  }

  const theme = useTheme();
  const styled = getPageHeaderLogoCss(theme);

  return (
    <div css={styled.root}>
      <a href={logoHref}>
        <SkillshareLogo hexColorCode={theme.palette.BrandColors.white} />
      </a>
    </div>
  );
};

export default PageHeaderLogo;
