/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Divider from "../../../../Divider/Divider";
import Typography from "../../../../Typography/Typography";
import BrowseLink from "../BrowseLink";
import { SECTION_BASED_BROWSE_ROUTES } from "./constants";
import getBrowseSidebarCss from "./getBrowseSidebarCss";
import { ALL_CLASSES, BrowseRouteNamesValues } from "../../constants/routes";
import { ClassNames } from "@emotion/react";

type Props = {
  routeName: BrowseRouteNamesValues;
};

const BrowseSidebar: React.FC<Props> = ({ routeName }) => {
  const theme = useTheme();
  const styled = getBrowseSidebarCss(theme);

  return (
    <ClassNames>
      {({ css, cx }) => (
        <nav>
          <div css={styled.section}>
            <BrowseLink
              label={ALL_CLASSES.label}
              href={ALL_CLASSES.href}
              className={cx(
                css`
                  ${styled.link}
                `,
                css`
                  ${styled.allClassesLink}
                `
              )}
              classes={{
                selected:
                  routeName === ALL_CLASSES.value
                    ? css`
                        ${styled.selectedLink}
                      `
                    : undefined,
              }}
            />
          </div>
          {SECTION_BASED_BROWSE_ROUTES.map((section) => (
            <div key={section.key} css={styled.section}>
              <div css={styled.heading}>
                <Typography variant="label" color="navy">
                  {section.heading}
                </Typography>
                <Divider color="concrete" />
              </div>
              <ul>
                {section.routes.map((route) => (
                  <li key={route.label}>
                    <BrowseLink
                      label={route.label}
                      href={route.href}
                      css={styled.link}
                      classes={{
                        selected:
                          routeName === route.value
                            ? css`
                                ${styled.selectedLink}
                              `
                            : undefined,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </ClassNames>
  );
};

export default BrowseSidebar;
