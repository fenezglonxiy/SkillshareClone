export const BASE_PATH = "/browse";

const BrowseRouteNames = {
  ALL_CLASSES: "all-classes",
  ANIMATION: "animation",
  CREATIVE_WRITING: "creative-writing",
  FILM_AND_VIDEO: "film-and-video",
  FINE_ART: "fine-art",
  GRAPHIC_DESIGN: "graphic-design",
  ILLUSTRATION: "illustration",
  MUSIC: "music",
  PHOTOGRAPHY: "photography",
  UI_UX_DESIGN: "ui-ux-design",
  FREELANCE_AND_ENTREPRENEURSHIP: "freelance-and-entrepreneurship",
  MARKETING: "marketing",
  LIFESTYLE: "lifestyle",
  PRODUCTIVITY: "productivity",
} as const;

export default BrowseRouteNames;

export type BrowseRouteNamesValues =
  (typeof BrowseRouteNames)[keyof typeof BrowseRouteNames];

export const BrowseRouteLabels = {
  "all-classes": "All Classes",
  animation: "Animation",
  "creative-writing": "Creative Writing",
  "film-and-video": "Film & Video",
  "fine-art": "Fine Art",
  "freelance-and-entrepreneurship": "Freelance & Entrepreneurship",
  "graphic-design": "Graphic Design",
  illustration: "Illustration",
  lifestyle: "Lifestyle",
  marketing: "Marketing",
  music: "Music",
  photography: "Photography",
  productivity: "Productivity",
  "ui-ux-design": "UI/UX Design",
} as const;

export type BrowseRouteLabelsValues =
  (typeof BrowseRouteLabels)[keyof typeof BrowseRouteLabels];

type BrowseRouteType = {
  href: string;
  label: BrowseRouteLabelsValues;
  value: BrowseRouteNamesValues;
};

export const BrowseRoute: Record<
  keyof typeof BrowseRouteNames,
  BrowseRouteType
> = {
  ALL_CLASSES: {
    href: `${BASE_PATH}`,
    label: BrowseRouteLabels[BrowseRouteNames.ALL_CLASSES],
    value: BrowseRouteNames.ALL_CLASSES,
  },
  ANIMATION: {
    href: `${BASE_PATH}/${BrowseRouteNames.ANIMATION}`,
    label: BrowseRouteLabels[BrowseRouteNames.ANIMATION],
    value: BrowseRouteNames.ANIMATION,
  },
  CREATIVE_WRITING: {
    href: `${BASE_PATH}/${BrowseRouteNames.CREATIVE_WRITING}`,
    label: BrowseRouteLabels[BrowseRouteNames.CREATIVE_WRITING],
    value: BrowseRouteNames.CREATIVE_WRITING,
  },
  FILM_AND_VIDEO: {
    href: `${BASE_PATH}/${BrowseRouteNames.FILM_AND_VIDEO}`,
    label: BrowseRouteLabels[BrowseRouteNames.FILM_AND_VIDEO],
    value: BrowseRouteNames.FILM_AND_VIDEO,
  },
  FINE_ART: {
    href: `${BASE_PATH}/${BrowseRouteNames.FINE_ART}`,
    label: BrowseRouteLabels[BrowseRouteNames.FINE_ART],
    value: BrowseRouteNames.FINE_ART,
  },
  GRAPHIC_DESIGN: {
    href: `${BASE_PATH}/${BrowseRouteNames.GRAPHIC_DESIGN}`,
    label: BrowseRouteLabels[BrowseRouteNames.GRAPHIC_DESIGN],
    value: BrowseRouteNames.GRAPHIC_DESIGN,
  },
  ILLUSTRATION: {
    href: `${BASE_PATH}/${BrowseRouteNames.ILLUSTRATION}`,
    label: BrowseRouteLabels[BrowseRouteNames.ILLUSTRATION],
    value: BrowseRouteNames.ILLUSTRATION,
  },
  MUSIC: {
    href: `${BASE_PATH}/${BrowseRouteNames.MUSIC}`,
    label: BrowseRouteLabels[BrowseRouteNames.MUSIC],
    value: BrowseRouteNames.MUSIC,
  },
  PHOTOGRAPHY: {
    href: `${BASE_PATH}/${BrowseRouteNames.PHOTOGRAPHY}`,
    label: BrowseRouteLabels[BrowseRouteNames.PHOTOGRAPHY],
    value: BrowseRouteNames.PHOTOGRAPHY,
  },
  UI_UX_DESIGN: {
    href: `${BASE_PATH}/${BrowseRouteNames.UI_UX_DESIGN}`,
    label: BrowseRouteLabels[BrowseRouteNames.UI_UX_DESIGN],
    value: BrowseRouteNames.UI_UX_DESIGN,
  },
  FREELANCE_AND_ENTREPRENEURSHIP: {
    href: `${BASE_PATH}/${BrowseRouteNames.FREELANCE_AND_ENTREPRENEURSHIP}`,
    label: BrowseRouteLabels[BrowseRouteNames.FREELANCE_AND_ENTREPRENEURSHIP],
    value: BrowseRouteNames.FREELANCE_AND_ENTREPRENEURSHIP,
  },
  MARKETING: {
    href: `${BASE_PATH}/${BrowseRouteNames.MARKETING}`,
    label: BrowseRouteLabels[BrowseRouteNames.MARKETING],
    value: BrowseRouteNames.MARKETING,
  },
  LIFESTYLE: {
    href: `${BASE_PATH}/${BrowseRouteNames.LIFESTYLE}`,
    label: BrowseRouteLabels[BrowseRouteNames.LIFESTYLE],
    value: BrowseRouteNames.LIFESTYLE,
  },
  PRODUCTIVITY: {
    href: `${BASE_PATH}/${BrowseRouteNames.PRODUCTIVITY}`,
    label: BrowseRouteLabels[BrowseRouteNames.PRODUCTIVITY],
    value: BrowseRouteNames.PRODUCTIVITY,
  },
};

