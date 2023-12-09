import { Theme, css } from "@mui/material";
import { ClassRatingVariant } from "../constants";

const getExpectationVariantStyles = () => css`
  width: 250px;
  display: grid;
  grid-template-columns: auto 1fr;
  text-align: right;
  margin: 0 auto;
`;

const getClassRatingListCss = (theme: Theme, variant: ClassRatingVariant) =>
  css`
    ${variant === "expectation" && getExpectationVariantStyles()};

    & > li:not(:last-of-type) {
      margin-bottom: ${theme.spacing(16)};
    }
  `;

export default getClassRatingListCss;
