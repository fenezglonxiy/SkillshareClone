/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Typography from "../../../../../Typography/Typography";
import { MOBILE_FOOTER_LINKS } from "./constants";
import Link from "../../../../../Link/Link";
import getMobileFooterCss from "./__styles__/getMobileFooterCss";

const MobileFooter = () => {
  const theme = useTheme();
  const styled = getMobileFooterCss(theme);

  return (
    <nav css={styled.root}>
      <div css={styled.linkContainer}>
        {MOBILE_FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            underline="none"
            variant="body2"
            color="white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Typography variant="body2">© Skillshare, Inc. 2023</Typography>
    </nav>
  );
};

export default MobileFooter;
