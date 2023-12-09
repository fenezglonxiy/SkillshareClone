import { Theme } from "@mui/material";
import { LinkProps } from "./Link";
import { SerializedStyles, css } from "@emotion/react";

const getUnderlineStyles = (
  theme: Theme,
  props: LinkProps
): SerializedStyles => css`
  text-decoration: none;

  ${props.underline === "always" &&
  css`
    text-decoration: underline;

    text-decoration-color: ${theme.palette[
      props.underlineColor as NonNullable<LinkProps["color"]>
    ]};
  `}

  ${props.underline === "hover" &&
  css`
    &:hover {
      color: ${theme.palette[
        props.underlineColor as NonNullable<LinkProps["color"]>
      ]};
      text-decoration: underline;

      text-decoration-color: ${theme.palette[
        props.underlineColor as NonNullable<LinkProps["color"]>
      ]};
    }
  `}
`;

const getLinkCss = (theme: Theme, props: LinkProps): SerializedStyles => css`
  color: ${theme.palette[props.color as NonNullable<LinkProps["color"]>]};
  ${getUnderlineStyles(theme, props)};
  ${theme.typography[props.variant as NonNullable<LinkProps["variant"]>]};
`;

export default getLinkCss;
