/** @jsxImportSource @emotion/react */

import { Container, useTheme } from "@mui/material";
import Link from "../../../../../Link/Link";
import Typography from "../../../../../Typography/Typography";
import getDesktopFooterCss from "./__styles__/getDesktopFooterCss";
import SvgAppStore from "../../../assets/SvgAppStore";
import SvgGooglePlay from "../../../assets/SvgGooglePlay";
import Divider from "../../../../../Divider/Divider";
import {
  DESKTOP_FOOTER_EXPANDED_LINKS,
  DESKTOP_FOOTER_MAIN,
} from "./constants";

const DesktopFooter = () => {
  const theme = useTheme();
  const styled = getDesktopFooterCss(theme);

  const renderMainLinkLabel = (label: string) => {
    return label === "SvgAppStore" ? (
      <SvgAppStore />
    ) : label === "SvgGooglePlay" ? (
      <SvgGooglePlay />
    ) : (
      label
    );
  };

  return (
    <nav css={styled.root}>
      <Container maxWidth="xl" disableGutters>
        <div css={styled.main}>
          {DESKTOP_FOOTER_MAIN.map((column) => (
            <div key={column.heading}>
              <Typography variant="body1Bold" color="white">
                {column.heading}
              </Typography>

              <ul css={styled.list}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      display="block"
                      color="white"
                      variant="body2"
                      underline="hover"
                      underlineColor="wanderGreen"
                    >
                      {renderMainLinkLabel(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div css={styled.expanded}>
          <div css={styled.expandedLinkContainer}>
            <Typography variant="body2" color="white">
              © Skillshare, Inc. 2023
            </Typography>
            {DESKTOP_FOOTER_EXPANDED_LINKS.map((link) => (
              <Link
                key={link.label}
                display="block"
                href={link.href}
                variant="body2"
                color="white"
                underline="hover"
                underlineColor="wanderGreen"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div></div>
        </div>
      </Container>
    </nav>
  );
};

export default DesktopFooter;
