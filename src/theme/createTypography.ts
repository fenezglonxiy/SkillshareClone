import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display: SerializedStyles;
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
    body1: SerializedStyles;
    body2: SerializedStyles;
    caption: SerializedStyles;
    body1Medium: SerializedStyles;
    body1Bold: SerializedStyles;
    body2Medium: SerializedStyles;
    body2Bold: SerializedStyles;
    captionMedium: SerializedStyles;

    captionBold: SerializedStyles;
    title: SerializedStyles;
    subtitle: SerializedStyles;
    label: SerializedStyles;
    smallNavLink: SerializedStyles;
    largeNavLink: SerializedStyles;
    inherit: SerializedStyles;
    overline: SerializedStyles;
    button: undefined;
    h5: undefined;
    h6: undefined;
    subtitle1: undefined;
    subtitle2: undefined;
  }

  interface TypographyVariantsOption {
    display: SerializedStyles;
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
    body1: SerializedStyles;
    body2: SerializedStyles;
    caption: SerializedStyles;
    body1Medium: SerializedStyles;
    body1Bold: SerializedStyles;
    body2Medium: SerializedStyles;
    body2Bold: SerializedStyles;
    captionMedium: SerializedStyles;

    captionBold: SerializedStyles;
    title: SerializedStyles;
    subtitle: SerializedStyles;
    label: SerializedStyles;
    smallNavLink: SerializedStyles;
    largeNavLink: SerializedStyles;
    inherit: SerializedStyles;
    overline: SerializedStyles;
    button: undefined;
    h5: undefined;
    h6: undefined;
    subtitle1: undefined;
    subtitle2: undefined;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    body1Bold: true;
    body2Bold: true;
    captionMedium: true;
    captionBold: true;
    title: true;
    subtitle: true;
    label: true;
    smallNavLink: true;
    largeNavLink: true;
    button: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
  }
}

export const fontFamily: React.CSSProperties["fontFamily"] = [
  "GT Walsheim Pro",
  "Arial",
  "sans-serif",
].join(", ");

type TypeFontWeight = "regular" | "medium" | "bold";

const fontWeight = (
  type: TypeFontWeight = "regular"
): React.CSSProperties["fontWeight"] => {
  switch (type) {
    case "regular":
      return 400;
    case "medium":
      return 600;
    case "bold":
      return 900;
  }
};

const display = (): SerializedStyles => css`
  font-size: 48px;
  line-height: 52px;
  font-weight: ${fontWeight("bold")};
`;

const h1 = (): SerializedStyles => css`
  font-size: 36px;
  line-height: 44px;
  font-weight: ${fontWeight("bold")};
`;

const h2 = (): SerializedStyles => css`
  font-size: 26px;
  line-height: 32px;
  font-weight: ${fontWeight("bold")};
`;

const h3 = (): SerializedStyles => css`
  font-size: 22px;
  line-height: 28px;
  font-weight: ${fontWeight("bold")};
`;

const h4 = (): SerializedStyles => css`
  font-size: 18px;
  line-height: 22px;
  font-weight: ${fontWeight("bold")};
`;

const body1 = (type: TypeFontWeight = "regular"): SerializedStyles => css`
  font-size: 18px;
  line-height: 24px;
  font-weight: ${fontWeight(type)};
`;

const body2 = (type: TypeFontWeight = "regular"): SerializedStyles => css`
  font-size: 15px;
  line-height: 20px;
  font-weight: ${fontWeight(type)};
`;

const caption = (type: TypeFontWeight = "regular"): SerializedStyles => css`
  font-size: 13px;
  line-height: 18px;
  font-weight: ${fontWeight(type)};
`;

const title: SerializedStyles = body2("bold");

const subtitle = (): SerializedStyles => css`
  font-size: 15px;
  line-height: 18px;
  font-weight: ${fontWeight("regular")};
`;

const label = (): SerializedStyles => css`
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: ${fontWeight("bold")};
  letter-spacing: 1px;
`;

const smallNavLink = (): SerializedStyles => css`
  font-size: 13px;
`;

const largeNavLink = (): SerializedStyles => css`
  font-size: 18px;
  font-weight: ${fontWeight("regular")};
`;

const overline = (): SerializedStyles => css`
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
`;

const typography = (theme: Theme): Typography => ({
  fontFamily: fontFamily,
  htmlFontSize: 16,
  fontSize: 15,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  inherit: css`
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  `,

  display: display(),
  h1: h1(),
  h2: h2(),
  h3: h3(),
  h4: h4(),

  body1: body1(),
  body1Medium: body1("medium"),
  body1Bold: body1("bold"),

  body2: body2(),
  body2Medium: body2("medium"),
  body2Bold: body2("bold"),

  caption: caption(),
  captionMedium: caption("medium"),
  captionBold: caption("bold"),

  title: title,
  subtitle: subtitle(),

  label: label(),

  smallNavLink: smallNavLink(),
  largeNavLink: largeNavLink(),

  h5: undefined,
  h6: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  button: undefined,
  overline: overline(),

  pxToRem: theme.typography.pxToRem,
});

export default typography;
