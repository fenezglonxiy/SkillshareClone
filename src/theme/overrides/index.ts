import { Components, Theme } from "@mui/material";
import MuiCssBaseline from "./MuiCssBaseline";

const createOverrides: Components<Omit<Theme, "components">> = {
  MuiCssBaseline,
};

export default createOverrides;
