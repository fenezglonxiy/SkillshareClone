import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  background-color: ${theme.palette.white};
`;

const getLearnFromAnywhereDetailsStyles = (theme: Theme) => css`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing(0, 32)};
  text-align: center;

  ${theme.breakpoints.up("xs")} {
    text-align: left;
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr 261px;
    grid-template-areas:
      "a c"
      "b c";
    column-gap: ${theme.spacing(32)};
  }

  ${theme.breakpoints.up("lg")} {
    grid-template-rows: 465px;
    grid-template-columns: repeat(2, 1fr) 261px;
    grid-template-areas: "a b c";
  }
`;

const getLearnFromAnywhereTitleStyles = (theme: Theme) => css`
  padding-top: ${theme.spacing(56)};
  margin-bottom: ${theme.spacing(24)};

  ${theme.breakpoints.up("xs")} {
    padding-top: ${theme.spacing(96)};
    grid-area: a;
  }

  ${theme.breakpoints.up("lg")} {
    padding-top: ${theme.spacing(113)};
  }
`;

const getDividerStyles = (theme: Theme) => css`
  ${theme.breakpoints.down("xs")} {
    margin-inline: auto;
  }

  ${theme.breakpoints.up("xs")} {
    grid-area: b;
  }

  ${theme.breakpoints.down("lg")} {
    width: 125px;
  }

  ${theme.breakpoints.up("lg")} {
    grid-area: a;
    position: relative;
    top: ${theme.spacing(93)};
    left: calc(100% - ${theme.spacing(8)});
    height: 125px;
  }
`;

const getLearnFromAnywhereTextStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(40)};

  ${theme.breakpoints.up("xs")} {
    grid-area: b;
  }

  ${theme.breakpoints.up("lg")} {
    max-width: 368px;
    margin-top: ${theme.spacing(109)};
  }
`;

const getMobileDevicesDownloadLinkContainerStyles = (theme: Theme) => css`
  display: inline-flex;
  flex-wrap: wrap;
  margin-block: ${theme.spacing(48)};

  & > a {
    margin-bottom: ${theme.spacing(16)};
  }

  & > a:first-of-type {
    margin-right: ${theme.spacing(4)};
  }

  ${theme.breakpoints.down("xs")} {
    justify-content: center;
  }

  ${theme.breakpoints.up("xs")} {
    margin-block: ${theme.spacing(32)};
  }
`;

const getAppleStoreImageStyles = () => css`
  width: 175.92px;
  height: 50px;
`;

const getGooglePlayImageStyles = () => css`
  width: 173.33px;
  height: 52px;
`;

const getPhoneMockupLocdStyles = (theme: Theme) => css`
  position: relative;
  top: ${theme.spacing(-32)};
  width: 261px;
  height: 527px;
  background-image: url("/images/webp/phone-mockup-locd.webp");
  background-size: contain;
  filter: drop-shadow(12px 12px 25px rgba(0, 0, 0, 0.4));

  ${theme.breakpoints.down("xs")} {
    display: none;
  }

  ${theme.breakpoints.up("xs")} {
    grid-area: c;
  }
`;

type LearnFromAnywhereStyledComponents =
  | "root"
  | "learnFromAnywhereDetails"
  | "learnFromAnywhereTitle"
  | "divider"
  | "learnFromAnywhereText"
  | "mobileDevicesDownloadLinkContainer"
  | "appleStoreImage"
  | "googlePlayImage"
  | "phoneMockupLocd";

const getLearnFromAnywhereCss = (
  theme: Theme
): Record<LearnFromAnywhereStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  learnFromAnywhereDetails: getLearnFromAnywhereDetailsStyles(theme),
  learnFromAnywhereTitle: getLearnFromAnywhereTitleStyles(theme),
  divider: getDividerStyles(theme),
  learnFromAnywhereText: getLearnFromAnywhereTextStyles(theme),
  mobileDevicesDownloadLinkContainer:
    getMobileDevicesDownloadLinkContainerStyles(theme),
  appleStoreImage: getAppleStoreImageStyles(),
  googlePlayImage: getGooglePlayImageStyles(),
  phoneMockupLocd: getPhoneMockupLocdStyles(theme),
});

export default getLearnFromAnywhereCss;
