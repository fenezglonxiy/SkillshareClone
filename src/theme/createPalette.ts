import * as Colors from "./Colors";

declare module "@mui/material/styles" {
  interface Palette {
    teal: string;
    turquoise: string;
    mint: string;
    heather: string;
    silver: string;
    white: string;
    black: string;
    scarlet: string;
    butterscotch: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    linkedInBlue: string;
    facebookDark: string;
    twitterDark: string;
    inherit: string;
    transparent: string;
    wanderGreen: string;
    violet: string;
    navy: string;
    blue: string;
    charcoal: string;
    concrete: string;
    canvas: string;
    red: string;
    yellow: string;
    darkCharcoal: string;
    philippineSilver: string;
    BrandColors: Colors.BrandColor;
    SupplementaryColors: Colors.SupplementaryColor;
  }

  interface PaletteOptions {
    teal: string;
    turquoise: string;
    mint: string;
    heather: string;
    silver: string;
    white: string;
    black: string;
    scarlet: string;
    butterscotch: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    linkedInBlue: string;
    facebookDark: string;
    twitterDark: string;
    inherit: string;
    transparent: string;
    wanderGreen: string;
    violet: string;
    navy: string;
    blue: string;
    charcoal: string;
    concrete: string;
    canvas: string;
    red: string;
    yellow: string;
    darkCharcoal: string;
    philippineSilver: string;
    BrandColors: Colors.BrandColor;
    SupplementaryColors: Colors.SupplementaryColor;
  }
}

const palette = {
  primary: {
    main: Colors.wanderGreen,
  },

  secondary: {
    main: Colors.navy,
  },

  text: {
    primary: Colors.navy,
    secondary: Colors.darkCharcoal,
  },

  teal: Colors.teal,
  turquoise: Colors.turquoise,
  mint: Colors.mint,
  heather: Colors.heather,
  silver: Colors.silver,
  white: Colors.white,
  black: Colors.black,
  scarlet: Colors.scarlet,
  butterscotch: Colors.butterscotch,
  facebook: Colors.facebook,
  twitter: Colors.twitter,
  instagram: Colors.instagram,
  youtube: Colors.youtube,
  linkedInBlue: Colors.linkedInBlue,
  facebookDark: Colors.facebookDark,
  twitterDark: Colors.twitterDark,
  inherit: Colors.inherit,
  transparent: Colors.transparent,
  wanderGreen: Colors.wanderGreen,
  violet: Colors.violet,
  navy: Colors.navy,
  blue: Colors.blue,
  charcoal: Colors.charcoal,
  concrete: Colors.concrete,
  canvas: Colors.canvas,
  red: Colors.red,
  yellow: Colors.yellow,
  darkCharcoal: Colors.darkCharcoal,
  philippineSilver: Colors.philippineSilver,

  BrandColors: {
    black: Colors.blue,
    blue: Colors.blue,
    canvas: Colors.canvas,
    charcoal: Colors.charcoal,
    concrete: Colors.concrete,
    navy: Colors.navy,
    red: Colors.red,
    violet: Colors.violet,
    wanderGreen: Colors.wanderGreen,
    yellow: Colors.yellow,
    white: Colors.white,
  },

  SupplementaryColors: {
    darkCharcoal: Colors.darkCharcoal,
    philippineSilver: Colors.philippineSilver,
  },
};

export default palette;
