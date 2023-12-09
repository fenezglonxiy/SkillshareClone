import { BrowseRoute } from "../../constants/routes";

export const COLUMN_BASED_BROWSE_ROUTES = [
  [
    {
      key: "create",
      heading: "create",
      routes: [
        {
          label: BrowseRoute.ANIMATION.label,
          href: BrowseRoute.ANIMATION.href,
        },
        {
          label: BrowseRoute.CREATIVE_WRITING.label,
          href: BrowseRoute.CREATIVE_WRITING.href,
        },
        {
          label: BrowseRoute.FILM_AND_VIDEO.label,
          href: BrowseRoute.FILM_AND_VIDEO.href,
        },
        {
          label: BrowseRoute.FINE_ART.label,
          href: BrowseRoute.FINE_ART.href,
        },
        {
          label: BrowseRoute.GRAPHIC_DESIGN.label,
          href: BrowseRoute.GRAPHIC_DESIGN.href,
        },
        {
          label: BrowseRoute.ILLUSTRATION.label,
          href: BrowseRoute.ILLUSTRATION.href,
        },
        {
          label: BrowseRoute.MUSIC.label,
          href: BrowseRoute.MUSIC.href,
        },
        {
          label: BrowseRoute.PHOTOGRAPHY.label,
          href: BrowseRoute.PHOTOGRAPHY.href,
        },
        {
          label: BrowseRoute.UI_UX_DESIGN.label,
          href: BrowseRoute.UI_UX_DESIGN.href,
        },
      ],
    },
  ],
  [
    {
      key: "build",
      heading: "build",
      routes: [
        {
          label: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.label,
          href: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.href,
        },
        {
          label: BrowseRoute.MARKETING.label,
          href: BrowseRoute.MARKETING.href,
        },
      ],
    },
    {
      key: "thrive",
      heading: "thrive",
      routes: [
        {
          label: BrowseRoute.LIFESTYLE.label,
          href: BrowseRoute.LIFESTYLE.href,
        },
        {
          label: BrowseRoute.PRODUCTIVITY.label,
          href: BrowseRoute.PRODUCTIVITY.href,
        },
      ],
    },
  ],
  [
    {
      key: "last-section",
      heading: undefined,
      routes: [
        {
          label: BrowseRoute.ALL_CLASSES.label,
          href: BrowseRoute.ALL_CLASSES.href,
        },
        {
          label: "Student Projects",
          href: "/",
        },
      ],
    },
  ],
];

export const TOOLTIP_OFFSET_TOP = 12;
export const TOOLTIP_OFFSET_LEFT = 160;
export const CONTENT_COLUMN_WIDTH = 263;
export const CONTENT_COLUMN_HEIGHT = 421;
export const SECTION_WIDTH = 239;
