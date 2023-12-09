import { BrowseRouteLabels, BrowseRouteNamesValues } from "../constants/routes";

export const XXS_LAYOUT_CONTAINER_PADDING_INLINE = 16;
export const XS_LAYOUT_CONTAINER_PADDING_INLINE = 24;
export const RIGHT_COLUMN_SPACING_INLINE = 8;

export const routeLabel = (routeName: BrowseRouteNamesValues) => {
  return routeName === "all-classes"
    ? "Online Classes"
    : `Online ${BrowseRouteLabels[routeName]} Classes`;
};

export const routeDescription = (routeName: BrowseRouteNamesValues) => {
  return routeName === "all-classes"
    ? "Find what fascinates you as you explore these online classes."
    : `Find what fascinates you as you explore these ${BrowseRouteLabels[routeName]} classes.`;
};
