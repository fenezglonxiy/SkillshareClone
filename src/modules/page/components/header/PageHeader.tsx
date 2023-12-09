/** @jsxImportSource @emotion/react */

import { useMediaQuery, useTheme } from "@mui/material";
import PageHeaderLeftNav from "./PageHeaderLeftNav";
import PageHeaderLogo from "./PageHeaderLogo";
import PageHeaderRightNav from "./PageHeaderRightNav";
import getPageHeaderCss from "./__styles__/getPageHeaderCss";
import { ClassNames } from "@emotion/react";

export type PageHeaderProps = {
  isHomePage?: boolean;
};

const PageHeader = (props: PageHeaderProps) => {
  const theme = useTheme();
  const styled = getPageHeaderCss(theme);
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const { isHomePage } = props;

  const leftNavProps = {
    hideSearch: isHomePage && isMdBreakpoint,
  };

  return (
    <ClassNames>
      {({ css, cx }) => (
        <header
          className={cx(
            css`
              ${styled.root}
            `,
            {
              [css`
                ${styled.rootHomePagePlacement}
              `]: isHomePage,
            }
          )}
        >
          <div css={styled.container}>
            <PageHeaderLogo />
            <div css={styled.navContainer}>
              <PageHeaderLeftNav {...leftNavProps} />
              <PageHeaderRightNav />
            </div>
          </div>
        </header>
      )}
    </ClassNames>
  );
};

export default PageHeader;