export const BROWSE_ROUTES: Array<BrowseRouteType> = [
  {
    href: BrowseRoute.ALL_CLASSES.href,
    label: BrowseRoute.ALL_CLASSES.label,
    value: BrowseRoute.ALL_CLASSES.value,
  },
  {
    href: BrowseRoute.ANIMATION.href,
    label: BrowseRoute.ANIMATION.label,
    value: BrowseRoute.ANIMATION.value,
  },
  {
    href: BrowseRoute.CREATIVE_WRITING.href,
    label: BrowseRoute.CREATIVE_WRITING.label,
    value: BrowseRoute.CREATIVE_WRITING.value,
  },
  {
    href: BrowseRoute.FILM_AND_VIDEO.href,
    label: BrowseRoute.FILM_AND_VIDEO.label,
    value: BrowseRoute.FILM_AND_VIDEO.value,
  },
  {
    href: BrowseRoute.FINE_ART.href,
    label: BrowseRoute.FINE_ART.label,
    value: BrowseRoute.FINE_ART.value,
  },
  {
    href: BrowseRoute.GRAPHIC_DESIGN.href,
    label: BrowseRoute.GRAPHIC_DESIGN.label,
    value: BrowseRoute.GRAPHIC_DESIGN.value,
  },
  {
    href: BrowseRoute.ILLUSTRATION.href,
    label: BrowseRoute.ILLUSTRATION.label,
    value: BrowseRoute.ILLUSTRATION.value,
  },
  {
    href: BrowseRoute.MUSIC.href,
    label: BrowseRoute.MUSIC.label,
    value: BrowseRoute.MUSIC.value,
  },
  {
    href: BrowseRoute.PHOTOGRAPHY.href,
    label: BrowseRoute.PHOTOGRAPHY.label,
    value: BrowseRoute.PHOTOGRAPHY.value,
  },
  {
    href: BrowseRoute.UI_UX_DESIGN.href,
    label: BrowseRoute.UI_UX_DESIGN.label,
    value: BrowseRoute.UI_UX_DESIGN.value,
  },
  {
    href: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.href,
    label: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.label,
    value: BrowseRoute.FREELANCE_AND_ENTREPRENEURSHIP.value,
  },
  {
    href: BrowseRoute.MARKETING.href,
    label: BrowseRoute.MARKETING.label,
    value: BrowseRoute.MARKETING.value,
  },
  {
    href: BrowseRoute.LIFESTYLE.href,
    label: BrowseRoute.LIFESTYLE.label,
    value: BrowseRoute.LIFESTYLE.value,
  },
  {
    href: BrowseRoute.PRODUCTIVITY.href,
    label: BrowseRoute.PRODUCTIVITY.label,
    value: BrowseRoute.PRODUCTIVITY.value,
  },
];

export const {
  ALL_CLASSES,
  ANIMATION,
  CREATIVE_WRITING,
  FILM_AND_VIDEO,
  FINE_ART,
  GRAPHIC_DESIGN,
  ILLUSTRATION,
  MUSIC,
  PHOTOGRAPHY,
  UI_UX_DESIGN,
} = BrowseRoute;
