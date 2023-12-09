import { ReasonProps } from "./Reason";

export const WHY_JOIN_IMAGE_PREFIX = "/images/svg/why-join/";

export const REASONS: Array<Omit<ReasonProps, "theme"> & { key: string }> = [
  {
    key: "scholarship-video",
    bgImage: `url(${WHY_JOIN_IMAGE_PREFIX}/scholarship-reason.svg), url(${WHY_JOIN_IMAGE_PREFIX}/video-reason.svg)`,
    bgPosition: "left top, right bottom",
    description: "Take award-winning Skillshare Original Classes",
  },
  {
    key: "never-expires-likeminded",
    bgImage: `url(${WHY_JOIN_IMAGE_PREFIX}/never-expires-reason.svg), url(${WHY_JOIN_IMAGE_PREFIX}/likeminded-students-reason.svg)`,
    bgPosition: "right top, left bottom",
    description: "Each class has short lessons, hands-on projects",
  },
  {
    key: "become-benefactor-monthly-payouts",
    bgImage: `url(${WHY_JOIN_IMAGE_PREFIX}/become-benefactor-reason.svg), url(${WHY_JOIN_IMAGE_PREFIX}/monthly-payouts-reason.svg)`,
    bgPosition: "right top, left bottom",
    description: "Your membership supports Skillshare teachers",
  },
];
