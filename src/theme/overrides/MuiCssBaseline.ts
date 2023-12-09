import palette from "../createPalette";
import { fontFamily } from "../createTypography";

const MuiCssBaseline = {
  styleOverrides: `
    /* https://piccalil.li/blog/a-modern-css-reset */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    /* Remove default margin */
    * {
      margin: 0;
      padding: 0;
      font: inherit;
    }
    
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul,
    ol {
      list-style: none;
    }
    
    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: smooth;
    }
    
    html,
    body {
      height: 100%;
    }
    
    /* Set core body defaults */
    body {
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      font-family: ${fontFamily};
      scrollbar-gutter: stable;
    }

    /* Set text highlight */
    ::selection {
      color: ${palette.navy};
      background: ${palette.wanderGreen};
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    
    /* Make images easier to work with */
    img,
    picture,
    svg {
      max-width: 100%;
      display: block;
    },

    button {
      background: transparent;
      padding: 0;
      border: 0;
      cursor: pointer;
    },
    
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }
    
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `,
};

export default MuiCssBaseline;
