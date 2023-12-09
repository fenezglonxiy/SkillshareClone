/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import { ClassRatingVariant } from "../constants";
import ClassLikedRatingItem from "./ClassLikedRatingItem";
import ClassExpectationMetRatingItem from "./ClassExpectationMetRatingItem";
import {
  getClassRatingItemLabelId,
  useClassRatingListContext,
} from "../ClassRatingListContext";

export type ClassRatingItemBaseProps = {
  /**
   * The rating category.
   */
  ratingCategory: string;

  /**
   * The `id` of the item's label.
   */
  ariaLabelledBy?: string;

  /**
   * The theme to use.
   */
  theme: Theme;
};

export type ClassRatingItemProps = ClassRatingItemBaseProps & {
  /**
   * The number of users that agree with the rating category.
   */
  count: number;

  /**
   * The total number of users that perform rating the rating aspect.
   */
  total: number;

  /**
   * The variant to use.
   * Forwarded automatically by parent `ClassRatingSection`, do not set directly.
   */
  variant?: ClassRatingVariant;
};

const ClassRatingItem: React.FC<ClassRatingItemProps> = ({
  ratingCategory,
  count,
  total,
  variant,
  theme,
}) => {
  const context = useClassRatingListContext();

  if (!context) {
    throw new TypeError("No ClassRatingListContext provided!");
  }

  const ariaLabelledBy = getClassRatingItemLabelId(context.id, ratingCategory);
  const division = count / total;
  const percentage = parseInt((division * 100).toFixed(0));

  return variant === "like" ? (
    <ClassLikedRatingItem
      theme={theme}
      count={count}
      ratingCategory={ratingCategory}
      ariaLabelledBy={ariaLabelledBy}
    />
  ) : (
    <ClassExpectationMetRatingItem
      theme={theme}
      percentage={percentage}
      ratingCategory={ratingCategory}
      ariaLabelledBy={ariaLabelledBy}
    />
  );
};

export default ClassRatingItem;
