/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Tooltip from "../../../../Tooltip/Tooltip";
import SvgList from "../../assets/SvgList";
import { useState } from "react";
import Link from "../../../../Link/Link";
import { MENU_NAV_LINKS } from "./constants";
import SvgClose from "../../../../assets/SvgClose";
import getPageHeaderMenuCss from "./__styles__/getPageHeaderMenuCss";
import { ClassNames } from "@emotion/react";

const PageHeaderMenu = () => {
  const theme = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const openHeaderMenu = () => {
    setMenuIsOpen(true);
  };

  const closeHeaderMenu = () => {
    setMenuIsOpen(false);
  };

  const styled = getPageHeaderMenuCss(theme);

  const renderNav = () => {
    return (
      <div>
        <button type="button">
          <SvgClose />
        </button>

        <nav css={styled.navWrapper}>
          <ul>
            {MENU_NAV_LINKS.map((link) => (
              <li key={link.label} css={styled.navItem}>
                <Link
                  variant="body2Bold"
                  href={link.href}
                  display="block"
                  underline="none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <ClassNames>
      {({ css }) => (
        <Tooltip
          title={renderNav()}
          onClose={closeHeaderMenu}
          trigger="click"
          open={menuIsOpen}
          classes={{
            tooltip: css`
              ${styled.tooltip}
            `,
            popper: css`
              ${styled.tooltipPopper}
            `,
          }}
        >
          <button
            onClick={openHeaderMenu}
            type="button"
            aria-label="Open Navigation Menu"
          >
            <SvgList />
          </button>
        </Tooltip>
      )}
    </ClassNames>
  );
};

export default PageHeaderMenu;
