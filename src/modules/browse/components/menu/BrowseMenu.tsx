/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import { useState } from "react";
import Tooltip from "../../../../Tooltip/Tooltip";
import Button from "../../../../Button/Button";
import Divider from "../../../../Divider/Divider";
import Typography from "../../../../Typography/Typography";
import BrowseLink from "../BrowseLink";
import getBrowseMenuCss, { browseMenuClasses } from "./getBrowseMenuCss";
import { ClassNames } from "@emotion/react";
import { COLUMN_BASED_BROWSE_ROUTES } from "./constants";
import SvgChevronDown from "../../assets/SvgChevronDown";

const BrowseMenu = () => {
  const theme = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const openHeaderMenu = () => {
    setMenuIsOpen(true);
  };

  const closeHeaderMenu = () => {
    setMenuIsOpen(false);
  };

  const styled = getBrowseMenuCss(theme);

  const renderNav = () => {
    return (
      <nav css={styled.wrapper}>
        <div css={styled.content}>
          {COLUMN_BASED_BROWSE_ROUTES.map((column, columnIdx) => (
            <div
              className={browseMenuClasses.column}
              key={`browse-menu-${columnIdx}-col`}
            >
              {columnIdx === COLUMN_BASED_BROWSE_ROUTES.length - 1 && (
                <Divider orientation="vertical" color="concrete" />
              )}

              <div css={styled.sectionContainer}>
                {column.map((section) => (
                  <div
                    css={styled.section}
                    className={browseMenuClasses.section}
                    key={section.key}
                  >
                    {section.heading !== undefined && (
                      <div css={styled.heading}>
                        <Typography variant="label" color="charcoal">
                          {section.heading}
                        </Typography>
                        <Divider color="concrete" />
                      </div>
                    )}

                    <ul>
                      {section.routes.map((route) => (
                        <li key={route.label}>
                          <BrowseLink label={route.label} href={route.href} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    );
  };

  return (
    <ClassNames>
      {({ css }) => (
        <Tooltip
          title={renderNav()}
          trigger="click"
          open={menuIsOpen}
          onClose={closeHeaderMenu}
          classes={{
            tooltip: css`
              ${styled.tooltip}
            `,
          }}
        >
          <Button variant="ghostLink" onClick={openHeaderMenu}>
            Browse{" "}
            <SvgChevronDown
              css={css`
                margin: 6px 0 0 4px;
              `}
              width="12px"
              height="12px"
            />
          </Button>
        </Tooltip>
      )}
    </ClassNames>
  );
};

export default BrowseMenu;
