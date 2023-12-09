export const BASE_PATH = "";

const HomeRouteNames = {
  HOME: "",
  BROWSE: "browse",
} as const;

export default HomeRouteNames;

export type HomeRouteNamesValues =
  (typeof HomeRouteNames)[keyof typeof HomeRouteNames];
