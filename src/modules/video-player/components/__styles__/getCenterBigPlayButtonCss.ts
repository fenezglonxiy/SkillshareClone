import { Theme, css } from "@mui/material";

const getCenterBigPlayButtonCss = (theme: Theme) => css`
  margin-top: 0;
  margin-left: 0;
  border: none;
  transition: none;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.6) !important;

  &::before {
    font-family: "ssicon";
    content: "";
    display: block;
    position: absolute;
    font-size: 40px;
    top: 50%;
    left: 58%;
    transform: translate(-58%, -50%);
  }

  &:hover,
  &:focus {
    background-color: ${theme.palette.navy} !important;
  }

  &:focus {
    &::before {
      color: ${theme.palette.wanderGreen};
    }
  }
`;

export default getCenterBigPlayButtonCss;
