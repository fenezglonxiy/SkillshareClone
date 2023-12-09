import { BrowseRoute } from "../../constants/routes";

export const SECTION_BASED_BROWSE_ROUTES = [
  {
    key: "create",
    heading: "create",
    routes: [
      {
        label: BrowseRoute.ANIMATION.label,
        href: BrowseRoute.ANIMATION.href,
        value: BrowseRoute.ANIMATION.value,
      },
      {
        label: BrowseRoute.CREATIVE_WRITING.label,
        href: BrowseRoute.CREATIVE_WRITING.href,
        value: BrowseRoute.CREATIVE_WRITING.value,
      },
      {
        label: BrowseRoute.FILM_AND_VIDEO.label,
        href: BrowseRoute.FILM_AND_VIDEO.href,
        value: BrowseRoute.FILM_AND_VIDEO.value,
      },
      {
        label: BrowseRoute.FINE_ART.label,
        href: BrowseRoute.FINE_ART.href,
        value: BrowseRoute.FINE_ART.value,
      },
      {
        label: BrowseRoute.GRAPHIC_DESIGN.label,
        href: BrowseRoute.GRAPHIC_DESIGN.href,
        value: BrowseRoute.GRAPHIC_DESIGN.value,
      },
      {
        label: BrowseRoute.ILLUSTRATION.label,
        href: BrowseRoute.ILLUSTRATION.href,
        value: BrowseRoute.ILLUSTRATION.value,
      },
      {
        label: BrowseRoute.MUSIC.label,
        href: BrowseRoute.MUSIC.href,
        value: BrowseRoute.MUSIC.value,
      },
      {
        label: BrowseRoute.PHOTOGRAPHY.label,
        href: BrowseRoute.PHOTOGRAPHY.href,
        value: BrowseRoute.PHOTOGRAPHY.value,
      },
      {
        label: BrowseRoute.UI_UX_DESIGN.label,
        href: BrowseRoute.UI_UX_DESIGN.href,
        value: BrowseRoute.UI_UX_DESIGN.value,
      },
    ],
  },
  {
    key: "build",
    heading: "build",
    routes: [
      {
        label: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.label,
        href: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.href,
        value: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.value,
      },
      {
        label: BrowseRoute.MARKETING.label,
        href: BrowseRoute.MARKETING.href,
        value: BrowseRoute.MARKETING.value,
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
        value: BrowseRoute.LIFESTYLE.value,
      },
      {
        label: BrowseRoute.PRODUCTIVITY.label,
        href: BrowseRoute.PRODUCTIVITY.href,
        value: BrowseRoute.PRODUCTIVITY.value,
      },
    ],
  },
];
